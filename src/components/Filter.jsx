import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch } from "react-redux";
import paradaApi from "../api/paradasApi";
import { useForm } from "../hooks/useForm";
import { LocationMarker } from "./LocationMarker";

export const Filter = () => {

    const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });
    const [coor, setCoor] = useState(false);

    const { formState, onInputChange } = useForm({
        linea: 0,
        sentido: 1,
        nombreParada: "",
    });

    const dispatch = useDispatch();

    const onSubmitFilterForm = (e) => {
        e.preventDefault();
        console.log(coordenadas.lat);
        paradaApi.get(`/${coordenadas.lat}/${coordenadas.lng}/?linea=${formState.linea}&sentido=${formState.sentido}&nombreParada=${formState.nombreParada}&coor=${coor}`)
            .then(response => {
                dispatch(onSetParada(response.data));
            }).catch(error => {
                console.log(error);
            })
    }

    const onResetFilter = (e) => {
        houseApi.get("/?disponible=true").then((response) => {
            dispatch(onSetHouse(response.data));
        });
    }

    return (
        <div className="bg-light h-100">
            <div className="d-flex flex-column align-items-center sticky-top">
                <h3>Filtro</h3>
                <form className="border-top pt-4 w-75" onSubmit={onSubmitFilterForm}>
                    {/* <div className="mb-3 d-flex flex-column align-items-center">
                        <label htmlFor="precioMax" className="form-label mb-3">Precio por noche maximo</label>
                        <input type="range" name="precioMax" id="precioMax" className="form-range" defaultValue={precioMax} min="0" max="500" step="1" onChange={({ target }) => setPrecioMax(target.value)} />
                        <span className="text-muted align-items-center">{`${precioMax} €`}</span>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="linea" className="form-label">Linea</label>
                        <input type="text" name="linea" id="linea" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sentido" className="form-label">Sentido</label>
                        <input type="number" name="sentido" id="sentido" className="form-control" min={1} onChange={onInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombreParada" className="form-label">Nombre de la parada</label>
                        <input type="text" name="nombreParada" id="nombreParada" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="mb-3">
                        <h5>Coordenadas</h5>
                        <MapContainer center={[36.72016, -4.420034]} zoom={12} style={{ height: 300, width: "100%" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker onChange={setCoordenadas} />
                        </MapContainer>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="dispo" checked={coor}
                                onChange={(e) => setCoor(!coor)} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Filtrar por coordenadas</label>
                        </div>
                    </div>
                    {/* <div className="mb-4 d-flex flex-column align-items-center">
                        <label htmlFor="rangoDistancia" className="form-label">Rango de km</label>
                        <input type="range" name="rangoDistancia" id="rangoDistancia" className="form-range" defaultValue="0" min="0" max="100" step="5" onChange={({ target }) => setDistancia(target.value)} />
                        <span className="text-muted">{`${distancia} km`}</span>
                    </div> */}
                    <div className="mb-4">
                        <input type="submit" className="btn btn-primary w-100" value="Filtrar" />
                    </div>
                </form>
                <div>
                    <button className="btn btn-secondary" onClick={onResetFilter}>
                        Mostrar todo
                    </button>
                </div>
                <br/>
            </div>

        </div>
    )
}
