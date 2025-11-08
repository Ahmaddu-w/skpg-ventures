import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Buttons = (prop) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/request')
  }
  const [isHovered, setIHovered] = useState(false);

  const butt = {
    backgroundColor: isHovered ? "#d9d9d93d" : "#181A88",
    minWidth: 310,
    color: isHovered ? "#181A88" : "white",
    paddingTop: 18,
    paddingBottom: 18,
    border: "none",
    fontSize: 14,
    fontWeight: 700,
  };
  return (
    <Button
      style={butt}
      onClick={handleNavigate}
      onMouseEnter={() => setIHovered(true)}
      onMouseLeave={() => setIHovered(false)}
    >
      {prop.text}
    </Button>
  );
};

export default Buttons;
