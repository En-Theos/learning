// Імпорти NPM ===========================================================
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function LoadListComics():JSX.Element {
    return (
        <MyLoader/>
    )
}

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={225}
    height={410}
    viewBox="0 0 225 410"
    backgroundColor="#c2c2c2"
    foregroundColor="#ababab"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="225" height="346" /> 
    <rect x="-1" y="354" rx="0" ry="0" width="225" height="25" /> 
    <rect x="0" y="386" rx="0" ry="0" width="225" height="18" />
  </ContentLoader>
)