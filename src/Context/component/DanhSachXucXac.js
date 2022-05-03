import React, { useContext } from "react";
import Context from "../store/Context";

import XucXac from "./XucXac";

export default function DanhSachXucXac() {
  const [state, dispatch] = useContext(Context);
  const handlePlaygame = () => {
    const xucXacRandom = [];
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * 6);
      xucXacRandom.push(state.DanhSacXucXac[random]);
    }

    let TongDiem = 0;
    for (let item of xucXacRandom) {
      for (let item2 of state.DanhSacXucXac) {
        item.ma === item2.ma && (TongDiem += item2.DiemCuoc);
      }
    }
    let tienTraLai = 0;
    for (let item of state.DanhSacXucXac) {
      for (let item2 of xucXacRandom) {
        if (item.ma === item2.ma) {
          tienTraLai += item.DiemCuoc;
          break;
        }
      }
    }

    dispatch({
      type: "playGame",
      payload: {
        xucXacRandom,
        tongDiem: TongDiem + tienTraLai,
        disabledButtonChangeScore: true,
      },
    });
  };

  return (
    <>
      <div className="mt-1">
        <div className="w-72 h-72 bg-white rounded-[50%] relative canhgiua">
          <div className="w-[80px] pt-8 ml-24">
            <XucXac linkImg={state.XucXacRandom[0].img} />
          </div>
          <div className="flex absolute top-[160px] justify-around w-full">
            <div className="w-[80px]">
              <XucXac linkImg={state.XucXacRandom[1].img} />
            </div>
            <div className="w-[80px]">
              <XucXac linkImg={state.XucXacRandom[2].img} />
            </div>
          </div>
        </div>
        <button
          className="btn btn-success canhgiua mt-5"
          onClick={handlePlaygame}
          disabled={state.disabledButtonChangeScore}
        >
          Play game
        </button>
      </div>
    </>
  );
}
