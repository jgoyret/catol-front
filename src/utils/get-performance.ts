import { query } from "./strapi";

interface StrapiResponse {
  data: {
    perfotext: string; // Campo que contiene el texto plano con etiquetas
  };
}

// Función para obtener el texto directamente desde Strapi
export async function getPerfomanceInfo(): Promise<string> {
  try {
    const res: StrapiResponse = await query("performance");

    const biotext = res.data.perfotext;

    if (typeof biotext !== "string" || !biotext.trim()) {
      throw new Error("El campo `perfotext` no contiene un texto válido.");
    }

    return biotext;
  } catch (error) {
    console.error("Error al obtener datos de Strapi:", error);
    throw error;
  }
}
