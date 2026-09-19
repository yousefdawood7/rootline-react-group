import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import UseExample from "@/second-session/components/fetching-example/use-example";
import { Suspense, useState } from "react";

export default function FetchExample() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="p-5 space-y-5 ">
      <Input
        onChange={(e) => setCounter(+e.target.value || 1)}
        value={counter}
      />
      <Suspense fallback={<Spinner />}>
        <UseExample id={counter} />
      </Suspense>
    </div>
  );
}
