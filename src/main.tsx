import { createRoot } from "react-dom/client";

import "./index.css";
import { ProductProvider } from "@/fifth-session/components/products-provider";
import Products from "@/fifth-session/components/products";
import Notification from "@/fifth-session/components/notification";
import Page from "@/fifth-session/features/auth/components/page";
import { AuthProvider } from "@/fifth-session/features/auth/providers/auth-provider";

createRoot(document.querySelector("#root")!).render(
  <>
    <ProductProvider>
      <Products />
      <Notification />
    </ProductProvider>
    <AuthProvider>
      <Page />
    </AuthProvider>
  </>,
);
