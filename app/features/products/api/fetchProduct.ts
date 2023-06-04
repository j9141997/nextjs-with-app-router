import { Product } from "../types";
import { isProduct } from "../utils";

export async function fetchProduct(id: number): Promise<Product> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("failed to fetch product in res.ok");
    }
    const product = await res.json();
    if (!isProduct(product)) {
      throw new Error("failed to fetch product in isProducts");
    }

    return product;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      throw e;
    }

    throw new Error("failed to fetch product");
  }
}
