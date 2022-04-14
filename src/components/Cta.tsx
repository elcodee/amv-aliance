export default function Cta() {
  return (
    <section
      className="call-to-action-section bg-dark bg-pattern"
      style={{
        backgroundImage:
          "url(https://demo.themetorium.net/html/asso/v.1.4/theme/assets/img/patterns/ptn-2.png)",
      }}
    >
      {/* Element cover
				===================
				* Use background transparent color classes for colored opacity (example: "bg-transparent-6-dark", "bg-transparent-8-5-red" ... 1 to 95). Look into "helper.css" file for more info.  
				*/}
      <span className="cover bg-transparent-2-dark" />
      <div className="container">
        <div className="row wow fadeIn">
          {/* Left column */}
          <div className="col-md-8 padding-right-40">
            <h2 className="call-to-action-title text-uppercase text-gray-2">
              Pellentesque Dignissim Risus Ante
            </h2>
            <p className="lead call-to-action-text text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="call-to-action-text lead text-gray margin-top-30">
              <strong>Cool / Innovative / Creative</strong>
            </p>
          </div>{" "}
          {/* /.col */}
          {/* Right column */}
          <div className="col-md-4 text-center">
            <a
              href="https://wrapbootstrap.com/theme/asso-one-page-html5-website-template-WB0229XNF"
              target="_blank"
              className="btn btn-primary-bordered btn-xlg btn-block"
            >
              <i className="fas fa-shopping-cart" /> Buy This Template Now!
            </a>
            <br />
            <a href="#" className="small text-gray">
              Or Learn More.. <i className="fas fa-graduation-cap" />
            </a>
          </div>{" "}
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </section>
  );
}
