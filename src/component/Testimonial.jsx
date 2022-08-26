import React from "react";
import imgphoto from "../assets/img_photo.svg";
import rate from "../assets/Rate.svg";

const Testi = () => {
  return (
    <>
      <section
        style={{marginTop: "100px"}}
        className="Testimonial text-center"
        id="Testimonial"
      >
        <h4>Testimonial</h4>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <div className="container">
          <img src={imgphoto} className="rounded-circle img-center" alt="" />
          <img src={rate} alt="rate" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            omnis molestiae debitis similique iusto cum, qui rerum.
            Exercitationem veniam, quod modi nostrum, dolorem facilis minus a
            quasi rerum, culpa odit?
          </p>
        </div>
      </section>
    </>
  );
};

export default Testi;
