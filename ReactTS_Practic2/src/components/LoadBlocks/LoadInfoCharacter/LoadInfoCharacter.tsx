// Імпорти NPM ===========================================================
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./loadInfoCharacter.scss"
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function LoadInfoCharacter(): JSX.Element {
    return (
        <aside className="skeleton">
            <p>Please select a character to see information</p>
            <MyLoader/>
        </aside>
    )
}

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={375}
    height={190}
    viewBox="0 0 375 190"
    backgroundColor="#c2c2c2"
    foregroundColor="#a6a6a6"
    {...props}
  >
    <circle cx="20" cy="20" r="20" /> 
    <rect x="0" y="55" rx="0" ry="0" width="375" height="35" /> 
    <rect x="50" y="12" rx="0" ry="0" width="326" height="16" /> 
    <rect x="0" y="105" rx="0" ry="0" width="375" height="35" /> 
    <rect x="0" y="155" rx="0" ry="0" width="375" height="35" />
  </ContentLoader>
)