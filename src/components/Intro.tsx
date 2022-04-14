export default function Intro() {
  return (
    <section
      id="intro"
      className="bg-image-parallax"
      style={{
        backgroundImage: "url(/img/amv.jpeg)",
        width: "auto",
        height: 500,
      }}
    >
      <div className="intro-inner">
        {/* Element cover
					===================
					* Use background transparent color classes for colored opacity (example: "bg-transparent-6-dark", "bg-transparent-8-5-red" ... 1 to 95). Look into "helper.css" file for more info. 
					*/}
        <span className="cover bg-transparent-2-dark bg-transparent-gradient-2" />
        {/* Begin intro caption */}
        <div className="intro-caption vertical-align-center text-center text-white">
          <h2 className="intro-title font-alter-1">
            <span
              className="wow fadeInDown"
              data-wow-delay="0.4s"
              data-wow-duration="0.5s"
            >
              A
            </span>
            <span
              className="wow fadeInDown"
              data-wow-delay="0.6s"
              data-wow-duration="0.5s"
            >
              M
            </span>
            {/* <span className="wow bounceIn" data-wow-delay="1.6s">
              /
            </span> */}
            <span
              className="wow fadeInDown"
              data-wow-delay="0.8s"
              data-wow-duration="0.5s"
            >
              V
            </span>
            {/* <span
              className="wow fadeInDown"
              data-wow-delay="1s"
              data-wow-duration="0.5s"
            >
              o
            </span> */}
          </h2>
          {/* <p className="intro-description wow fadeIn" data-wow-delay="2.2s">
            Aliance Movement Victory
          </p> */}
          {/* <div className="margin-top-30">
            <a
              href="#section-2"
              className="btn btn-white-bordered sm-scroll wow bounceIn"
              data-wow-delay="0.8s"
            >
              Our Services
            </a>
            <a
              href="#section-8"
              className="btn btn-primary sm-scroll margin-top-10 wow bounceIn"
              data-wow-delay="1s"
            >
              Hire Us Now!
            </a>
          </div> */}
        </div>
        {/* End intro caption */}
        {/* Made with love :) */}
        <div className="made-with-love hidden-xs">
          <p className="text-gray">Code by elcode</p>
        </div>
        {/* Scroll down arrow */}
        {/* <a
          className="scroll-down-arrow sm-scroll text-center text-white"
          href="#section-1"
        >
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a> */}
      </div>
    </section>
  );
}
