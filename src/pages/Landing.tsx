import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Post from "../components/Post";
import { getDetail } from "../req/detail";

function Landing() {
  const [ip, setIp] = useState<any>();

  let nAgt = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = "" + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if (
    (nameOffset = nAgt.lastIndexOf(" ") + 1) <
    (verOffset = nAgt.lastIndexOf("/"))
  ) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt("" + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = "" + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  (async () => {
    const { value: accept }: any = await Swal.fire({
      allowOutsideClick: false,

      icon: "info",
      title: "Terms and conditions",
      input: "checkbox",
      text: "Semua informasi yang ada bertujuan untuk menghimbau saja & tidak boleh di salah gunakan untuk hal bersifat negatif !",
      inputValue: 0,
      inputPlaceholder: "Setuju",
      confirmButtonText: "Continue",
      confirmButtonColor: "#003153",
      inputValidator: (value: any) => {
        return new Promise((resolve) => {
          if (value === 1) {
            resolve("");
          } else {
            resolve("Wajib setuju terms and conditions");
          }
        });
      },
    });

    if (accept) {
      Swal.fire({
        allowOutsideClick: false,
        title: "Detail Info anda",
        confirmButtonColor: "#003153",
        // html: `
        // <b>Alamat IP : </b> ${ip?.ip_address} <br /><br />
        // <b>Koneksi VPN : </b> ${
        //   ip?.security?.is_vpn ? `YA` : `TIDAK`
        // } <br /><br />
        // <b>Kota : </b> ${ip?.region},  ${ip?.country}<br /><br />
        // <b>Waktu : </b> ${ip?.timezone?.current_time}  ${
        //   ip?.timezone?.abbreviation
        // }<br /><br />
        // <b>Provider : </b> ${ip?.connection?.isp_name}  |  ${
        //   ip?.connection?.organization_name
        // }<br /><br />
        // <b>Waktu : </b> ${ip?.timezone?.current_time}  ${
        //   ip?.timezone?.abbreviation
        // }<br /><br />
        // <b>Browser : </b> ${browserName}<br /><br />
        // <b>User Agent : </b> ${navigator.userAgent}<br />
        // `,
        html: `
        <b>Provider : </b> ${ip?.connection?.isp_name}  |  ${ip?.connection?.organization_name}<br /><br />
        <b>Waktu : </b> ${ip?.timezone?.current_time}  ${ip?.timezone?.abbreviation}<br /><br />
        <b>Browser : </b> ${browserName}<br /><br />
        <b>User Agent : </b> ${navigator.userAgent}<br />
        `,
      });
    }
  })();

  useEffect(() => {
    let mounted = true;
    getDetail();

    if (mounted) {
      if (localStorage.getItem("userInfo")) {
        const userData: any = JSON.parse(`${localStorage.getItem("userInfo")}`);
        setIp(userData);
      }
    }

    return () => {
      mounted = false;
    };
  }, []);

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

        {/* CTA */}
        {/* <Cta /> */}

        {/* About */}
        <About />

        {/* Post */}
        <Post />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Landing;
