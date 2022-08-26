import React from "react";
import imgservice from "../assets/img_service.svg";
import check from "../assets/Group 53.svg";

const OurSer = () => {
  return (
    <>
      <section className="Our" id="Ourservice">
        <div className="row">
          <div className="col-6">
            <div
              style={{
                marginLeft: "206px",
                marginTop: "104px",
                marginRight: "0px",
                marginBottom: "162px",
              }}
              className="hapygirl"
            >
              <img style={{width: "100%"}} src={imgservice} alt="hapy" />
            </div>
          </div>
          <div className="col-6">
            <div
              style={{width: "100%", marginTop: "140px", marginLeft: "86px"}}
              className="ourtext"
            >
              <h2 style={{marginBottom: "24px"}}>
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h2>
              <p style={{marginBottom: "18px"}} className="ourtext1">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div style={{marginBottom: "24px"}}>
                <img src={check} alt="item" />
                <span style={{marginLeft: "16px"}}>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </span>
              </div>

              <div style={{marginBottom: "24px"}}>
                <img src={check} alt="item" />
                <span style={{marginLeft: "16px"}}>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </span>
              </div>

              <div style={{marginBottom: "24px"}}>
                <img src={check} alt="item" />
                <span style={{marginLeft: "16px"}}>
                  Sewa Mobil Jangka Panjang Bulanan
                </span>
              </div>

              <div style={{marginBottom: "24px"}}>
                <img src={check} alt="item" />
                <span style={{marginLeft: "16px"}}>
                  Gratis Antar - Jemput Mobil di Bandara
                </span>
              </div>

              <div style={{marginBottom: "24px"}}>
                <img src={check} alt="item" />
                <span style={{marginLeft: "16px"}}>
                  Layanan Airport Transfer / Drop In Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSer;
