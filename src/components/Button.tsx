import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
