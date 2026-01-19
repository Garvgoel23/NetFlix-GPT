import Header from "./Header";

const Login = () => {
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
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-md">
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-96 rounded-md text-black "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-6 w-96 rounded-md text-black"
        />
        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
