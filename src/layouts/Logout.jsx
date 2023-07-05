import React from "react";

import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Button color="red" compact onClick={logout}>
      Logout
    </Button>
  );
}

export default Logout;
