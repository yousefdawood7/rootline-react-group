import { createRoot } from "react-dom/client";

import "./index.css";
import {
  InputEmail,
  InputText,
} from "@/fourth-session/components/input-fields";
import { Provider } from "@/fourth-session/state-manager/hooks/useStore";

createRoot(document.querySelector("#root")!).render(
  <div>
    <Provider>
      <InputText />
      <InputEmail />
    </Provider>
  </div>,
);
