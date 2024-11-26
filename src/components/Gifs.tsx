import React from "react";

// Lista de GIFs con className como prop
interface GifProps {
  className?: string;
  type?: "home" | "hover";
}

// Cache de URLs
const gifUrls = {
  contact: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/contact.gif?cache-bust=1`,
  writings: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/writings.gif?cache-bust=1`,
  interview: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/Interview.gif?cache-bust=1`,
  clashes: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/clashes.gif?cache-bust=1`,
  laPeau: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/laPeau.gif?cache-bust=1`,
  bio: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/bio.gif?cache-bust=1`,
  derrama: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/derrama.gif?cache-bust=1`,
  perfo: `${import.meta.env.VITE_SUPABASE_STORAGE_URL}/perfo.gif?cache-bust=1`,
  calendar: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/calendar.gif?cache-bust=1`,
  writingsHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/writingsHome.gif?cache-bust=1`,
  interviewHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/interviewHome.gif?cache-bust=1`,
  clashesHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/clashesHome.gif?cache-bust=1`,
  laPeauHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/laPeauHome.gif?cache-bust=1`,
  bioHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/bioHome-white.gif?cache-bust=1`,
  derramaHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/derramaHome.gif?cache-bust=1`,
  perfoHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/perfoHome.gif?cache-bust=1`,
  calendarHome: `${
    import.meta.env.VITE_SUPABASE_STORAGE_URL
  }/calendarHome.gif?cache-bust=1`,
};

// Precarga de GIFs
function preloadGifs() {
  Object.values(gifUrls).forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Componente general para GIFs
const GifComponent = React.memo(
  ({
    className,
    type,
    gifKey,
  }: GifProps & { gifKey: keyof typeof gifUrls }) => {
    const gifSrc =
      type === "home"
        ? gifUrls[`${gifKey}Home` as keyof typeof gifUrls]
        : gifUrls[gifKey];
    return <img src={gifSrc} alt={`${gifKey} gif`} className={className} />;
  }
);

// Componentes específicos
const ContactoGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="contact" />
);
const WritingsGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="writings" />
);
const InterviewGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="interview" />
);
const ClashesGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="clashes" />
);
const LaPeauGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="laPeau" />
);
const BioGif = (props: GifProps) => <GifComponent {...props} gifKey="bio" />;
const DerramaGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="derrama" />
);
const PerfoGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="perfo" />
);
const CalendarGif = (props: GifProps) => (
  <GifComponent {...props} gifKey="calendar" />
);

export {
  preloadGifs,
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
