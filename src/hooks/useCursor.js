import { useState, useEffect } from 'react';

export const useCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let followerX = 0;
    let followerY = 0;
    let animId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const lerp = (start, end, factor) => start + (end - start) * factor;

      const animateFollower = () => {
        followerX = lerp(followerX, e.clientX, 0.12);
        followerY = lerp(followerY, e.clientY, 0.12);
        setFollower({ x: followerX, y: followerY });
      };

      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, [data-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('button, a, [data-hover]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return { position, follower, isHovering };
};
