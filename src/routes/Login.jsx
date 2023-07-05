import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useMantineTheme,
  Text,
  Paper,
  Overlay,
  TextInput,
  PasswordInput,
  Button,
  Anchor,
  Notification,
} from "@mantine/core";
import { IconUser, IconLock } from "@tabler/icons-react";

import DarkModeButton from "../layouts/DarkModeButton";
import DateDisplay from "../layouts/DateDisplay";

function Login() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("sn", "test");
    navigate("/home");
  };

  return (
    <div className="landing-BG">
      <DarkModeButton />
      <Overlay
        gradient={
          theme.colorScheme === "dark"
            ? "linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(145deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)"
        }
        opacity={0.85}
        blur={5}
      />
      <Notification
        color="yellow"
        withCloseButton={false}
        title="Hello Haribon!"
        className="notification-login"
        withBorder
      >
        You have reached the{" "}
        <Anchor fw="bold" color="yellow">
          Fake
        </Anchor>{" "}
        CRS Website of the Pamantasan ng Lungsod ng Maynila, Intramuros, Manila.
      </Notification>

      <div className="paper-container">
        <Paper shadow="xl" radius="md" p="xl" withBorder className="paper-login">
          <Text ta="center" fz="xl" fw="bold">
            Student Login
          </Text>
          <div>
            <TextInput
              label="Student Number"
              placeholder="2020XXXXX"
              icon={<IconUser size="1rem" />}
              withAsterisk
              error={false}
            />
            <PasswordInput
              placeholder="*********"
              label="Password"
              icon={<IconLock size="1rem" />}
              withAsterisk
              error={false}
            />
          </div>
          <Button fullWidth color="yellow" onClick={login}>
            Login
          </Button>
          <Text c="dimmed" ta="center" fz="xs">
            <DateDisplay />
          </Text>
          <Text ta="center" c="dimmed">
            For more inquiries or concerns, please email{" "}
            <Anchor fw="bold" color="yellow" fz="sm">
              testlangidol@gmail.com
            </Anchor>
          </Text>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
7;
