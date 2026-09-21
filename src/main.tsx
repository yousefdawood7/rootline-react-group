import { createRoot } from "react-dom/client";

import "./index.css";
import { ProductProvider } from "@/fifth-session/components/products-provider";
import Products from "@/fifth-session/components/products";
import Notification from "@/fifth-session/components/notification";

createRoot(document.querySelector("#root")!).render(
  <ProductProvider>
    <Products />
    <Notification />
  </ProductProvider>,
);
