const initialState = {
  DanhSacXucXac: [
    { ma: "bau", img: "./img/bau.png", DiemCuoc: 0 },
    { ma: "cua", img: "./img/cua.png", DiemCuoc: 0 },
    { ma: "tom", img: "./img/tom.png", DiemCuoc: 0 },
    { ma: "ca", img: "./img/ca.png", DiemCuoc: 0 },
    { ma: "huou", img: "./img/huou.png", DiemCuoc: 0 },
    { ma: "ga", img: "./img/ga.png", DiemCuoc: 0 },
  ],
  XucXacRandom: [
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
  ],
  TongDiem: 1200,
  disabledButtonChangeScore: false,
};
const reducer = (state = initialState, action) => {
  let initStateClone = { ...state };
  switch (action.type) {
    case "increaseScore": {
      for (let item of initStateClone.DanhSacXucXac) {
        if (item.ma === action.payload && initStateClone.TongDiem > 0) {
          item.DiemCuoc += 100;
          initStateClone.TongDiem -= 100;
        }
      }
      return { ...initStateClone };
    }
    case "decreaseScore": {
      for (let item of initStateClone.DanhSacXucXac) {
        if (item.ma === action.payload && item.DiemCuoc > 0) {
          item.DiemCuoc -= 100;
          initStateClone.TongDiem += 100;
        }
      }
      return { ...initStateClone };
    }
    case "playGame": {
      initStateClone.XucXacRandom = action.payload.xucXacRandom;
      initStateClone.TongDiem += action.payload.tongDiem;
      initStateClone.disabledButtonChangeScore =
        action.payload.disabledButtonChangeScore;
      return { ...initStateClone };
    }
    case "playGameAgain": {
      initStateClone.XucXacRandom = action.payload.xucXacRandom;
      initStateClone.disabledButtonChangeScore =
        action.payload.disabledButtonChangeScore;
      for (let item of initStateClone.DanhSacXucXac) {
        item.DiemCuoc = 0;
      }
      return { ...initStateClone };
    }
    default:
      return state;
  }
};
export default reducer;
export { initialState };
