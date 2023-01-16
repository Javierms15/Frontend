import { Link, NavLink, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAllBcw48DrBBr7FbV6HUC7aE11DrA-54",
    authDomain: "ingwebpython.firebaseapp.com",
    projectId: "ingwebpython",
    storageBucket: "ingwebpython.appspot.com",
    messagingSenderId: "806246359168",
    appId: "1:806246359168:web:a08ca0aee736e8bf974665"
  };

const app = initializeApp(firebaseConfig);


export const Navbar = () => {

    let loggedIn;
    let notLoggedIn;

    const navigate = useNavigate();

    if (sessionStorage.getItem("user") !== null) {
        loggedIn = 'inline';
        notLoggedIn = 'none';
    } else {
        loggedIn = 'none';
        notLoggedIn = 'inline';
    }

    const onLogout = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            sessionStorage.clear();
            navigate("/");
            location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    EMTInfo
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to={'/'}>Inicio</NavLink>
                        <Link className="nav-link" style= {{display: loggedIn}} to="/" onClick={onLogout}>Cerrar Sesión</Link>
                        <NavLink className="nav-link" style= {{display: notLoggedIn}} to="/login">Iniciar Sesión</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
