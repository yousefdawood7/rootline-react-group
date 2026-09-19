import { createRoot } from "react-dom/client";

import "./index.css";
import {
  InputEmail,
  InputText,
} from "@/fourth-session/components/input-fields";

createRoot(document.querySelector("#root")!).render(
  <div>
    <InputText />
    <InputEmail />
  </div>,
);
