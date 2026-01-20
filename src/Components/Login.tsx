import { checkValidData } from "../Utils/validate";
import Header from "./Header";
import { use, useRef, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (!email.current || !password.current) return;

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current ? name.current.value : "User",
            photoURL:
              "https://media.licdn.com/dms/image/v2/D4E03AQENcNk1ycifXQ/profile-displayphoto-shrink_200_200/B4EZRaqdPVG0AY-/0/1736687867344?e=1770249600&v=beta&t=0cEGHeL3aazTlZw1nyeuYbrUYKkB-mss4qk9pQJIqo8",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("Signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // sign-in logic will go here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />

      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_medium.jpg"
          alt="Background"
          className="w-full h-screen object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black bg-opacity-70 p-8 rounded-md"
      >
        <h1 className="text-white text-3xl mb-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mb-6 w-96 rounded-md text-black bg-gray-500"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-96 rounded-md text-black bg-gray-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mb-6 w-96 rounded-md text-black bg-gray-500"
        />

        {errorMessage && (
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        )}

        <button
          type="button"
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300 cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white mt-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
