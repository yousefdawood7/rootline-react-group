import { createRoot } from "react-dom/client";

import "./index.css";

import InputText, {
  InputEmail,
} from "@/fourth-session/components/input-fields";
import { InputProvider } from "@/fourth-session/input-provider";

createRoot(document.querySelector("#root")!).render(
  <div>
    <h1>Provider</h1>
    <InputText />
    <InputEmail />
  </div>,
);
