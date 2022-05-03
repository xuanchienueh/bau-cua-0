import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLAY_GAME_AGAIN } from "../reducer/action";

export default function DiemCuoc() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.reducer_baucua);

  let handlePlayAgain = () => {
    let action = {
      type: PLAY_GAME_AGAIN,
      payload: {
        danhsachcuoc: [
          { ma: "bau", img: "./img/bau.png", diemcuoc: 0 },
          { ma: "cua", img: "./img/cua.png", diemcuoc: 0 },
          { ma: "tom", img: "./img/tom.png", diemcuoc: 0 },
          { ma: "ca", img: "./img/ca.png", diemcuoc: 0 },
          { ma: "huou", img: "./img/huou.png", diemcuoc: 0 },
          { ma: "ga", img: "./img/ga.png", diemcuoc: 0 },
        ],
        pausedGame: false,
        mangXucXac: [
          { ma: "bau", img: "./img/dau-hoi-removebg-preview.png", diemcuoc: 0 },
          { ma: "bau", img: "./img/dau-hoi-removebg-preview.png", diemcuoc: 0 },
          { ma: "bau", img: "./img/dau-hoi-removebg-preview.png", diemcuoc: 0 },
        ],
      },
    };
    dispatch(action);
  };
  return (
    <>
      <div className="diemcuoc canhgiua bg-red-600 w-72 text-center rounded-sm">
        <span className="text-[#EEEE00]">Tiền cược: </span>
        <span className="text-white text-2xl">{state.tongdiem}</span>
        <span className="text-[#EEEE00]">$</span>
      </div>
      <button
        className="btn btn-success canhgiua mt-2"
        onClick={handlePlayAgain}
        disabled={!state.pausedGame}
      >
        Chơi lại
      </button>
    </>
  );
}
