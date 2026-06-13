import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "Samson Olumoye — Product Designer & Manager with experience building for startups and helping organizations design products to deliver better user experiences";

export default function StickyTextReveal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-white"
    >
      {/* Sticky Container */}
      <div className="sticky top-10">
        <div className="mx-auto ">
          <p className="text-[clamp(1.7rem,5vw,4.2rem)] font-[450] p-6 py-15 lg:p-15 leading-13 lg:leading-20 md:leading-20">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = (index + 1) / words.length;

              return (
                <Word
                  key={index}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range }) {
  const color = useTransform(
    progress,
    range,
    ["rgb(200,200,200)", "rgb(17,17,17)"]
  );

  return (
    <motion.span
      style={{ color }}
      className="inline-block mr-3"
    >
      {children}
    </motion.span>
  );
}