import './Home.scss';

function Home() {
  const hej:string = "hello React";
  return (
    <div className="home-body">
        <div className="hero-area">
            <div className="hero-text">
                <h1>Navid Mirzad</h1>
                <p>Fullstack Web Developer</p>
                <div className="button"><a href="#about-me">About me</a></div>
            </div>
            <div className="socials">
            <div><a href="https://github.com/navidmirzad" target="_blank" className="social">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" />
            </a></div>
            <div><a href="https://www.linkedin.com/in/navidmirzad/" target="_blank" className="social">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
            </a></div>
        </div>
        </div>
    </div>
  );
  
}

export default Home;
