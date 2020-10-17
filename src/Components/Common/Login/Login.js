import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from "./firebaseConfig";
import { UserContext } from '../../../App';
import logo from './../../../assets/images/logos/logo.png'
import google from './../../../assets/images/logos/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    var GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase
          .auth()
          .signInWithPopup(GoogleProvider)
          .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            storeAuthToken()
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    return (
      <div>
      <div className='mt-5'>
          <Link to='/'><img  style={{height:'50px'}} src={logo} alt=""/></Link>
      </div>
      <div className='login mt-4' >
          <h3 className='text-center'>
              Login with
          </h3>
          <div onClick={signInWithGoogle} className='google-btn'>
              <img style={{height:'30px', width:'60px'}} src={google} alt=""/>
              <p className='ml-5'>Login with Google</p>
          </div>
          <p className='mt-2' >Don't have and accout?
           <span onClick={signInWithGoogle} className='text-primary pointer' >create an account</span>
          </p>
      </div>
  </div>
    );
};

export default Login;