import React, { useState } from "react";
import Head from "next/head";
import Link from "../utils/ActiveLink";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí pondrías tu lógica real de login (API, Firebase, etc.)
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);

    // ✅ Después de un login exitoso, redirige al inicio
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Login | ICIAMEX</title>
      </Head>

      <div className="login-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="login-box">
                <h3 className="text-center mb-4">Iniciar sesión</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Usuario o correo</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Al hacer clic aquí, se dispara handleSubmit y luego router.push("/") */}
                  <button type="submit" className="default-btn w-100 mt-3">
                    Entrar
                  </button>
                </form>

                <div className="text-center mt-3">
                  <Link href="/" legacyBehavior>
                    <a>Volver al inicio</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-area {
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .login-box {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 24px 28px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }
      `}</style>
    </>
  );
};

export default LoginPage;
