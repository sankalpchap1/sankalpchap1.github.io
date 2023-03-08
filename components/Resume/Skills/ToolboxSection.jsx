import { ToolboxIcon } from "../../Socials/icons";
import React from "react";
import DevIcon from "./DevIcon";
import { devIcons } from "./dev-icons";
import Box from "@mui/material/Box";
import Item from "@mui/material/ListItem";

const TechSection = () => {
  return (
    <section className="py-24">
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <ToolboxIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Toolbox</h4>
      </span>
      <Box sx={{ flexGrow: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {devIcons.map((icon) => (
            <Box gridColumn="span 3">
              <Item>
                <DevIcon
                  name={icon.name}
                  iconName={icon.iconName}
                  key={icon.name}
                />
              </Item>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default TechSection;
