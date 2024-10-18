// Lista de GIFs con className como prop
interface GifProps {
  className?: string;
}

// Precarga de GIFs
export function preloadGifs() {
  const gifUrls = [
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contacto.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/espada.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/espiral.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/estrellita.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/mariposa.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/tesoro.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/unicornio.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/yinyang.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/delfin.gif`,
  ];

  gifUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function ContactoGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contacto.gif`}
      alt="contacto"
      className={className}
    />
  );
}
function EspadaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/espada.gif`}
      alt="espada"
      className={className}
    />
  );
}
function EspiralGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/espiral.gif`}
      alt="espiral"
      className={className}
    />
  );
}
function EstrellitaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/estrellita.gif`}
      alt="estrellita"
      className={className}
    />
  );
}
function MariposaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/mariposa.gif`}
      alt="mariposa"
      className={className}
    />
  );
}
function BioGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bio.gif`}
      alt="bio gif"
      className={className}
    />
  );
}
function UnicornioGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/unicornio.gif`}
      alt="unicornio"
      className={className}
    />
  );
}
function YinyangGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfo.gif`}
      alt="yinyang"
      className={className}
    />
  );
}
function DelfinGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/delfin.gif`}
      alt="delfin"
      className={className}
    />
  );
}

export {
  ContactoGif,
  DelfinGif,
  EspadaGif,
  EspiralGif,
  EstrellitaGif,
  MariposaGif,
  BioGif,
  UnicornioGif,
  YinyangGif,
};
