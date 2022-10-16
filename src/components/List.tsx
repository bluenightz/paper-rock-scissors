import { useState } from "react";
import { Button, ListItem } from "@/components";

export type TItem = {
  title: string;
};

const LABELS: string[] = ["🥕", "🍎", "🍌", "🍊"];

const createItem = (): TItem => {
  return { title: LABELS[Math.floor(Math.random() * LABELS.length)] };
};

const List = () => {
  const [list, setList] = useState<TItem[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const handleAddItemClick = () => {
    setList((currList) => [...currList, createItem()]);
  };

  const handleItemClick = (index: number) => () => {
    setActive(index);
  };

  return (
    <div className="pt-3 space-y-2">
      <div className="text-right ">
        <Button onClick={handleAddItemClick}>Add Item +</Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {list.map(({ title }, index) => {
          return (
            <ListItem
              key={`list-${index}`}
              title={title}
              active={active === index ? index : null}
              onClick={handleItemClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
