import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const CustomCursor = () => {
  const { position, follower, isHovering } = useCursor();

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#C9A84C',
        }}
      />
      {/* Follower ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: follower.x - 20,
          y: follower.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.6)',
        }}
      />
    </>
  );
};

export default CustomCursor;
