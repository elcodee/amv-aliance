import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UploadData from "../components/Upload";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { getDetail } from "../req/detail";

function Upload() {
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
        <UploadData />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Upload;
