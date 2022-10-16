import { useCallback, useEffect, useState } from "react";
import { TICON } from "@/types";
import Card, { CardProps } from "./Card";
import { ICONS } from "@/const";
import { getWeapon } from "@/utils/core";

type CardCPUProps = Pick<CardProps, "isActive"> & {
  symbol: TICON | null;
};

const KEYS = Object.keys(ICONS);

const getRandom = () => Math.floor(Math.random() * KEYS.length);

const CardCPU = ({ symbol }: CardCPUProps) => {
  const [random, setRandom] = useState<number>(0);

  const randomInterval = useCallback(() => {
    if (!symbol) {
      setRandom(getRandom());
    }
  }, [KEYS, symbol]);

  useEffect(() => {
    const i = setInterval(randomInterval, 100);

    return () => {
      clearInterval(i);
    };
  }, [random, randomInterval]);

  return <Card symbol={symbol || getWeapon(KEYS[random])} />;
};

export default CardCPU;
