import { useState, type ImgHTMLAttributes } from "react";
import { IMG } from "@/data/images";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

/** Image with graceful fallback for broken/missing sources. */
export function SafeImage({ fallback = IMG.hero, alt = "", src, onError, ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      {...rest}
      src={current}
      alt={alt}
      loading={rest.loading ?? "lazy"}
      onError={(e) => {
        if (current !== fallback) setCurrent(fallback);
        onError?.(e);
      }}
    />
  );
}
