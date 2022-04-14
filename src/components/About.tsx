export default function About() {
  return (
    <section id="section-1" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Begin heading 
								===================
								* Use class "heading-center" or "heading-right" to align heading.
								* Use class "heading-xs", "heading-sm", "heading-md", "heading-lg" or "heading-xlg" to shange heading size.
								* Use class "heading-hover" to enable heading hover effect.
								* Use class "heading-uppercase" to enable uppercase letters.
								*/}
            <div className="heading heading-md heading-uppercase heading-center heading-hover wow fadeIn">
              <span className="heading-title-ghost">About Us</span>
              <h2 className="heading-title">About Us</h2>
              {/* Begin divider 
									===================
									* Use class "hr-width-1", "hr-width-2" -> up to "hr-width-10" to shange divider width.
									* Use class "hr-1x", "hr-2x", "hr-3x", "hr-4x" or "hr-5x" to shange divider size.
									* Use class "hr-dotted", "hr-dashed" or "hr-double" to shange divider style.
									*/}
              <hr className="hr-width-1 hr-5x border-main" />
              {/* End divider */}
              <p className="heading-tescription lead max-width-1000 margin-auto">
                All changes start from small things that are build together
                {/* <a href="#">&nbsp; Read More...</a> */}
              </p>
            </div>
            {/* End heading */}
          </div>{" "}
          {/* /.col */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
      <div className="container margin-top-20">
        <div className="row wow fadeIn" data-wow-delay="0.3s">
          <div className="col-sm-6 col-md-3">
            {/* Begin info box-1 */}
            <div className="info-box info-box-1">
              <span className="info-box-icon">
                <i className="fas fa-clone" />
              </span>
              <div className="info-box-info">
                <h4 className="info-box-title">Fully Responsive</h4>
                <p className="info-box-text">
                  Lorem ipsum dolor sit amet, consect adipis elit minim veniam
                  ettis inkeras.
                </p>
              </div>
            </div>
            {/* End info box-1 */}
          </div>{" "}
          {/* /.col */}
          <div className="col-sm-6 col-md-3">
            {/* Begin info box-1 */}
            <div className="info-box info-box-1">
              <span className="info-box-icon">
                <i className="far fa-gem" />
              </span>
              <div className="info-box-info">
                <h4 className="info-box-title">Clean Code</h4>
                <p className="info-box-text">
                  Lorem ipsum dolor sit amet, consect adipis elit minim veniam
                  ettis inkeras.
                </p>
              </div>
            </div>
            {/* End info box-1 */}
          </div>{" "}
          {/* /.col */}
          <div className="col-sm-6 col-md-3">
            {/* Begin info box-1 */}
            <div className="info-box info-box-1">
              <span className="info-box-icon">
                <i className="fas fa-tv" />
              </span>
              <div className="info-box-info">
                <h4 className="info-box-title">One Page</h4>
                <p className="info-box-text">
                  Lorem ipsum dolor sit amet, consect adipis elit minim veniam
                  ettis inkeras.
                </p>
              </div>
            </div>
            {/* End info box-1 */}
          </div>{" "}
          {/* /.col */}
          <div className="col-sm-6 col-md-3">
            {/* Begin info box-1 */}
            <div className="info-box info-box-1">
              <span className="info-box-icon">
                <i className="fas fa-bicycle" />
              </span>
              <div className="info-box-info">
                <h4 className="info-box-title">Awesome Icons</h4>
                <p className="info-box-text">
                  Lorem ipsum dolor sit amet, consect adipis elit minim veniam
                  ettis inkeras.
                </p>
              </div>
            </div>
            {/* End info box-1 */}
          </div>{" "}
          {/* /.col */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </section>
  );
}
