import React from "react";
import Header from "../../component/Header";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";
import Provider from "../store/Provider";

export default function ComponentContext() {
  return (
    <Provider>
      <div id="bt_game_bau_cua" className="container-fluid h-screen">
        <Header />
        <DiemCuoc />
        <div className="row">
          <div className="col-8">
            <DanhSachCuoc />
          </div>
          <div className="col-4">
            <DanhSachXucXac />
          </div>
        </div>
      </div>
    </Provider>
  );
}
