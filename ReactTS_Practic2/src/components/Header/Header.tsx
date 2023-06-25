import "./header.scss";

export default function Header(): JSX.Element {
    return (
        <header>
            <div className="limit">
                <div className="name">
                    <h1><span>Marvel</span> information portal</h1>
                </div>
                <nav className="pages">
                    <p>Characters</p>
                    <p>/</p>
                    <p>Comics</p>
                </nav>
            </div>
        </header>
    );
}