import './styles/main.scss';
import Spline from '@splinetool/react-spline';
import Logo from './images/my logo.png';
import Instagram from './images/instagram.svg';
import Facebook from './images/facebook.svg';
import Linkedin from './images/linkedins.svg';
import { useState } from 'react';

function App() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/KIHUKysh-BGuqpT0/scene.splinecode" />
      <nav className={toggleMenu === true ? '' : 'active'}>
        <div className="itemsContainer">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navList">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="burgerContainer">
            <div
              className="burgerTrigger"
              onClick={() => {
                handleToggleMenu();
              }}
            ></div>
            <div className="burgerMenu"></div>
          </div>
        </div>
      </nav>
      <section>
        <div className="itemsContainer">
          <div className="contents">
            <h1>
              Let&apos;s build <span>something epic.</span>
            </h1>
            <p>Enhancing digital product experiences for businesses in Bali and Europe is our specialty. Click below to learn more about our software company.</p>
          </div>
          <div className="buttons">
            <button className="one">Get started</button>
            <button className="two">Our story</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="contents">
          <ul>
            <li>
              <a href="#">
                <img src={Instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Facebook} alt="facebook" />
              </a>
            </li>
          </ul>
          <div className="creator">
            <p>UI created by Avhira</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
