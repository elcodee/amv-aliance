import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getVisitor } from "../req/detail";

export default function About() {
  const toast = useToast();
  // const [visitor, setVisitor] = useState<any>(0);

  const getAllVisitor = async () => {
    let res: any = await getVisitor();
    if (res) {
      toast({
        status: "warning",
        title: `
        Total Pengunjung ${res.length.toString()}
       `,
        position: "top",
        isClosable: true,
        variant: "top-accent",
        containerStyle: {
          marginTop: 60,
        },
      });
    }
  };
  useEffect(() => {
    return () => {
      getAllVisitor();
    };
  }, []);
  return (
    <section id="section-1" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading heading-md heading-uppercase heading-center heading-hover">
              <span className="heading-title-ghost">About Us</span>
              <h2 className="heading-title">About Us</h2>
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
        <div className="row"></div> {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </section>
  );
}
