import Head from "next/head";
import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (username === "yourUsername" && password === "yourPassword") {
      // Successful login logic (redirect, set authentication state, etc.)
      console.log("Login successful");
    } else {
      // Display error message for incorrect credentials
      setError("User not found. Please check your username and password.");
    }
  };

  return (
    <>
      <Head>
        <title>login</title>
      </Head>

      <div className="mx-auto max-w-4xl justify-center mt-5 items-center">
        <div className="py-4 px-4 border">
          <h1 className="flex items-center gap-2">CompSys Cloud Login </h1>
          <p>All your technology in one place.</p>
          <form className="gap-2 mt-10 flex flex-col">
            <input
              type="text"
              placeholder="Client ID"
              className="border py-2 px-2"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="UserName"
              className="border py-2 px-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border py-2 px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="py-2 px-2 bg-blue-500 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
