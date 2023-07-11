// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів ========================================================
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function Page404(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta name="description" content="page not found" />
      </Helmet>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "200px" }}>
        <h2 style={{ fontFamily: '"Roboto Condensed", sans-serif', fontSize: "30px" }}>404 PAGE NOT FOUND</h2>
        <p style={{ fontFamily: '"Roboto Condensed", sans-serif', fontSize: "20px" }}>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
        <Link style={{ fontFamily: '"Roboto Condensed", sans-serif', fontSize: "20px", color: "black", marginTop: "20px", fontWeight: "bold" }} to="/">Go main</Link>
      </div>
    </>
  )
}