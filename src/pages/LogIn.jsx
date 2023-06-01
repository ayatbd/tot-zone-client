import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const LogIn = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const { signIn } = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

  const handleLoginWithPopUp = () =>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setUser(loggedUser)
    })
    .catch(error=>{
      console.log("error", error.message)
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center font-bold">Login Now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="mt-5 flex gap-4 items-center">
              <h4>Instead Login with</h4>
              <Link onClick={handleLoginWithPopUp} className="bg-blue-300 p-2 rounded-full"><FaGoogle /></Link>
            </div>
            
            <p className="mt-5">New here? <Link className="text-orange-600 underline underline-offset-4 font-bold" to="/register">Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
