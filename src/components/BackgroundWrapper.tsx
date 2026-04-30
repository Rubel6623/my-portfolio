"use client";

import { useTheme } from "./ThemeProvider";
import ShapeGrid from "./ShapeGrid";

export default function BackgroundWrapper() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ShapeGrid
      speed={0.35}
      squareSize={25}
      direction="diagonal"
      borderColor={isDark ? "#7854b6" : "#a886e0"}
      hoverFillColor={isDark ? "#222222" : "#f0f0f0"}
      shape="hexagon"
      hoverTrailAmount={5}
    />
  );
}
