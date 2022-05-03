import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CHANGE_SCORE } from "../reducer/action";

export default function QuanCuoc() {
  const danhsachcuoc = useSelector(
    (state) => state.reducer_baucua.danhsachcuoc
  );
  let mangDatCuoc = [];
  let tongdiem = useSelector((state) => state.reducer_baucua.tongdiem);
  let pauseGame = useSelector((state) => state.reducer_baucua.pausedGame);
  let dispatch = useDispatch();

  const [render, setRender] = useState(0);

  let handleScore = (cuoc, score) => {
    if (score) {
      if (tongdiem > 0) {
        cuoc.diemcuoc += 100;
        tongdiem -= 100;
      }
    } else {
      if (tongdiem >= 0 && cuoc.diemcuoc > 0) {
        cuoc.diemcuoc -= 100;
        tongdiem += 100;
      }
    }
    let payload = {
      ma: cuoc.ma,
      diemcuoc: cuoc.diemcuoc,
      tongdiem: tongdiem,
      mangDatCuoc: mangDatCuoc,
    };
    let action = {
      type: CHANGE_SCORE,
      payload: payload,
    };
    for (let i = 0; i < 6; i++) {
      if (danhsachcuoc[i].diemcuoc > 0) {
        mangDatCuoc.push(danhsachcuoc[i]);
      }
    }
    dispatch(action);

    setRender((render) => render + 1);
  };
  return (
    <>
      {danhsachcuoc.map((cuoc, index) => {
        return (
          <div className="col-4" key={index}>
            <div className="mt-3 ">
              <img className="canhgiua w-4/5" src={cuoc.img} alt={cuoc.ma} />
              <div className="canhgiua w-36  mt-4">
                <button
                  className="btn btn-success "
                  onClick={() => handleScore(cuoc, true)}
                  disabled={pauseGame}
                >
                  <i className="fa fa-plus"></i>
                </button>

                <span className="w-16 inline-block text-center">
                  {" "}
                  {cuoc.diemcuoc}{" "}
                </span>

                <button
                  className="btn btn-success "
                  onClick={() => handleScore(cuoc, false)}
                  disabled={pauseGame}
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
