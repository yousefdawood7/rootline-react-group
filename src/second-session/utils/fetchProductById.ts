export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export const fetchProductById = async function (id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return data;
};
