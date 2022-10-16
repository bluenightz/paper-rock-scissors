import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TItem } from "./List";

type ListItemProps = TItem &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    active: number | null;
  };

const ListItem = ({ title, active, ...props }: ListItemProps) => {
  const animateListItem =
    active === null ? { y: 0, opacity: 1 } : { y: -20, opacity: 1 };

  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={animateListItem}>
      <div
        className="transition-all px-5 py-2 rounded-md bg-gray-300 cursor-pointer hover:bg-gray-100 hover:shadow-md shadow-none text-9xl flex justify-center items-center border border-gray-500"
        {...props}
      >
        {title}
      </div>
    </motion.div>
  );
};

export default ListItem;
