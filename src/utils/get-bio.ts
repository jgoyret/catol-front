import { query } from "./strapi";

// interface StrapiChild {
//   text: string;
//   [key: string]: any;
// }

// interface StrapiBlock {
//   type: string;
//   children: StrapiChild[];
//   [key: string]: any;
// }

// interface StrapiResponse {
//   data: {
//     bio: StrapiBlock[];
//   };
// }

interface StrapiResponse {
  data: {
    biotext: string; // Campo que contiene el texto plano con etiquetas
  };
}

// Función para extraer y combinar los textos de los bloques
// function parseStrapiContent(blocks: StrapiBlock[]): string {
//   return blocks
//     .map((block) => {
//       if (block.type === "paragraph") {
//         return block.children.map((child) => child.text).join("");
//       }
//       return "";
//     })
//     .join("\n");
// }

// Función para obtener los datos de la API de Strapi ya procesados
// export async function getBioInfo(): Promise<string> {
//   try {
//     const res: StrapiResponse = await query("bio");
//     const blocks = res.data.bio;
//     if (!Array.isArray(blocks)) {
//       throw new Error("La propiedad `bio` no contiene un array válido.");
//     }

//     return parseStrapiContent(blocks);
//   } catch (error) {
//     console.error("Error al obtener datos de Strapi:", error);
//     throw error;
//   }
// }

// Función para obtener el texto directamente desde Strapi
export async function getBioInfo(): Promise<string> {
  try {
    const res: StrapiResponse = await query("bio");

    const biotext = res.data.biotext;

    if (typeof biotext !== "string" || !biotext.trim()) {
      throw new Error("El campo `biotext` no contiene un texto válido.");
    }

    return biotext;
  } catch (error) {
    console.error("Error al obtener datos de Strapi:", error);
    throw error;
  }
}
