import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllPost } from "../req/post";

export default function Article() {
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
    <section
      id="section-6"
      className="blog-section padding-top-100"
      style={{ marginTop: -130 }}
    >
      <div className="container">
        <div className="row">
          {/* Left column */}
          <div className="col-md-6">
            <div className="heading heading-md heading-uppercase heading-hover">
              <span className="heading-title-ghost">Bad Vibes</span>
              <h2 className="heading-title">Bad Vibes</h2>
              <hr className="hr-width-1 hr-5x border-main" />
              {/* End divider */}
            </div>
            {/* End heading */}
          </div>{" "}
          {/* /.col */}
          {/* Right column */}
          <div className="col-md-6">
            <p className="lead">
              <strong>
                Kami berikan panggung untuk kelakuan anda yang kampungan.
              </strong>
            </p>
          </div>{" "}
          {/* /.col */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
      {/* Begin blog list
					=====================
					* Use class "blog-list-classic" to enable classic blog list layout.
					*/}
      {post
        ? post.map((item: any, index: any) => {
            return (
              <>
                <div className="container" style={{ marginTop: -50 }}>
                  <div className="blog-list margin-top-80">
                    <div className="blog-wrap">
                      {/* Begin blog list item 1 
							============================ */}
                      <div className="blog-list-item row">
                        {/* Left column */}
                        <a
                          className="col col-md-6 no-padding"
                          href={`/detail-post/${item._id}`}
                        >
                          {/* <h1>{item._id}</h1> */}
                          <img
                            className="bco blog-list-image bg-image"
                            src={item.cover[0].url}
                            alt={item.title}
                            style={{ marginBottom: -200, maxHeight: 600 }}
                          />
                        </a>
                        {/* /.col */}
                        {/* Right column */}
                        <a
                          className="col col-md-6 no-padding"
                          href={`/detail-post/${item._id}`}
                        >
                          <div className="bco blog-list-info">
                            <h2 className="blog-list-title">
                              <a onClick={onOpen} title="Aenean Odio Metus">
                                {item.username}
                              </a>
                            </h2>
                            <div className="blog-list-meta">
                              <a className="article-time">
                                <b>{item.title}</b>
                              </a>
                              &nbsp;-&nbsp;
                              <a className="article-category">
                                {item.createdAt.toLocaleString("id")}
                              </a>
                            </div>
                            <p className="blog-list-desc">{item.desc}</p>
                          </div>
                        </a>{" "}
                        {/* /.col */}
                      </div>
                      {/* End blog list item 4 */}
                    </div>{" "}
                    {/* /.blog-wrap */}
                  </div>
                </div>

                {/* MODAL */}
                {/* {index + 1 === item.sort && (
                  <Modal
                    closeOnOverlayClick={false}
                    onClose={onClose}
                    // isOpen={isOpen}
                  >
                    <ModalOverlay />
                    <ModalContent
                      style={{
                        marginTop: 80,
                        minWidth: 350,
                        padding: 10,
                      }}
                    >
                      <ModalHeader>
                        <Text fontSize="3xl">
                          <i> {item.username}</i> &nbsp; {item.title}
                        </Text>
                      </ModalHeader>
                      <ModalBody>
                        <ul
                          style={{
                            padding: 15,
                          }}
                        >
                          <li>
                            <Text fontSize="2xl">
                              <b>Username :</b> {item.username}
                            </Text>
                          </li>
                          <li>
                            <Text fontSize="2xl">
                              <b>ID LM :</b> {item.id_lm}
                            </Text>
                          </li>
                          <br />
                          <hr />
                          <br />
                          <li>
                            <Text fontSize="2xl">
                              <b>Username Korban :</b> {item.username_korban}
                            </Text>
                          </li>
                          <li>
                            <Text fontSize="2xl">
                              <b>ID LM Korban :</b> {item.id_korban}
                            </Text>
                          </li>
                          <li>
                            <Text fontSize="2xl">
                              <b>Kronologi :</b> {item.desc}
                            </Text>
                          </li>
                        </ul>
                        <hr />
                        <br />
                        <Text fontSize="4xl">
                          <b>Bukti :</b>
                        </Text>
                        <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_1 ? item?.img_1[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                        <hr /> <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_2 ? item?.img_2[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                        <hr /> <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_3 ? item?.img_3[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                        <hr /> <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_4 ? item?.img_4[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                        <hr /> <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_5 ? item?.img_5[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                        <hr /> <br />
                        <img
                          className="bco blog-list-image bg-image"
                          src={item?.img_6 ? item?.img_6[0]?.url : ``}
                          alt={item.title}
                          style={{ marginBottom: -150, maxHeight: 550 }}
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Tutup</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                )} */}
              </>
            );
          })
        : null}
      {/* End blog-list */}
      {/* /.container */}
    </section>
  );
}
