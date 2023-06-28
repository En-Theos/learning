// Імпорти NPM ===========================================================
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./loadListCharacter.scss"
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function LoadListCharacter():JSX.Element {
    return (
        <MyLoader/>
    )
}

const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
    <ContentLoader 
      speed={2}
      width={200}
      height={334}
      viewBox="0 0 200 334"
      backgroundColor="#232222"
      foregroundColor="#322a2a"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="195" /> 
      <rect x="0" y="215" rx="0" ry="0" width="200" height="25" /> 
      <rect x="0" y="260" rx="0" ry="0" width="200" height="25" /> 
      <rect x="0" y="305" rx="0" ry="0" width="200" height="25" />
    </ContentLoader>
  )