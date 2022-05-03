import {
  CHANGE_SCORE,
  CHANGE_XUXAC,
  PLAY_GAME,
  PLAY_GAME_AGAIN,
} from "./action";
const initialState = {
  danhsachcuoc: [
    { ma: "bau", img: "./img/bau.png", diemcuoc: 0 },
    { ma: "cua", img: "./img/cua.png", diemcuoc: 0 },
    { ma: "tom", img: "./img/tom.png", diemcuoc: 0 },
    { ma: "ca", img: "./img/ca.png", diemcuoc: 0 },
    { ma: "huou", img: "./img/huou.png", diemcuoc: 0 },
    { ma: "ga", img: "./img/ga.png", diemcuoc: 0 },
  ],
  tongdiem: 1000,
  mangXucXac: [
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
    { ma: "", img: "./img/dau-hoi-removebg-preview.png", DiemCuoc: 0 },
  ],
  mangDatCuoc: [],
  pausedGame: false,
};

let reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case CHANGE_SCORE:
      let index = state.danhsachcuoc.findIndex(
        (item) => item.ma === action.payload.ma
      );
      newState.danhsachcuoc[index].diemcuoc = action.payload.diemcuoc;
      newState.tongdiem = action.payload.tongdiem;
      newState.mangDatCuoc = action.payload.mangDatCuoc;
      return newState;
    case CHANGE_XUXAC: {
      newState.mangXucXac = action.payload.mangXucXac;
      newState.pausedGame = action.payload.pausedGame;
      return newState;
    }

    case PLAY_GAME: {
      newState.tongdiem = action.payload;
      return newState;
    }
    case PLAY_GAME_AGAIN: {
      newState.danhsachcuoc = action.payload.danhsachcuoc;
      newState.pausedGame = action.payload.pausedGame;
      newState.mangXucXac = action.payload.mangXucXac;
      return newState;
    }
    default:
      return state;
  }
};
export default reducer;
