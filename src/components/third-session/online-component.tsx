import {
  getSnapshot,
  subscribe,
} from "@/components/third-session/utils/get-online-status";
import { useSyncExternalStore } from "react";

export default function OnlineComponent() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return <h1>{isOnline ? "ONLINE" : "FALSE"}</h1>;
}
