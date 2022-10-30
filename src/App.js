import logo from './logo.svg';
import './App.css';
import profile from "./image/profile.jpg";
import email from "./image/email.jpg";
import pass from "./image/pass.png";

function App() {
  return (
    <div className="main">
      <div className='sub-main'>
        <div className='ex'>
          <div className='imgs'>
            {/* <div className='container-img'> */}
              <img src={profile} alt="profile" className='prof'/>
            {/* </div> */}
          </div>

          <div>
            <h1>Login Page</h1>

            <div>
              <img src={email} alt="email" className='em' />
              <input type="text" placeholder='user-name' className='name'></input>
            </div>
            <div className='ps-inp'>
              <img src={pass} alt="pass" className='ps' />
              <input type="text" placeholder='password' className='name'></input>
            </div>

            <div className='btn'>
              <button>Login</button>
            </div>

              <p className='lnks'>
                <a href="#">Forget Password ?</a> <br/>
                <a href="#">Sign Up</a>
              </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
