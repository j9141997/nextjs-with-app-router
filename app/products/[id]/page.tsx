import { fetchProduct } from "@/app/features/products/api/fetchProduct";

interface Props {
  params: {
    id: number;
  };
}

export default async function Product({ params: { id } }: Props) {
  const product = await fetchProduct(id);
  return <h1>{product.title}</h1>;
}
