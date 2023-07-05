import React from "react";
import DarkModeButton from "../layouts/DarkModeButton";
import DateDisplay from "../layouts/DateDisplay";
import Logout from "../layouts/Logout";
import { Text, Overlay, useMantineTheme } from "@mantine/core";

function Home() {
  const theme = useMantineTheme();

  return (
    <div className="home-container">
      <Overlay
        gradient={
          theme.colorScheme === "dark"
            ? "linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(145deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)"
        }
        opacity={0.85}
        blur={5}
      />
      <div className="topNav-home">
        <DarkModeButton />
        <div className="date-container">
          <Text style={{ marginRight: "3rem", marginTop: "1rem" }} fw="bold" fz="sm" c="white">
            Logged in as Student no. 202013283
          </Text>
          <Text fz="xs" style={{ marginRight: "3rem" }} c="yellow">
            <DateDisplay />
          </Text>
          <div style={{ marginRight: "3rem", marginTop: "0.500rem" }}>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
