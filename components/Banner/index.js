import Logo from "../Logo";

const Banner = () => {
  return (
    <div className="wrapper-banner">
      <div className="banner">
        <div className="block">
          <Logo />
          <p className="banner-title">
            <h2>Привет,</h2> <br/> 
            <h3>я</h3> <br/>
            <span>верстальщик HTML / CSS.</span> <br />
            Родился и живу в Киеве.
          </p>
          <a href="https://github.com/AndriiVerzhanskiy" title="github.com/AndriiVerzhanskiy">
            <div className="icon-git" ></div>
          </a>
          <p style={{textAlign: "center"}}>(c) {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
