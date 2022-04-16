import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostByID } from "../req/post";

export default function DetailPosting() {
  let { idlm } = useParams();
  const [data, setData] = useState<any>({});

  const getPost = async () => {
    let res: any = await getPostByID(idlm);
    if (res) {
      setData(res);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <section id="section-1" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading heading-md heading-uppercase  heading-hover">
              {/* <span className="heading-title-ghost">{data.title}</span> */}
              <h2 className="heading-title">{data.title}</h2>
              <hr className="hr-width-1 hr-5x border-main" />
              {/* End divider */}
              <ul
                style={{
                  padding: 15,
                }}
              >
                <li>
                  <Text fontSize="2xl">
                    <b>Username :</b> {data.username}
                  </Text>
                </li>
                <li>
                  <Text fontSize="2xl">
                    <b>ID LM :</b> {data.id_lm}
                  </Text>
                </li>
                <br />
                <hr />
                <br />
                <li>
                  <Text fontSize="2xl">
                    <b>Username Korban :</b> {data.username_korban}
                  </Text>
                </li>
                <li>
                  <Text fontSize="2xl">
                    <b>ID LM Korban :</b> {data.id_korban}
                  </Text>
                </li>
                <li>
                  <Text fontSize="2xl">
                    <b>Kronologi :</b> {data.desc}
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
                src={data?.img_1 ? data?.img_1[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
              <hr /> <br />
              <img
                className="bco blog-list-image bg-image"
                src={data?.img_2 ? data?.img_2[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
              <hr /> <br />
              <img
                className="bco blog-list-image bg-image"
                src={data?.img_3 ? data?.img_3[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
              <hr /> <br />
              <img
                className="bco blog-list-image bg-image"
                src={data?.img_4 ? data?.img_4[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
              <hr /> <br />
              <img
                className="bco blog-list-image bg-image"
                src={data?.img_5 ? data?.img_5[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
              <hr /> <br />
              <img
                className="bco blog-list-image bg-image"
                src={data?.img_6 ? data?.img_6[0]?.url : ``}
                alt={data.title}
                style={{ marginBottom: -150, maxHeight: 550 }}
              />
            </div>
            {/* End heading */}
          </div>{" "}
          {/* /.col */}
        </div>{" "}
        {/* /.row */}
      </div>{" "}
    </section>
  );
}
