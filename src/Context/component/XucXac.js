import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import Context from "../store/Context";

export default function XucXac(props) {
  let [state, dispatch] = useContext(Context);
  let cssxucxac = useSpring({
    to: {
      transform: state.disabledButtonChangeScore
        ? "rotate(1800deg)"
        : "rotate(360deg)",
    },
    from: { transform: "rotate(0deg)" },
    config: { duration: 400 },
  });

  return (
    <animated.div
      className="img_xuc_xac bg-[#ff9b02] rounded-sm"
      style={cssxucxac}
    >
      <img className="w-full" src={props.linkImg} alt="1" />
    </animated.div>
  );
}
