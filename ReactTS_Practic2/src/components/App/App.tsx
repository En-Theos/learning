// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======================================================================

// Імпорти компонентів ===================================================
import Header from '../Header/Header';
import { CharacterPage, ComicsPage, ComicPage, Page404 } from "../pages"
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів ========================================================
import './App.scss';
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="App" >
        <div className="limit">
          <Header />
          <Routes>
            <Route path="/" element={<CharacterPage/>}/>
            <Route path="comics" element={<ComicsPage/>}/>
            <Route path="comics/:idComic" element={<ComicPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
