import HomeButton from "./SmallComponents/HomeButton";
export default function Navbar() {
  return (
    <nav className="nav-style">
      <div className="nav-Links">
        <a href="/" className="link-style">
          Home
        </a>
        <a href="/" className="link-style">
          About
        </a>
        <a href="/" className="link-style">
          Contact
        </a>
      </div>
      <h1 className="page-title">Landing</h1>
      <HomeButton buttonText={"Buy Now"} />
    </nav>
  );
}
