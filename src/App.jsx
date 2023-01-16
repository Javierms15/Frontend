import "react-datepicker/dist/react-datepicker.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage } from './pages';

export const App = () => {
  return (
    <Routes>

      {sessionStorage.getItem("user") !== null ? (
        <>
          <Route path='/' element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />

          {/* <Route path='/paradas' element={<ParadasPage />} /> */}

          <Route path='/*' element={<Navigate to="/" />} />
        </>
      ) : (

        <>
          <Route path='/' element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/*' element={<Navigate to="/login" />} />
        </>
      )}
    </Routes> 
  )
}
