import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import {
  fetchProductById,
  type Product,
} from "@/second-session/utils/fetchProductById";
import { useEffect, useState } from "react";

type EffectFetchProps = {
  id: number;
};

export default function EffectFetch({ id }: EffectFetchProps) {
  const [data, setData] = useState<Partial<Product>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function handleData() {
      setIsLoading(true);
      const product = await fetchProductById(id);

      setData(product);
      setIsLoading(false);
    }

    handleData();
  }, [id]);

  return (
    <Card>
      <CardHeader>
        <CardTitle> Product #{id}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <p>Title: {data.title}</p>
            <p>Description: {data.description}</p>
            <p>Price: {data.price}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
