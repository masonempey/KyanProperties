function BackgroundLine({
  width = 100,
  height = 100,
  degree = "rotate(0deg)",
  top = 0,
  bottom = 0,
  right = 0,
  left = -200,
}) {
  return (
    <div
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
        transform: `${degree}`,
        backgroundColor: "#424242",
        position: "absolute",
        top: `${top}px`,
        bottom: `${bottom}px`,
        right: `${right}px`,
        left: `${left}px`,
        zIndex: -99,
        pointerEvents: "none",
      }}
    ></div>
  );
}

export default BackgroundLine;
