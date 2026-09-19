import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchProductById } from "@/second-session/utils/fetchProductById";
import { use } from "react";

type UseExampleProps = {
  id: number;
};

// eslint-disable-next-line react-refresh/only-export-components
export const cachePromises = function <T extends Promise<unknown>>() {
  const promiseReferences = new Map<number, T>();

  return <TPromise extends T>(
    id: number,
    callback: (id: number) => TPromise,
  ) => {
    const promise = (promiseReferences.get(id) ?? callback(id)) as TPromise;
    promiseReferences.set(id, promise);
    return promise;
  };
};

const productCache = cachePromises();

export default function UseExample({ id }: UseExampleProps) {
  const data = use(productCache(id, fetchProductById));
  return (
    <Card>
      <CardHeader>
        <CardTitle> Product #{id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
        </div>
      </CardContent>
    </Card>
  );
}
