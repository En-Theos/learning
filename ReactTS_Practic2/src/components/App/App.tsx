// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======================================================================

// Імпорти компонентів ===================================================
import Header from '../Header/Header';
import { CharacterPage, ComicsPage } from "../pages"
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import ListCharacter from '../ListCharacter/ListCharacter';
import InfoCharacter from '../InfoCharacter/InfoCharacter';
import MessageComics from "../MessageComics/MessageComics";
import ListComics from "../ListComics/ListComics";
import InfoComics from "../InfoComics/InfoComics";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}
