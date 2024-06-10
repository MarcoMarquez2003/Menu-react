import React from "react";
import TortaAhogada from "../assets/TortaAhogada.jpg";
import Sopes from "../assets/Sopes.jpg";
import QuesaBirrias from "../assets/QuesaBirrias.jpg";
import tacos from "../assets/tacos.jpg";

function Card() {
  return (
    <div >
      <div className="card">
        <img src={TortaAhogada} alt="" />
        <div className="card-body">
          <h4 className="card-title">Torta</h4>
          <p className="card-text text-secondary">
            Torta ahogada
          </p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={tacos} alt="" />
        <div className="card-body">
          <h4 className="card-title">tacos</h4>
          <p className="card-text text-secondary">Orden de tacos</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={QuesaBirrias} alt="" />
        <div className="card-body">
          <h4 className="card-title">QuesaBirrias</h4>
          <p className="card-text text-secondary">QuesaBirrias</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Sopes} alt="" />
        <div className="card-body">
          <h4 className="card-title">Sopes</h4>
          <p className="card-text text-secondary">Sopes</p>
          <a href="#" className="btn btn-primary">
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
