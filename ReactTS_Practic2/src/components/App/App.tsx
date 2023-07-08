// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======================================================================

// Імпорти компонентів ===================================================
import Header from '../Header/Header';
import { CharactersPage, ComicsPage, ComicPage, Page404, CharacterPage } from "../pages"
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
            <Route path="/" element={<CharactersPage/>}/>
            <Route path="comics" element={<ComicsPage/>}/>
            <Route path="comics/:idComic" element={<ComicPage/>}/>
            <Route path="character/:idCharacter" element={<CharacterPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
