import React from "react";
import imgcar from "./../assets/img_car.svg";
import {Button} from "reactstrap";

const Banner = () => {
  return (
    <header className="container-fluid">
      <div
        style={{marginTop: "-20px", backgroundColor: "#f1f3ff"}}
        className="row"
      >
        <div className="col-6">
          <div
            style={{
              marginTop: "177px",
              marginLeft: "136px",
              marginBottom: "87px",
            }}
          >
            <h1 style={{marginBottom: "16px"}}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p style={{marginBottom: "16px"}} className="text1">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Button
              style={{
                left: "136px",
                backgroundColor: "#5CB85F",
                color: "#fffff",
              }}
            >
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>
        <div className="col-6">
          <div style={{marginLeft: "0px", top: "97px"}}>
            <img style={{width: "100%"}} src={imgcar} alt="Car" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
