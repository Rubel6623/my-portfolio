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
      borderColor={isDark ? "#7854b6" : "#b8c1cd"}
      hoverFillColor={isDark ? "#222222" : "#d1d9e3"}
      shape="hexagon"
      hoverTrailAmount={5}
    />
  );
}
