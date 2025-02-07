import { query } from "./strapi";

export function getBioInfo() {
  return query("bio").then((res) => {
    return res;
  });
}
