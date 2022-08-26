import React from "react";
import listitem from "../assets/list item.svg";
import rec from "../assets/Rectangle 74.svg";

const FooTer = () => {
  return (
    <>
      <footer style={{justifyContent: "center"}}>
        <div style={{marginTop: "150px"}} className="container-fluid">
          <div className="row center">
            <div className="col-3">
              <p>
                <strong>
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </strong>
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-3">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-3">
              <p>
                <strong>Connect with us</strong>
              </p>
              <img src={listitem} alt="" />
            </div>
            <div className="col-3">
              <p>
                <strong>Copyright Binar 2022</strong>
              </p>
              <img src={rec} alt="logo" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooTer;
