import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CounterProps = {
  productTitle?: string;
};

const Counter = ({ productTitle }: CounterProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((currentValue) => currentValue + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  useEffect(() => {
    setTitle(productTitle || "");
  }, [productTitle]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gray-400 text-5xl rounded-2xl px-5 py-2 text-center">
        {counter}
      </div>
      {title && <div>{title}</div>}
    </motion.div>
  );
};

export default Counter;
