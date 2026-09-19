import { createContextProvider } from "@/fourth-session/state-manager/provider/StoreProvider";

const { Provider, useProvider } = createContextProvider({
  name: "",
  email: "",
});

export { Provider, useProvider };
