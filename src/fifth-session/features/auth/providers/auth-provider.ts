import { createEmitterProvider } from "@/fifth-session/message-broker/providers/create-emitter-provider";

type AuthEvents = {
  login: { name: string; password: string };
  logout: undefined;
};

export const {
  Provider: AuthProvider,
  useEmit: useAuthEmit,
  useSubscribe: useAuthSubscribe,
} = createEmitterProvider<AuthEvents>("auth-channel");
