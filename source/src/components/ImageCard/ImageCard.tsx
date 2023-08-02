import { motion } from 'framer-motion';
import Logo from '../../../public/hoobe.svg';

interface IProps {
  link: string;
  title: string;
}

export default function ImageCard({ link, title }: IProps) {
  return (
    <motion.div
      className="max-w-lg w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href={link}
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden shadow-lg relative hover:scale-105 duration-300 ease-in-out"
      >
        <div className="h-72 bg-cover bg-bottom" style={{ backgroundImage: `url(/TCF1.jpg)` }} />
        <div className="absolute bottom-px flex justify-between w-full px-5 pb-4">
          <span className="text-sm font-bold text-left text-white">{title}</span>
          <span className="text-white">
            <Logo width={24} height={24} />
          </span>
        </div>
      </a>
    </motion.div>
  );
}
