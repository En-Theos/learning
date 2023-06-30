// Імпорти NPM ===========================================================
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./loadRandomCharacter.scss"
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function LoadRandomCharacter(): JSX.Element {
    return (
        <MyLoader/>
    )
}

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={475}
    height={183}
    viewBox="0 0 475 183"
    backgroundColor="#c2c2c2"
    foregroundColor="#ababab"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="183" height="183" /> 
    <rect x="0" y="210" rx="0" ry="0" width="200" height="25" /> 
    <rect x="0" y="245" rx="0" ry="0" width="200" height="25" /> 
    <rect x="0" y="280" rx="0" ry="0" width="200" height="25" /> 
    <rect x="213" y="0" rx="0" ry="0" width="262" height="26" /> 
    <rect x="213" y="149" rx="0" ry="0" width="262" height="32" /> 
    <rect x="213" y="45" rx="0" ry="0" width="262" height="80" />
  </ContentLoader>
)