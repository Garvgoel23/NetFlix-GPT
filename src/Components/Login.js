import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_medium.jpg"
          alt="Logo"
          className="w-full h-screen object-cover"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  bg-black bg-opacity-70 p-8 rounded-md">
        <h1 className="text-white text-3xl mb-4 font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mb-6 w-96 rounded-md text-black bg-gray-500 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-96 rounded-md text-black bg-gray-500 "
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-6 w-96 rounded-md text-black bg-gray-500 "
        />
        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300 cursor-pointer">
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
