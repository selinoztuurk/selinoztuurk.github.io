import React from "react";
import "./Colophon.css";

const Colophon = ({ onClickClose }) => {
  return (
    <div class="colophonBoxContainer" id="container">
      <div className="tab">
        <div
          className="closeButtonColophon"
          onClick={() => onClickClose()}
        ></div>
      </div>
      <div className="textBox">
        <div className="boldTypeColophon">course instructor</div>
        <div className="regularType">çağla turgul</div>
        <br />
        <div className="boldTypeColophon">project coordinator</div>
        <div className="regularType">ekin yay</div>
        <br />
        <div className="boldTypeColophon">exhibition design</div>
        <div className="regularType">
          berre su yanlıç
          <br />
          cemre sönmez
          <br />
          ipek köprülülü
          <br />
          melisa erşan
          <br />
          öykü göç
        </div>
        <br />
        <div className="boldTypeColophon">web design/development</div>
        <div className="regularType">selin nur öztürk</div>
        <br />
        <div className="boldTypeColophon">e-flyer design</div>
        <div className="regularType">ipek köprülülü</div>
        <br />
        <div className="boldTypeColophon">retouch team</div>
        <div className="regularType">
          aleyna çatak
          <br />
          anıl yanıkçıoğlu
          <br />
          asya günen
          <br />
          beste naz karabulut
          <br />
          cemre sönmez
          <br />
          duru erdem
          <br />
          ekin yay
          <br />
        </div>
        <br />
        <div className="boldTypeColophon">works by</div>
        <div className="regularType">
          aleyna çatak
          <br />
          anıl yanıkçıoğlu
          <br />
          asya günen
          <br />
          berre su yanlıç
          <br />
          beste naz karabulut
          <br />
          betül taşkın
          <br />
          bilge imamoğlu
          <br />
          cemre sönmez
          <br />
          dila inci hondor
          <br />
          duru erdem
          <br />
          duygu güneş
          <br />
          ekin yay
          <br />
          ipek köprülülü
          <br />
          ışık ertürk
          <br />
          melisa erşan
          <br />
          mısra irem öz
          <br />
          öykü göç
          <br />
          selin nur öztürk
          <br />
          zeynep büyükhanlı
          <br />
          zeynep coşansu
          <br />
          zeynep karamustafaoğlu
          <br />
        </div>
        <br />
        <div className="boldTypeColophon">2021</div>
      </div>
    </div>
  );
};

export default Colophon;
