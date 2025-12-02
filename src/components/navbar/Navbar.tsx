
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/fireStoreconfig";
import Logoutmodals from "../modals/logoutmodals";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [islogout,setIslogout] = useState(false)

  const handleLogout = async () => {
    try {
        setIslogout(true)
        await signOut(auth);
        navigate("/");
      }
     catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white px-5 flex justify-between">
      <h1 className="text-xl font-bold">Urban Club</h1>
      <div className="flex gap-4 align-center justify-center">
        <Link to="/home" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>
        <button onClick={()=>setIslogout(true)} className="hover:text-yellow-400">
          Logout
        </button>
      </div>
      <Logoutmodals
      visible={islogout}
      onClose={()=>setIslogout(false)}
      onConfirm={handleLogout}
      />
    </nav>
  );
}

export default Navbar;
