import logo from './logo.svg';
import './App.css';
import microsoft from './img/images__5_-removebg-preview.png';
import magicleap from './img/images__1_-removebg-preview.png';
import usertesting from './img/images__2_-removebg-preview.png';
import duolingo from './img/images__4_-removebg-preview (1).png';
import codecov from './img/Screenshot_2024-05-29_130224-removebg-preview.png';
import man1 from './img/images (1).jpg';
import man2 from './img/images (2).jpg';
import man3 from './img/images (3).jpg';
import man4 from './img/images.jpg';
import search from './img/VisualEditor_-_Icon_-_Search.svg.png';

function App() {
  return (
    <>
    <div className='stuff'>
      <nav className='nav-main'>
        <div className='logo'>
          <h1>Etech.</h1>
        </div>
        <div className='navbar'>
          <ul>
            <li>Courses</li>
            <li>Teachers</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='btns'>
          <div id='sgnin'>
            <p>Sign In</p>
          </div>
          <div id='free'>
            <p>Free Trial</p>
          </div>
        </div>
      </nav>

      <div className='content'>
        <div className='text'>
          <h1>Develop your skills in a new and unique way</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='image'>
          <div id='cor'>
          <div><img id='man1' src={man1}/></div>
          <div>
          <h3>50+</h3>
          <p>Online Courses</p>
          </div>
          </div>
          <div id='os'>
          <h3>10k+</h3>
          <p>Online Students</p>
          <div>
            <img id='man2' src={man1}/>
            <img id='man2' src={man2}/>
            <img id='man2' src={man3}/>
            <img id='man2' src={man4}/>
          </div>
          </div>
          <div id='place'>
            <div><img id='man3' src={man4}></img></div>
            <div>
          <h3>Placeholder</h3>
          <p>Placeholder text</p>
          <button id='btnjn'>Join Now</button>
          </div>
          </div>
        </div>
      </div>
      <div className='site'>
        <div className='cont'>
        <img src={duolingo}/>
        <img id='duo' src={magicleap}/>
           <img src={microsoft}/>
           <img id='code' src={codecov}/>
           <img src={usertesting}/>

        </div>
      </div>
    </div>

    <div>
      <div>
        <h1>Search Courses</h1>
      </div>
      <div>
        <input type='text' placeholder='Search for over 50+ courses'/>
        <button>Search</button>
      </div>
    </div>

    <div>
      <div>
        <div>
          <div>
          
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
