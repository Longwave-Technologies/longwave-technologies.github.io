import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // Create this CSS file for styling
import { default as introSVG } from "../../assets/images/logoFinalAnimation.svg";
import "../../styles/styles.css";

const LoadingScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  // const imgRef = useRef(null);

  // Simulate an animation delay
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, [animationComplete]);

  return (
    <div
      className={`loadingScreen${
        animationComplete ? " animationComplete" : ""
      }`}
    >
      <img
        src={introSVG}
        alt="introSVG"
        className="introSVG"
        width="auto"
        height="auto"
      />
    </div>
  );
};

export default LoadingScreen;
