import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginInputs } from "../types";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState<LoginInputs>({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) => setInputs((prev) => ({ ...prev, username: e.target.value }))}
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">
              {loading ? "Logging..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
