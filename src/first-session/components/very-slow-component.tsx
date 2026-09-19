/* eslint-disable */

import FlashComponent from "@/second-session/components/flash-component";

export default function VerySlowComponent() {
  const now = performance.now();

  console.log("SLOW COMPONENT IS WORKING");

  while (performance.now() - now < 1500) {}

  console.log("SLOW COMPONENT FINISHED WORKING");

  return <FlashComponent>SLOW COMPONENT RE-RENDERED</FlashComponent>;
}
