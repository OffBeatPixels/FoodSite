import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled-component for the title
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: center; // Center the text
`;

// Styled-component for each character in the title
const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0.05em;
`;

// The AnimatedTitle component
export default function AnimatedTitle() {
  const text = "Animated Text"; // You can pass this as a prop if needed

  const ctrls = useAnimation(); // Framer Motion's animation controls

  // Attach the `ref` to the parent `Title` element
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is in view
    triggerOnce: false, // Animate only once
  });

  // Trigger the animation based on scroll position
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  // Animation variants for each character
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`, // Start slightly below
    },
    visible: {
      opacity: 1,
      y: `0em`, // Move to original position
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.1, // Stagger the animation for each character
      },
    },
  };

  // Animation variants for the text block
  const textAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`, // Start from below
    },
    visible: {
      opacity: 1,
      y: `0em`, // Move to original position
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.1, // Stagger the animation for each character
      },
    },
  };

  return (
    // Attach the ref to the Title element
    <Title aria-label={text} role="heading" ref={ref}>
      {text.split("").map((character, index) => (
        <Character
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls} // Animate based on the parent control
          variants={characterAnimation}
        >
          {character}
        </Character>
      ))}
    </Title>
  );
}
