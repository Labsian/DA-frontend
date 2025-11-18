import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function SwipeCard({ profile, onSwipe, isTop }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  const handleDragEnd = (e, info) => {
    if (info.offset.x > 120) swipe("right");
    else if (info.offset.x < -120) swipe("left");
  };

  const swipe = (direction) => {
    const toX = direction === "right" ? 500 : -500;


    animate(x, toX, {
      duration: 0.35,
      ease: "easeOut",
      onComplete: () => onSwipe(profile), 
    });
  };

  return (
    <motion.div
      drag={isTop ? "x" : false}
      onDragEnd={handleDragEnd}
      style={{
        x,
        rotate,
        backgroundImage: `url(${profile.url})`,
      }}
      dragConstraints={{ left: 0, right: 0 }}
      className="absolute w-[300px] h-[450px] 
                 bg-cover bg-center rounded-2xl shadow-xl"
    >
      <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-md text-white">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
      </div>
    </motion.div>
  );
}
