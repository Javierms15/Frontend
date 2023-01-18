import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from '../components'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAllBcw48DrBBr7FbV6HUC7aE11DrA-54",
    authDomain: "ingwebpython.firebaseapp.com",
    projectId: "ingwebpython",
    storageBucket: "ingwebpython.appspot.com",
    messagingSenderId: "806246359168",
    appId: "1:806246359168:web:a08ca0aee736e8bf974665"
  };

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const LoginPage = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
         event.preventDefault();
        /*sessionStorage.setItem("user", user);
        navigate("/");
        location.reload(); */
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            result.user.getIdToken(true).then((value) => {
                sessionStorage.setItem("token", value);
                navigate("/");
                location.reload();
            });
            sessionStorage.setItem("user", result.user.email)
            sessionStorage.setItem("nombre", result.user.name)
            sessionStorage.setItem("imagen", result.user.picture)
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
      };

    return (
        <div className='container-fluid' style={{height: "100vh"}}>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center bg-light" style={{height: "calc(100vh - 62px)"}}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Iniciar Sesion</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* <label htmlFor="username" className="form-label">Usuario </label>
                            <input type="text" name="username" className="form-control" onChange={(event) => {
                                setUser(event.target.value)
                            }} required /> */}
                        </div>
                        <div className="button-container">
                            <input type="submit" className="btn btn-primary" value="Iniciar Sesion" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}