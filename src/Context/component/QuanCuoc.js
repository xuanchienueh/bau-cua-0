import React, { useContext } from "react";
import Context from "../store/Context";

export default function QuanCuoc() {
  const [state, dispatch] = useContext(Context);
  const handleIncreaseScore = (id) => {
    dispatch({
      type: "increaseScore",
      payload: id,
    });
  };

  const handleDecreaseScore = (id) => {
    dispatch({
      type: "decreaseScore",
      payload: id,
    });
  };

  return (
    <>
      {state.DanhSacXucXac.map((item, index) => (
        <div className="col-4" key={index}>
          <div className="mt-3 ">
            <img className="canhgiua w-4/5" src={item.img} />
            <div className="canhgiua w-36  mt-4">
              <button
                className="btn btn-success"
                onClick={() => handleIncreaseScore(item.ma)}
                disabled={state.disabledButtonChangeScore}
              >
                <i className="fa fa-plus"></i>
              </button>

              <span className="w-16 inline-block text-center">
                {item.DiemCuoc}
              </span>

              <button
                className="btn btn-success "
                onClick={() => handleDecreaseScore(item.ma)}
                disabled={state.disabledButtonChangeScore}
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
