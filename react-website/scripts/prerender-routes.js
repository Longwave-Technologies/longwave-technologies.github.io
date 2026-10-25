// Runs after `npm run build`. Does three things for search engines and AI
// crawlers, all generated from src/routes/seo.json and the product catalog:
//
// 1. GitHub Pages only knows about real files, so without this /products and
//    /contact return HTTP 404 (served by 404.html) and Google refuses to index
//    them. Writing build/products.html and build/contact.html makes GitHub
//    Pages serve those URLs with HTTP 200, each with its own title,
//    description, and canonical URL.
// 2. Many crawlers (ChatGPT, Claude, Perplexity, and others) don't run
//    JavaScript, so they would see an empty page. Each page gets plain HTML
//    content inside #root, plus schema.org structured data. React replaces the
//    #root content as soon as the app loads.
// 3. Writes build/llms.txt, a plain-text summary of the business for AI tools.
const fs = require("fs");
const path = require("path");
const seo = require("../src/routes/seo.json");
const products = require("../src/assets/images/products/copierInfo.json");

const BUILD_DIR = path.join(__dirname, "../build");
const template = fs.readFileSync(path.join(BUILD_DIR, "index.html"), "utf8");
const { business, services, areas, faq, siteUrl } = seo;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Replaces an existing <meta> tag (matched by attribute) or adds a new one.
// data-rh="true" lets react-helmet-async take over these tags on load instead
// of adding duplicates.
function setMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" data-rh="true"/>`;
  const pattern = new RegExp(`<meta[^>]*${attr}="${key}"[^>]*>`);
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `${tag}</head>`);
}

