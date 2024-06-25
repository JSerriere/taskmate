import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
    </header>
  );
};
