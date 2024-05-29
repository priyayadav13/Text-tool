// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntxt, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>About us</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          "--bs-accordion-bg": props.mode === "dark" ? "#074c8b" : "white",
          color: props.mode === "dark" ? "white" : "black",
          "--bs-accordion-btn-color": props.mode === "dark" ? "white" : "black",
          "--bs-accordion-btn-bg": props.mode === "dark" ? "0b375e" : "white",
          "--bs-accordion-color": props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What We Offer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Welcome to <strong>Text Tool</strong> ! Our website is designed to
              provide a simple and efficient way to manipulate text. Whether you
              need to convert text to uppercase or lowercase, copy it to your
              clipboard, remove extra spaces, or count the number of words and
              characters, our tool has got you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <lu>
                <li>
                  Text Conversion: Easily convert your text to uppercase or
                  lowercase with a single click.
                </li>
                <li>
                  Copy Text: Quickly copy your modified text to the clipboard
                  for use in other applications.
                </li>
                <li>
                  Remove Extra Spaces: Clean up your text by removing any
                  unnecessary spaces, ensuring your content is perfectly
                  formatted.
                </li>
                <li>
                  Word and Character Count: Get an instant count of the number
                  of words and characters in your text, helping you keep track
                  of your content length.
                </li>
              </lu>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Choose Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our intuitive and user-friendly interface ensures that you can
              perform these tasks effortlessly, saving you time and enhancing
              your productivity. Whether you're a student, writer, or anyone who
              frequently works with text, our website is here to make your text
              processing tasks easier and more efficient. Thank you for using{" "}
              <strong>Text Tool</strong>. We hope you find our tool helpful and
              convenient!
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btntxt}
        </button>
      </div> */}
    </div>
  );
}
