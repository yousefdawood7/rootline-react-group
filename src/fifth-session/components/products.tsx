import { Button } from "@/components/ui/button";
import { useProductEmitter } from "@/fifth-session/components/products-provider";
import { faker } from "@faker-js/faker";

export default function Products() {
  const emitProduct = useProductEmitter();

  const handleAddProduct = function () {
    emitProduct("PRODUCT:ADD", {
      id: faker.commerce.isbn(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });
  };

  return (
    <div>
      <Button onClick={handleAddProduct}>Add Product</Button>
    </div>
  );
}
