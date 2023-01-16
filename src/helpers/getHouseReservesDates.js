import bookApi from "../api/bookingsApi";


export const getHouseReservesDates = (house, activeBook) => {
    const { reservas } = house;

    const excludeDates = [];

    reservas.forEach(reserva => {
        if (reserva !== activeBook.id) {
            bookApi.get(`/${reserva}`).then(response => {
                excludeDates.push({
                    start: new Date(response.data.inicio_estancia * 1000),
                    end: new Date(response.data.fin_estancia * 1000)
                });
            }).catch(error => {
                console.log(error);
            })
        }
    });

    return excludeDates;
}