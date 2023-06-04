import { fetchProducts } from "../features/products/api/fetchProducts";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <a href={`/products/${product.id}`}>{product.title}</a>
        </li>
      ))}
    </ul>
  );
}
