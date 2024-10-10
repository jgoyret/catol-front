// Lista de GIFs con className como prop
interface GifProps {
  className?: string;
}

export function ContactoGif({ className }: GifProps) {
  return <img src="/gifs/contacto.gif" alt="contacto" className={className} />;
}

export function EspadaGif({ className }: GifProps) {
  return <img src="/gifs/espada.gif" alt="espada" className={className} />;
}

export function EspiralGif({ className }: GifProps) {
  return <img src="/gifs/espiral.gif" alt="espiral" className={className} />;
}

export function EstrellitaGif({ className }: GifProps) {
  return (
    <img src="/gifs/estrellita.gif" alt="estrellita" className={className} />
  );
}

export function MariposaGif({ className }: GifProps) {
  return <img src="/gifs/mariposa.gif" alt="mariposa" className={className} />;
}

export function TesoroGif({ className }: GifProps) {
  return <img src="/gifs/tesoro.gif" alt="tesoro" className={className} />;
}

export function UnicornioGif({ className }: GifProps) {
  return (
    <img src="/gifs/unicornio.gif" alt="unicornio" className={className} />
  );
}

export function YinyangGif({ className }: GifProps) {
  return <img src="/gifs/yinyang.gif" alt="yinyang" className={className} />;
}

export function DelfinGif({ className }: GifProps) {
  return <img src="/gifs/delfin.gif" alt="delfin" className={className} />;
}
