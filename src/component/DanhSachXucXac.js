import React from "react";
import { useSelector, useDispatch } from "react-redux";

import XucXac from "./XucXac";
import { CHANGE_XUXAC, PLAY_GAME } from "../reducer/action";

export default function DanhSachXucXac() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.reducer_baucua);
  let tongdiem = state.tongdiem;

  let handlePlay = () => {
    let random1 = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);
    let random3 = Math.floor(Math.random() * 6);
    let mangXucXac = [
      state.danhsachcuoc[random1],
      state.danhsachcuoc[random2],
      state.danhsachcuoc[random3],
    ];

    let action = {
      type: CHANGE_XUXAC,
      payload: { mangXucXac: mangXucXac, pausedGame: true },
    };
    dispatch(action);
    handleAferPlayGame(mangXucXac);
  };
  let handleAferPlayGame = (mangXucXac) => {
    let tienTraLai = 0;
    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < state.mangDatCuoc.length; b++) {
        if (state.mangDatCuoc[b].ma === mangXucXac[a].ma) {
          tongdiem += state.mangDatCuoc[b].diemcuoc;
        }
      }
    }
    for (let a = 0; a < state.mangDatCuoc.length; a++) {
      for (let b = 0; b < 3; b++) {
        if (state.mangDatCuoc[a].ma === mangXucXac[b].ma) {
          tienTraLai += state.mangDatCuoc[a].diemcuoc;
          break;
        }
      }
    }
    tongdiem = tongdiem + tienTraLai;
    let action = {
      type: PLAY_GAME,
      payload: tongdiem,
    };
    dispatch(action);
  };
  return (
    <>
      <div className="mt-1">
        <div className="w-72 h-72 bg-white rounded-[50%] relative canhgiua">
          <div className="w-[80px] pt-8 ml-24">
            <XucXac props={state.mangXucXac[0]} />
          </div>
          <div className="flex absolute top-[160px] justify-around w-full">
            <div className="w-[80px]">
              <XucXac props={state.mangXucXac[1]} />
            </div>
            <div className="w-[80px]">
              <XucXac props={state.mangXucXac[2]} />
            </div>
          </div>
        </div>
        <button
          className="btn btn-success canhgiua mt-5"
          onClick={() => handlePlay()}
          disabled={state.pausedGame}
        >
          Play game
        </button>
      </div>
    </>
  );
}
