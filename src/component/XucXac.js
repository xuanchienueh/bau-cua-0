import React from "react";
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";

export default function XucXac({ props }) {
  let pausedGame = useSelector((state) => state.reducer_baucua.pausedGame);

  let cssxucxac = useSpring({
    to: { transform: pausedGame ? "rotate(1800deg)" : "rotate(360deg)" },
    from: { transform: "rotate(0deg)" },
    config: { duration: 400 },
  });
  return (
    <animated.div
      className="img_xuc_xac bg-[#ff9b02] rounded-sm"
      style={cssxucxac}
    >
      <img className="w-full" src={props.img} alt="1" />
    </animated.div>
  );
}
