import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    // Sign-out logic here
    signOut(auth)
      .then(() => {
        dispatch(removeUser(null));
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-b from-black  flex justify-between items-center">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="size-20 w-44 ml-4 mt-4 object-contain"
      />
      <div className=" flex p-2 space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s"
          alt="Usericon"
          className="w-10 h-10 rounded cursor-pointer float-right mt-4 "
        />
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300 float-right mt-4 mr-4"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
