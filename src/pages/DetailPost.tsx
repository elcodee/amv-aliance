import { useEffect, useState } from "react";
import About from "../components/About";
import DetailPosting from "../components/DetailPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";

function DetailPost() {
  return (
    <>
      {/* <div id="preloader">
        <div className="pulse"></div>
      </div> */}

      <div id="body-content">
        {/* Header */}
        <Header />

        {/* Intro */}
        <Intro />

        {/* About */}
        <DetailPosting />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default DetailPost;
