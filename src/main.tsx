import { createRoot } from "react-dom/client";

import "./index.css";
import {
  InputEmail,
  InputText,
} from "@/fourth-session/components/input-fields";
import { Provider } from "@/fourth-session/components/store-provider";
import { SecondThemeProvider } from "@/second-session/providers/second-theme-provder";
import ChangeDarkMode from "@/second-session/components/dark-mode/change-dark-mode";
import IsDarkMode from "@/second-session/components/dark-mode/is-dark-mode";
import { Counter } from "@/second-session/components/counter-component";

createRoot(document.querySelector("#root")!).render(
  <div>
    <Provider>
      <InputText />
      <InputEmail />
    </Provider>

    <SecondThemeProvider>
      <ChangeDarkMode />
      <IsDarkMode />
      <Counter />
    </SecondThemeProvider>
  </div>,
);
