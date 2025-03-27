import reactLogo from "/image/react.svg";
interface props {
  toggle: string;
  link_items: string[];
  handleClick: () => void;
}
function NavBar({ link_items, handleClick, toggle }: props) {
  return (
    <nav className={toggle}>
      <span className="react-symbol">
        <img src={reactLogo} alt="reactLogo" />
        <h2>ReactFacts</h2>
      </span>
      <ul>
        {link_items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <button
          className="icon"
          title={toggle ? "daytime" : "night"}
          onClick={handleClick}
        >
          {toggle ? "☀️" : "🌑"}
        </button>
      </ul>
    </nav>
  );
}
export default NavBar;
