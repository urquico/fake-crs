import React from "react";
import { ActionIcon, useMantineColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function DarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <Tooltip label={dark ? "Turn On" : "Turn Off"}>
        <ActionIcon
          style={{ zIndex: "999" }}
          variant="transparent"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </Tooltip>
    </div>
  );
}

export default DarkModeButton;
