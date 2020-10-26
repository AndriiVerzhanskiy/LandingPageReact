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
            <span>Frontend developer junior.</span> <br />
            Родился и живу в Киеве.
          </p>
          <a href="https://github.com/AndriiVerzhanskiy" title="github.com/AndriiVerzhanskiy">
            <div className="icon-git" ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
