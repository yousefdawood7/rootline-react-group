import { createStoreProvider } from "@/fourth-session/state-manager/providers/create-store-provider";

export const { Provider, useStore } = createStoreProvider({
  name: "",
  email: "",
});
