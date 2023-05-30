import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignUp />
      </div>
      <h2>Picture</h2>
    </div>
  );
};

export default LoginPage;
