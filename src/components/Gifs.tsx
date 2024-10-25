// Lista de GIFs con className como prop
interface GifProps {
  className?: string;
}

// Precarga de GIFs
export function preloadGifs() {
  const gifUrls = [
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contact.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/writings.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Interview.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashes.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bio.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/derrama.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfo.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/calendar.gif`,
  ];

  gifUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function ContactoGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contact.gif`}
      alt="contacto"
      className={className}
    />
  );
}
function EspadaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/writings.gif`}
      alt="espada"
      className={className}
    />
  );
}
function EspiralGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Interview.gif`}
      alt="espiral"
      className={className}
    />
  );
}
function EstrellitaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashes.gif`}
      alt="estrellita"
      className={className}
    />
  );
}
function MariposaGif({ className }: GifProps) {
  return (
    <img
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau.gif`}
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
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/derrama.gif`}
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
      src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/calendar.gif`}
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
