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
                    ParkingNET
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to={'/'}>Inicio</NavLink>
                        <NavLink className="nav-link" aria-current="page" to={'/'} style= {{display: loggedIn}}>
                        <div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Mi Perfil
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Usuario: {[sessionStorage.getItem("user")]}</a></li>
    <li><a class="dropdown-item" href="#">Token :{[sessionStorage.getItem("token")]}</a></li>
  </ul>
</div>
                       </NavLink>
                        <Link className="nav-link" style= {{display: loggedIn}} to="/" onClick={onLogout}>Cerrar Sesi??n</Link>
                        <NavLink className="nav-link" style= {{display: notLoggedIn}} to="/login">Iniciar Sesi??n</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
