"use client";
import { createContext, useContext, useState } from "react";

// create a createContext variable

/* name your provider */ /* pass children to the provider */
export function SomethingProvider() {
  // create a stateful variable for the user
  // create a toggleUserLogin function that will set the user login state to be the opposite of whatever it currently is
  // return a Context.Provier with a value that destructs your user state and toggle button
  // wrap the children prop with th eprovider
}

// export a hook that is a function passing your context into the useContext hook
export const useUser = () => useContext(UserContext);
