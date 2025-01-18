import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none", // Prevents interfering with clicks
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};


const [bgColor, setBgColor] = useState("red");

useEffect(() => {
  const checkBackground = (e) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const bg = computedStyle.backgroundColor;
      setBgColor(bg === "rgb(255, 255, 255)" ? "black" : "white"); // Example logic
    }
  };

  window.addEventListener("mousemove", checkBackground);
  return () => window.removeEventListener("mousemove", checkBackground);
}, []);

export default CustomCursor;
