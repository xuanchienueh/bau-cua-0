import React, { useContext } from "react";
import Context from "../store/Context";

export default function DiemCuoc() {
  const [state, dispatch] = useContext(Context);
  const handlePlayAgain = () => {
    const xucXacRandom = [
      { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
      { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
      { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
    ];
    dispatch({
      type: "playGameAgain",
      payload: { xucXacRandom, disabledButtonChangeScore: false },
    });
  };

  return (
    <>
      <div className="diemcuoc canhgiua bg-red-600 w-72 text-center rounded-sm">
        <span className="text-[#EEEE00]">Tiền cược: </span>
        <span className="text-white text-2xl">{state.TongDiem}</span>
        <span className="text-[#EEEE00]">$</span>
      </div>

      <button
        className="btn btn-success canhgiua mt-2"
        onClick={() => handlePlayAgain()}
        disabled={!state.disabledButtonChangeScore}
      >
        Chơi lại
      </button>
    </>
  );
}
