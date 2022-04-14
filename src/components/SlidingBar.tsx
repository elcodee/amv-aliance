export default function SlidingBar() {
  return (
    <section id="top-slidingbar-wrapper" className="slidingbar-fixed">
      <div id="top-slidingbar">
        <div className="container">
          <div className="row">
            <div className="col col-md-4">
              <h4 className="top-slidingbar-heading text-gray-2">
                Information
              </h4>
              <hr className="hr-width-1 hr-double margin-top-15" />
              <p className="small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt uteralis labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
            </div>{" "}
            {/* /.col */}
            <div className="col col-md-4">
              <h4 className="top-slidingbar-heading text-gray-2">Contact</h4>
              <hr className="hr-width-1 hr-double margin-top-15" />
              <ul className="list-unstyled small">
                <li>
                  <i className="fas fa-home" /> 121 King Street, Melbourne,
                  Australia
                </li>
                <li>
                  <i className="fas fa-phone" /> (+548) 12-345-6789
                </li>
                <li>
                  <i className="fas fa-envelope-o" />{" "}
                  <a href="mailto:support@mail.com">support@mail.com</a>
                </li>
              </ul>
            </div>{" "}
            {/* /.col */}
            <div className="col col-md-4">
              <h4 className="top-slidingbar-heading text-gray-2">
                Our Instagram
              </h4>
              <hr className="hr-width-1 hr-double margin-top-15" />
              {/* Begin thumbnail list 
								==========================
								* Use class "col-2", "col-3", "col-4" "col-5" or "col-6" for thumbnail list columns.
								* Use class "gutter-1", "gutter-2", "gutter-3", "gutter-4" or "gutter-5" to add more space between items.
								*/}
              <ul className="thumb-list col-5 gutter-3">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-1.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-2.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-3.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-4.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-5.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-6.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-7.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-8.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-9.jpg)",
                    }}
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="thumb-list-item bg-image"
                    style={{
                      backgroundImage: "url(assets/img/misc/small/img-11.jpg)",
                    }}
                  />
                </li>
              </ul>
              {/* End thumbnail list */}
            </div>{" "}
            {/* /.col */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>{" "}
      {/* /.top-slidingbar */}
      {/* top-top-slidingbar trigger */}
      <div className="top-slidingbar-trigger-wrapper">
        <span className="top-slidingbar-trigger">+</span>
      </div>
    </section>
  );
}
