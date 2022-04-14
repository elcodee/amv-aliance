export default function LandingPage() {
  return (
    <div
      id="home"
      data-scroll-index={0}
      className="owl-carousel owl-nav-rounded owl-carousel-white owl-main-slider"
      data-items={1}
      data-lg-items={1}
      data-md-items={1}
      data-sm-items={1}
      data-xs-items={1}
      data-space={0}
      data-autoplay="true"
    >
      <div
        className="bg-cover bg-no-repeat effect-section"
        style={{
          backgroundImage: "url(/img/ra-banner-2.png)",
        }}
      >
        <div className="mask bg-black opacity-5" />
        <div className="container position-relative px-5 px-lg-3">
          <div className="row min-vh-100 align-items-center py-12 justify-content-center">
            <div className="col-lg-8 pt-8 text-center">
              {/* <h6 className="text-white mb-3">Welcome</h6> */}
              <h1 className="display-4 lh-sm text-white mb-3">
                Ｃｉｒｃｌｅ ૨α
              </h1>
              <div className="w-lg-90 mx-auto">
                <p className="lead text-white-85">
                  Káthe fos den eínai aparaítita o ílios.
                </p>
              </div>
              <div className="pt-3">
                <a className="btn btn-outline-white me-3" href="/home">
                  Home
                </a>
                {/* <a className="btn btn-outline-white" href="#">
                  Member List
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-no-repeat effect-section"
        style={{
          backgroundImage: "url(/img/ra-banner-1.png)",
        }}
      >
        <div className="mask bg-black opacity-5" />
        <div className="container position-relative px-5 px-lg-3">
          <div className="row min-vh-100 align-items-center py-12 justify-content-center">
            <div className="col-lg-8 pt-8 text-center">
              {/* <h6 className="text-white mb-3">What We provide</h6> */}
              <h1 className="display-4 lh-sm text-white mb-3">
                Ｃｉｒｃｌｅ ૨α
              </h1>
              <div className="w-lg-90 mx-auto">
                <p className="lead text-white-85">
                  Káthe fos den eínai aparaítita o ílios.
                </p>
              </div>
              <div className="pt-3">
                <a className="btn btn-outline-white me-3" href="/home">
                  Join
                </a>
                {/* <a className="btn btn-outline-white" href="#">
                  Member List
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
