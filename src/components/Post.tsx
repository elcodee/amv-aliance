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
import { useEffect, useState } from "react";
import { getAllPost } from "../req/post";

export default function Post() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [post, setPost] = useState<any>([]);

  const getPost = async () => {
    let res: any = await getAllPost();

    if (res) {      
      setPost(res);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
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
        <div className="container-fluid no-padding" style={{ marginTop: -50 }}>
          <div className="isotope popup-gallery col-4">
            <div className="isotope-items-wrap ">
              {/* Grid sizer (do not remove!!!) */}
              <div className="grid-sizer" />
              {/* //////////////////
							// Begin isotope item. Note: use class "width2" for alternative item width (works best on first item)
							/////////////////////// */}

              {post
                ? post.map((item: any, index: any) => {
                    console.log("ITEM : ", item);

                    return (
                      <div className="isotope-item photography" key={index + 1}>
                        {/* Begin portfolio item */}
                        <div className="portfolio-item-wrap">
                          <div className="portfolio-item">
                            <a
                              className="item-link inline-popup-trigger"
                              onClick={onOpen}
                            >
                              <span className="cover bg-transparent-9-main" />
                              <div
                                style={{
                                  alignSelf: "center",
                                }}
                              >
                                <img
                                  className="item-img"
                                  src={item.cover[0].url}
                                  alt={item.title}
                                />
                              </div>

                              <div className="item-info text-white">
                                <h3 className="item-info-title">
                                  {item.title}
                                </h3>
                                {/* <p className="item-info-text">300k</p> */}
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
                              style={{
                                marginTop: 80,
                                minWidth: 350,
                                padding: 10,
                              }}
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
                    );
                  })
                : null}

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
