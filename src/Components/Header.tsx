import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../Utils/appStore";
import { addUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Logo, UserIcon } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store: RootState) => store.user);
  const handleSignOut = () => {
    // Sign-out logic here
    signOut(auth)
      .then(() => {
        dispatch(removeUser(null));
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-r from-black  flex justify-between items-center z-10">
      <img
        src={Logo}
        alt="Logo"
        className="size-20 w-44 ml-4 mt-4 object-contain"
      />

      {user && (
        <div className=" flex p-2 space-x-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300 float-right mt-4 "
            onClick={handleGptSearchClick}
          >
            GPT SEARCH
          </button>

          <img
            src={UserIcon}
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
      )}
    </div>
  );
};

export default Header;
