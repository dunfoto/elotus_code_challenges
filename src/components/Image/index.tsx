import React from "react";
import "./index.scss";

interface IImage {
  path: string;
  alt: string;
  width?: number;
  height?: number;
}
const Image = ({ path, alt, width = 100, height = 100 }: IImage) => {
  return (
    <img
      className="image"
      loading="lazy"
      src={`https://image.tmdb.org/t/p/original/${path}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default React.memo(Image);
