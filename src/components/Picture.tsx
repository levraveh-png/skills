import type { ImgHTMLAttributes } from "react";

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  alt: string;
}

/** Renders /images/{name}.webp with a .jpg fallback. */
export function Picture({ name, alt, className, loading = "lazy", ...props }: PictureProps) {
  return (
    <picture>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img
        src={`/images/${name}.jpg`}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
        {...props}
      />
    </picture>
  );
}
