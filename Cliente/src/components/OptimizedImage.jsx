/**
 * Imagen optimizada con lazy loading por defecto.
 * Usar priority={true} solo en imágenes above-the-fold (hero).
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  );
}
