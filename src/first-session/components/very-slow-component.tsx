/* eslint-disable */

export default function VerySlowComponent() {
  const now = performance.now();

  console.log("SLOW COMPONENT IS WORKING");

  while (performance.now() - now < 3000) {}

  console.log("SLOW COMPONENT FINISHED WORKING");

  return <p>SLOW COMPONENT RE-RENDERED</p>;
}
