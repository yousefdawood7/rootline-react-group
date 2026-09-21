import { createEmitterProvider } from "@/fifth-session/message-broker/providers/create-emitter-provider";

export type Product = { id: string; name: string; price: string };

type ProductsEvents = {
  "PRODUCT:ADD": Product;
  "PRODUCT:UPDATE": Partial<Omit<Product, "id">> & Pick<Product, "id">;
  "PRODUCT:DELETE": Pick<Product, "id">;
};

export const {
  Provider: ProductProvider,
  useEmit: useProductEmitter,
  useSubscribe: useProductSubscriber,
} = createEmitterProvider<ProductsEvents>("test_test");
