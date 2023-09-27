
import './Navbar.scss';

function Navbar() {
  const hej:string = "hello React";
  return (
    <>
        <nav>
            <span>LOGO</span>
            <ul>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Conctact</a></li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