function jsonLd(data) {
  // Escape "<" so the JSON can never close the <script> tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

// ---- Product catalog helpers ----

const BRAND_NAMES = { Konica: "Konica Minolta" };

function brandName(product) {
  return BRAND_NAMES[product.brand] || product.brand;
}

function productName(product) {
  const series = (product.subCategory || "").trim();
  const parts = [brandName(product)];
  if (series && !series.includes(".")) parts.push(series);
  parts.push(product.modelnum);
  return parts.join(" ");
}

function productSummary(product) {
  const details = [product.color === "color" ? "Color" : "Black & white"];
  if (product.ppm) details.push(`${product.ppm.replace(/,/g, "/")} pages per minute`);
  if (product.function?.length) details.push(product.function.join(", "));
  const toners = Object.values(product.toners || {})
    .map((t) => String(t).trim())
    .filter(Boolean);
  if (toners.length) details.push(`Toner: ${toners.join(", ")}`);
  return details.join(". ") + ".";
}

function productsByBrand() {
  const groups = {};
  for (const product of products) {
    (groups[brandName(product)] ||= []).push(product);
  }
  return groups;
}

// ---- Structured data (schema.org) ----

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  legalName: business.legalName,
  description: business.summary,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/thumbnail.png`,
  telephone: business.phoneE164,
  email: business.email,
  foundingDate: business.foundingYear,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...Object.fromEntries(
      Object.entries(business.address).filter(([, value]) => value)
    ),
  },
  areaServed: areas.map((name) => ({ "@type": "AdministrativeArea", name })),
  openingHoursSpecification: business.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  knowsAbout: [
    "Copiers",
    "Used copiers",
    "Refurbished copiers",
    "Multifunction printers",
    "Copier leasing",
    "Copier repair",
    "Toner cartridges",
    ...business.brands.map((brand) => `${brand} copiers`),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Copier sales, leasing, repair, and supplies",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ---- Static page content (for crawlers that don't run JavaScript) ----

const telLink = `<a href="tel:${business.phoneE164}">${escapeHtml(business.phone)}</a>`;
const mailLink = `<a href="mailto:${business.email}">${escapeHtml(business.email)}</a>`;

const staticNav = `<nav><a href="/">${escapeHtml(business.name)}</a> | <a href="/products">Copiers for sale or lease</a> | <a href="/contact">Contact us</a></nav>`;

const staticFooter = `<footer><address><strong>${escapeHtml(business.name)}</strong><br/>${telLink} · ${mailLink}<br/>${escapeHtml(business.hoursText)}<br/>Serving ${escapeHtml(areas.join(", "))}</address></footer>`;

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

const pageBodies = {
  "/": () => `
<h1>Copier Sales, Leasing &amp; Repair in NYC, Long Island &amp; Westchester</h1>
<p>${escapeHtml(business.summary)}</p>
<h2>Our Services</h2>
${list(services.map((s) => `<strong>${escapeHtml(s.name)}</strong>: ${escapeHtml(s.description)}`))}
<p><a href="/products">Browse our new and used copiers for sale or lease</a></p>
<h2>Brands We Support</h2>
<p>${escapeHtml(business.brands.join(", "))}</p>
<h2>Areas We Serve</h2>
<p>${escapeHtml(areas.join(", "))}</p>
<h2>Frequently Asked Questions</h2>
${faq.map((item) => `<details><summary><h3>${escapeHtml(item.q)}</h3></summary><p>${escapeHtml(item.a)}</p></details>`).join("")}
<h2>Get a Quote</h2>
<p>Call ${telLink}, email ${mailLink}, or <a href="/contact">use our contact form</a>.</p>`,

  "/products": () => {
    const groups = productsByBrand();
    return `
<h1>New &amp; Used Copiers for Sale or Lease</h1>
<p>${products.length} black &amp; white and color copiers and multifunction printers from ${escapeHtml(Object.keys(groups).join(", "))}. Available new or refurbished, to buy or lease, with delivery and installation across NYC, Long Island, and Westchester. Call ${telLink} for pricing.</p>
${Object.entries(groups)
  .map(
    ([brand, items]) =>
      `<h2>${escapeHtml(brand)} copiers</h2>${list(
        items.map((p) => `<strong>${escapeHtml(productName(p))}</strong>: ${escapeHtml(productSummary(p))}`)
      )}`
  )
  .join("\n")}`;
  },

  "/contact": () => `
<h1>Get a Copier Quote</h1>
<p>Contact ${escapeHtml(business.name)} about copier sales, leasing, repair, or toner and supplies.</p>
${list([`Phone: ${telLink}`, `Email: ${mailLink}`, `Hours: ${escapeHtml(business.hoursText)}`, `Service area: ${escapeHtml(areas.join(", "))}`])}`,
};

// ---- Write each page ----

for (const [route, page] of Object.entries(seo.pages)) {
  const url = siteUrl + route;
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(page.title)}</title>`
  );
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", url);

  const schemas = [businessSchema];
  if (route === "/") schemas.push(faqSchema);
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${url}" data-rh="true"/>${schemas.map(jsonLd).join("")}</head>`
  );

  const body = pageBodies[route] ? pageBodies[route]() : "";
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${staticNav}<main>${body}</main>${staticFooter}</div>`
  );

  const file = page.file || "index.html";
  fs.writeFileSync(path.join(BUILD_DIR, file), html);
  console.log(`  ✓ ${route} -> build/${file}`);
}

// ---- llms.txt (https://llmstxt.org) ----

const llms = `# ${business.name}

> ${business.summary}

- Phone: ${business.phone}
- Email: ${business.email}
- Location: ${[business.address.streetAddress, business.address.addressLocality, business.address.addressRegion, business.address.postalCode].filter(Boolean).join(", ")}
- Hours: ${business.hoursText}
- Service area: ${areas.join(", ")}
- In business since: ${business.foundingYear}
- Brands we sell and service: ${business.brands.join(", ")}

## Services

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Frequently asked questions

${faq.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n")}

## Pages

- [Home](${siteUrl}/): Services, areas served, and FAQ
- [Copiers for sale or lease](${siteUrl}/products): Full catalog of new and used copiers
- [Contact and quotes](${siteUrl}/contact): Phone, email, and quote request form

## Copier catalog

${Object.entries(productsByBrand())
  .map(
    ([brand, items]) =>
      `### ${brand}\n\n${items.map((p) => `- ${productName(p)}: ${productSummary(p)}`).join("\n")}`
  )
  .join("\n\n")}
`;

fs.writeFileSync(path.join(BUILD_DIR, "llms.txt"), llms);
console.log("  ✓ build/llms.txt");
