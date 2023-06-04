import { Product } from "./types";
export function isProduct(params: any): params is Product {
  return "id" in params;
}

export function isProducts(params: any): params is Product[] {
  return Array.isArray(params) && params.every(isProduct);
}
