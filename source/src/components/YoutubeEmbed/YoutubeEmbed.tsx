import { motion } from 'framer-motion';

interface IProps {
  link: string;
}

export default function YoutubeEmbed({ link }: IProps) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        width="100%"
        height="100%"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '0.75rem' }}
      />
    </motion.div>
  );
}
