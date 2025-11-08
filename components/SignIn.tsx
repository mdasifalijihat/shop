import { SignInButton } from "@clerk/nextjs";
import React from "react";

function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover: text-lightColor hover:cursor-pointer hoverEffect">
        LogIn
      </button>
    </SignInButton>
  );
}

export default SignIn;
