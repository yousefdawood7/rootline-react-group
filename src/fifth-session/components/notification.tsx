import {
  useProductSubscriber,
  type Product,
} from "@/fifth-session/components/products-provider";
import { useState } from "react";

export default function Notification() {
  const [notificationList, setNotificationList] = useState<Product[]>([]);

  useProductSubscriber("PRODUCT:ADD", (newProduct) => {
    setNotificationList((prevProducts) => [...prevProducts, newProduct]);
  });

  return (
    <div>
      <nav>
        {notificationList.map((el) => (
          <p key={el.id}>
            Notification: {el.name}: {el.price}
          </p>
        ))}
      </nav>
    </div>
  );
}
