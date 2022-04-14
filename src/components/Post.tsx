import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function Post() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <section
        id="section-3"
        className="portfolio-section no-padding-bottom padding-top-100"
        style={{ marginTop: -100, marginBottom: 10 }}
      >
        <div className="container">
          <div className="row">
            {/* Left column */}
            <div className="col-md-6">
              <div className="heading heading-md heading-uppercase heading-hover">
                <span className="heading-title-ghost">Proof</span>
                <h2 className="heading-title">Proof</h2>
                <hr className="hr-width-1 hr-5x border-main" />
                {/* End divider */}
              </div>
              {/* End heading */}
            </div>{" "}
            {/* /.col */}
            {/* Right column */}
            <div className="col-md-6">
              <p className="lead">
                <strong>Kumpulan bukti </strong> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </div>{" "}
            {/* /.col */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
        <div className="container-fluid no-padding" style={{ marginTop: -100 }}>
          <div className="isotope popup-gallery col-4">
            <div
              className="isotope-items-wrap "
            >
              {/* Grid sizer (do not remove!!!) */}
              <div className="grid-sizer" />
              {/* //////////////////
							// Begin isotope item. Note: use class "width2" for alternative item width (works best on first item)
							/////////////////////// */}

              <div className="isotope-item photography">
                {/* Begin portfolio item */}
                <div className="portfolio-item-wrap">
                  <div className="portfolio-item">
                    <a
                      className="item-link inline-popup-trigger"
                      onClick={onOpen}
                    >
                      <span className="cover bg-transparent-9-main" />
                      <img
                        className="item-img"
                        src="https://demo.themetorium.net/html/asso/v.1.4/theme/assets/img/portfolio/v.2/portfolio-img-1.jpg"
                        alt="image"
                      />
                      <div className="item-info text-white">
                        <h3 className="item-info-title">Penipu DM Hujan</h3>
                        <p className="item-info-text">300k</p>
                      </div>
                    </a>
                  </div>

                  {/* MODAL */}
                  <Modal
                    closeOnOverlayClick={false}
                    onClose={onClose}
                    isOpen={isOpen}
                  >
                    <ModalOverlay />
                    <ModalContent
                      style={{ marginTop: 20, minWidth: 350, padding: 10 }}
                    >
                      <ModalHeader>Penipu DM Hujan</ModalHeader>
                      <ModalBody>
                        <h4>ewnfoinewfoineiofonqofeifwn</h4>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
                {/* End portfolio item */}
                {/* End portfolio item */}
                {/* End portfolio item */}
                {/* End portfolio item */}
              </div>
              {/* End isotope item */}
            </div>
            {/* End isotope items wrap */}
          </div>
          {/* End isotope */}
        </div>{" "}
        {/* /.container */}
      </section>
    </>
  );
}
