import {Routes,Route,Navigate} from 'react-router-dom';
import Userregister from './User/Userregister.jsx';
import Userlogin from './User/Userlogin.jsx';
import Productshop from './Productshop.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Contact from './Contact.jsx';
import Createitem from './Createitem.jsx';
import Collection from './Collection.jsx';
import OwnerLogin from './Ownerlogin.jsx';
import Ownerregister from './Ownerregister.jsx';
import OwnerDash from './Ownerdash.jsx';

const App = () => {


  return (
    <div>

      
    
      <Routes>
          <Route path="/" element={<Navigate to="/user/register" replace />} />
        <Route path="/user/register" element={<Userregister />} />
        <Route path="/user/login" element={<Userlogin />} />
        <Route path="/products" element={<Productshop />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="createitem" element={<Createitem />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="owner/login" element={<OwnerLogin  />} />
        <Route path="/owner/register" element={<Ownerregister />} />
        <Route path="owner/dashboard" element={<OwnerDash />} />

      </Routes>


    </div>
  )
}

export default App