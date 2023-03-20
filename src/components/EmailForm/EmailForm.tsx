import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { readBuilderProgram } from "typescript";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

export default function EmailForm() {
  return (
    <div>
      <input
        style={{
          // padding: "24px 16px 8px",
          width: "376px",
          height: "56px",
          background: "#4e4d4d",
          color: "white",
          borderRadius: "7px",
          boxShadow:
            " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08)0px 1px 0px inset ",
        }}
        placeholder="Email"
      />
      <label htmlFor="email"></label>

      <button
        style={{
          color: "white",
          width: "201px",
          height: "57px",
          padding: "12px 24px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "7px",
          backgroundColor: "#E50914",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        Get start {">"}
      </button>
    </div>
  );
}
