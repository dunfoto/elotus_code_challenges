import React from "react";
import "./index.scss";

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  variant?: "text" | "rect" | "circle";
  style?: React.CSSProperties;
};

const Skeleton = ({
  width = "100%",
  height = "1em",
  borderRadius = "4px",
  variant = "text",
  style = {},
}: SkeletonProps) => {
  const variantStyles: React.CSSProperties =
    variant === "circle"
      ? { borderRadius: "50%", width: height, height }
      : { borderRadius, width, height };

  return (
    <div
      className="skeleton"
      style={{ ...variantStyles, ...style }}
    />
  );
};

export default Skeleton;