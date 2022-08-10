import React, {useEffect, useRef, useState} from "react";
import "./style.scss";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

// GSAP
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'

import useOnScreen from "../../hooks/useOnScreen";

const Footer = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        { duration: 1, y: 0, stagger: 0.1, ease: "power2" }
      );
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>

      <SectionHeader title="Made in" />

      <h1 className={cn("location", { "is-reveal": reveal })} id="location-text" ref={ref}>
        Rio de Janeiro
      </h1>

    </section>
  );
}

export default Footer
