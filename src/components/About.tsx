import { useEffect, useState } from "react";
import { getVisitor } from "../req/detail";
import CountUp from "react-countup";

export default function About() {
  const [visitor, setVisitor] = useState<any>("");

  const getAllVisitor = async () => {
    let res: any = await getVisitor();
    if (res) {
      const countStr = res.length + 700;
      setVisitor(countStr.toString());
    }
  };

  useEffect(() => {
    getAllVisitor();
  }, [visitor]);
  return (
    <>
      <section
        id="section-1"
        className="about-section"
        style={{ marginBottom: -100 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading heading-md heading-uppercase heading-center heading-hover">
                <span className="heading-title-ghost">Pengunjung</span>
                <h2 className="heading-title">Pengunjung</h2>
                <hr className="hr-width-1 hr-5x border-main" />
                {/* End divider */}

                <h4 className="heading-title" style={{ fontSize: 20 }}>
                  <CountUp delay={1} end={visitor} /> Orang
                  {/* {visitor ? visitor : `0`} <i> &nbsp;Orang</i> */}
                </h4>
              </div>
              {/* End heading */}
            </div>{" "}
            {/* /.col */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
        <div className="container margin-top-20">
          <div className="row"></div> {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </section>

      <section id="section-1" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading heading-md heading-uppercase heading-center heading-hover">
                <span className="heading-title-ghost">A M V</span>
                <h2 className="heading-title">A M V</h2>
                <hr className="hr-width-1 hr-5x border-main" />
                {/* End divider */}
                <h4 className="heading-title" style={{ fontSize: 20 }}>
                  <i>
                    All changes start from small things that are build together
                  </i>
                </h4>
              </div>
              {/* End heading */}
            </div>{" "}
            {/* /.col */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
        <div className="container margin-top-20">
          <div className="row"></div> {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </section>
    </>
  );
}
