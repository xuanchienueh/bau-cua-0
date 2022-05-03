import React from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import DanhSachXucXac from "./DanhSachXucXac";
import DiemCuoc from "./DiemCuoc";
import Header from "./Header";

export default function ComponentRedux() {
  return (
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
  );
}
