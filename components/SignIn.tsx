import { SignInButton } from "@clerk/nextjs";
import React from "react";

function SignIn() {
  return (
    <SignInButton>
      <button className="text-sm font-semibold hover: text-lightColor hover:cursor-pointer hoverEffect">
        SignIn
      </button>
    </SignInButton>
  );
}

export default SignIn;
