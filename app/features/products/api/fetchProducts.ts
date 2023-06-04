import { Product } from "../types";
import { isProducts } from "../utils";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=5", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch products in res.ok");
    }
    const products = await res.json();
    if (!isProducts(products)) {
      throw new Error("failed to fetch products in isProducts");
    }

    return products;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      throw e;
    }

    throw new Error("failed to fetch products");
  }
}
