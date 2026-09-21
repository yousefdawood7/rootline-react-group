import { Button } from "@/components/ui/button";
import { useProductEmitter } from "@/fifth-session/components/products-provider";
import { faker } from "@faker-js/faker";

export default function Products() {
  const [emitProduct, handleChannel] = useProductEmitter();

  const handleAddProduct = function () {
    const newProduct = {
      id: faker.commerce.isbn(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    };

    emitProduct("PRODUCT:ADD", newProduct);
    handleChannel("PRODUCT:ADD", newProduct);
  };

  return (
    <div>
      <Button onClick={handleAddProduct}>Add Product</Button>
    </div>
  );
}
