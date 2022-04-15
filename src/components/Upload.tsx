import { useState } from "react";
import { getAdminAccess } from "../req/admin";

export default function UploadData() {
  const [isAdmin, setIsAdmin] = useState<any>({});
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isErr, setIsErr] = useState<boolean>(false);
  // 62594fa2a0e70936d55f8bbd

  const handleChangeAdmin = (e: any) => {
    setIsAdmin({
      ...isAdmin,
      [e.target.name]: e.target.value,
    });
  };

  console.log(" ADM : ", isAdmin);

  const getAccess = async () => {
    let res: any = await getAdminAccess(isAdmin.idAdmin, isAdmin.pinAdmin);

    if (res) {
      if (res.length > 0) {
        setLogin(true);
      } else {
        setIsErr(true);
        setLogin(false);

        setTimeout(() => {
          setIsErr(false);
        }, 4000);
      }
    }
  };
  return (
    <section id="section-1" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading heading-md heading-uppercase  heading-hover">
              <span className="heading-title-ghost">Upload</span>
              <h2 className="heading-title">Upload</h2>
              <hr className="hr-width-1 hr-5x border-main" />
              {/* End divider */}
              {!isLogin ? (
                <>
                  {isErr && (
                    <div
                      className="alert alert-danger d-flex align-items-center"
                      role="alert"
                    >
                      <div>Lo bukan admin anjing.</div>
                    </div>
                  )}
                  <div style={{ marginBottom: 50 }}>
                    <div
                      className="form-floating mb-3"
                      style={{ marginBottom: 25 }}
                    >
                      <label htmlFor="idAdmin">ID Admin</label>
                      <input
                        type="text"
                        name="idAdmin"
                        onChange={(e) => handleChangeAdmin(e)}
                        className="form-control"
                        id="idAdmin"
                        placeholder="id admin"
                      />
                    </div>

                    <div className="form-floating mb-3">
                      <label htmlFor="security">Security Pin</label>
                      <input
                        type="number"
                        name="pinAdmin"
                        onChange={(e) => handleChangeAdmin(e)}
                        className="form-control"
                        id="security"
                        placeholder="biometric"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={() => getAccess()}
                      >
                        Unlock
                      </button>
                    </div>
                  </div>
                </>
              ) : null}

              {isLogin ? (
                <div>
                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="judul" className="form-label">
                      Judul
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="judul"
                      placeholder="Judul"
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="usernamePelaku" className="text-left">
                      Username Pelaku
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernamePelaku"
                      placeholder="username"
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="IDPelaku" className="text-left">
                      ID LM Pelaku
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="IDPelaku"
                      placeholder="id pelaku"
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="usernameKorban" className="text-left">
                      Username Korban
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameKorban"
                      placeholder="username"
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="IDKorban" className="text-left">
                      ID LM korban
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="IDKorban"
                      placeholder="id korban"
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label htmlFor="desc" className="form-label">
                      Kronologi
                    </label>
                    <textarea
                      className="form-control"
                      id="desc"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="cover">
                      Cover
                    </label>
                    <input type="file" className="form-control" id="cover" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img1">
                      Bukti 1
                    </label>
                    <input type="file" className="form-control" id="img1" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img2">
                      Bukti 2
                    </label>
                    <input type="file" className="form-control" id="img2" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img3">
                      Bukti 3
                    </label>
                    <input type="file" className="form-control" id="cover" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img4">
                      Bukti 4
                    </label>
                    <input type="file" className="form-control" id="img4" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img5">
                      Bukti 5
                    </label>
                    <input type="file" className="form-control" id="img5" />
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label className="input-group-text" htmlFor="img6">
                      Bukti 6
                    </label>
                    <input type="file" className="form-control" id="img6" />
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-info" type="button">
                      Upload
                    </button>
                  </div>
                </div>
              ) : null}
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
