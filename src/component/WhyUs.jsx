import React from "react";
import imgcompl from "../assets/icon_complete.svg";
import imgprice from "../assets/icon_price.svg";
import img24hrs from "../assets/icon_24hrs.svg";
import imgprof from "../assets/icon_professional.svg";

const WhyU = () => {
  return (
    <>
      <section id="whyus">
        <span className="whyus">
          <h3 style={{marginLeft: "136px", marginBottom: "16px"}}>Why Us ?</h3>
          <p style={{marginLeft: "136px"}}>
            Mengapa harus pilih Binar Car Rental?
          </p>
        </span>
        <div
          style={{marginLeft: "136px", marginTop: "40px"}}
          className="container"
        >
          <div className="row">
            <div className="col-3">
              <img src={imgcompl} alt="" />
              <p>Mobil Lengkap</p>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="col-3">
              <img src={imgprice} alt="icon_price" />
              <p>Harga Murah</p>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div className="col-3">
              <img src={img24hrs} alt="icon_24hrs" />
              <p>Layanan 24 Jam</p>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div className="col-3">
              <img src={imgprof} alt="icon_professional" />
              <p>Sopir Profesional</p>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyU;
