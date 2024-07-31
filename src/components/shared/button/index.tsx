import React from "react";
import { text } from "stream/consumers";

export default function Button() {
  return (
    <>
      <button
        type="button"
        className="w-40 h-10 bg-[#0d47a1] rounded-md justify-center items-center flex text-white font-semibold"
        //onClick={onClick}
      >
        Contact
      </button>
    </>
  );
}
