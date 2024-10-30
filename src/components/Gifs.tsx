// Lista de GIFs con className como prop
interface GifProps {
  className?: string;
  type?: "home" | "hover";
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
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/writingsHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/interviewHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashesHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeauHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bioHome-white.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/derramaHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfoHome.gif`,
    `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/calendarHome.gif`,
  ];

  gifUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function ContactoGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contact.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/contact.gif`;

  return <img src={gifSrc} alt="contact gif" className={className} />;
}
function WritingsGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/writingsHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/writings.gif`;

  return <img src={gifSrc} alt="writing gif" className={className} />;
}

function InterviewGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/interviewHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/Interview.gif`;

  return <img src={gifSrc} alt="interview gif" className={className} />;
}

function ClashesGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashesHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/clashes.gif`;

  return <img src={gifSrc} alt="clashes gif" className={className} />;
}

function LaPeauGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeauHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/laPeau.gif`;

  return <img src={gifSrc} alt="la peau gif" className={className} />;
}

function BioGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bioHome-white.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bio.gif`;

  return <img src={gifSrc} alt="bio gif" className={className} />;
}

function DerramaGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/derramaHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/derrama.gif`;

  return <img src={gifSrc} alt="derrama gif" className={className} />;
}

function PerfoGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfoHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfo.gif`;

  return <img src={gifSrc} alt="performance gif" className={className} />;
}

function CalendarGif({ className, type }: GifProps) {
  const gifSrc =
    type === "home"
      ? `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/calendarHome.gif`
      : `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/calendar.gif`;

  return <img src={gifSrc} alt="calendar gif" className={className} />;
}

export {
  ContactoGif,
  WritingsGif,
  InterviewGif,
  ClashesGif,
  LaPeauGif,
  BioGif,
  DerramaGif,
  PerfoGif,
  CalendarGif,
};
