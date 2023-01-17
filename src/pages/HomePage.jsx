import { Filter, Navbar } from "../components";
import { MapContainer, TileLayer,Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import L from "leaflet";


export const HomePage = () => {

    let loggedIn;
    let notLoggedIn;

    if (sessionStorage.getItem("user") !== null) {
        loggedIn = 'inline';
        notLoggedIn = 'none';
    } else {
        loggedIn = 'none';
        notLoggedIn = 'inline';
    }

    

    return (
        <div className="container-fluid h-100">
            <Navbar />
            <div className="row g-0">
                <div className="col-lg-4" style={{display: loggedIn}}>
                    <Filter />
                </div>
                <div className="col-lg-8 row justify-content-center align-content-center">
                <div className="col-lg-6 mt-4">
                <MapContainer
                  center={[36.72016, -4.420034]}
                  zoom={30}
                  style={{ height: 600, width: 500 }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[36.72016, -4.420034]}>
                    <Popup>
                      Centro. <br /> Easily customizable.
                    </Popup>
                  </Marker>

                </MapContainer>
              </div>
                </div>
            </div>
        </div>
    )
}
