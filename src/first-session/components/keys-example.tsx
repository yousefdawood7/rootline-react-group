import { useEffect, useState } from "react";
import { motion } from "motion/react";

const stableKeysElements = [
  { id: "7a8", name: "Stable Key 1" },
  { id: "7a9", name: "Stable Key 2" },
  { id: "7b0", name: "Stable Key 3" },
  { id: "7b1", name: "Stable Key 4" },
  { id: "7b2", name: "Stable Key 5" },
];

const elementWithoutKey = [
  { name: "Element Without Key 1" }, // 0
  { name: "Element Without Key 2" }, // 1
  { name: "Element Without Key 3" }, // 2
  { name: "Element Without Key 4" }, // 3
  { name: "Element Without Key 5" }, // 4
];

function handleShuffle<T>(elements: T[]) {
  const randomNumber = () => Math.floor(Math.random() * elements.length);
  const shuffledArray: T[] = [];

  const visitedIndices: number[] = [];

  while (visitedIndices.length !== elements.length) {
    const index = randomNumber();
    if (!visitedIndices.includes(index)) {
      shuffledArray.push(elements[index]);
      visitedIndices.push(index);
    }
  }

  return shuffledArray;
}

export default function KeysExamples() {
  const [stableKeysShuffle, setStableKeysShuffle] =
    useState<typeof stableKeysElements>(stableKeysElements);

  const [unstableKeysSuffle, setUnstableKeysSuffle] =
    useState<typeof elementWithoutKey>(elementWithoutKey);

  const [isAnimatable, setIsAnimatable] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setStableKeysShuffle(handleShuffle(stableKeysShuffle));
      setUnstableKeysSuffle(handleShuffle(unstableKeysSuffle));
    }, 1000);
    return () => clearInterval(id);
  }, [stableKeysShuffle, unstableKeysSuffle]);

  return (
    <section className="text-sm space-y-5 divide-y-2">
      <aside className="flex items-center gap-2 border-b-0">
        <label htmlFor="checkbox" className="border-b-0">
          Toggle Animation
        </label>
        <input
          type="checkbox"
          id="checkbox"
          checked={isAnimatable}
          onChange={() => setIsAnimatable(!isAnimatable)}
        />
      </aside>
      <div className="space-y-2 pb-10">
        <h2>Stable Keys Examples</h2>

        <nav className="flex gap-2">
          {stableKeysShuffle.map((element, index) => (
            <motion.input
              layout
              transition={
                isAnimatable
                  ? {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: isAnimatable ? index * 0.04 : 0,
                    }
                  : { duration: 0 }
              }
              id={element.id}
              key={element.id}
              className="border px-2 focus:border focus:ring-2 focus:ring-blue-500 outline-none"
              defaultValue={element.name}
            />
          ))}
        </nav>
      </div>

      <div className="space-y-2">
        <h2>Elements Without Stable Keys (INDEX BASED IDs)</h2>
        <div className="flex gap-2">
          {unstableKeysSuffle.map((element, index) => (
            <motion.input
              layout
              transition={
                isAnimatable
                  ? {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: isAnimatable ? index * 0.04 : 0,
                    }
                  : { duration: 0 }
              }
              className="border px-2 focus:border focus:ring-2 focus:ring-blue-500 outline-none"
              id={"" + crypto.randomUUID()}
              key={crypto.randomUUID()}
              defaultValue={element.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
