import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import RoomDetail from './pages/RoomDetail';
import NewRoom from './pages/NewRoom';
import EditRoom from './pages/EditRoom';
import DeleteRoom from './pages/DeleteRoom';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import BookingSlip from './pages/BookingSlip';
import RepairNotification from './pages/RepairNotification';
import ShowRepair from './pages/ShowRepair';
import EditRepair from './pages/EdtiRepair';
import EditBooking from './pages/EdtiBooking';

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/room' element={<Room/>}/>
      <Route path='/room/new' element={<NewRoom/>}/>
      <Route path='/room/:id' element={<RoomDetail/>}/>
      <Route path='/room/edit/:id' element={<EditRoom/>}/>
      <Route path='/room/delete/:id' element={<DeleteRoom/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/bookingslip' element={<BookingSlip/>}/>
      <Route path='/repair' element={<RepairNotification/>}/>
      <Route path='/showrepair' element={<ShowRepair/>}/>
      <Route path='/repair/edit/:id' element={<EditRepair/>}/>
      <Route path='/booking/edit/:id' element={<EditBooking/>}/>
    </Routes>
  );
}

export default App;
