import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export default function MyAppBar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setShowDrawer(false)}
      onKeyDown={() => setShowDrawer(false)}
    >
      <List>
        <ListItem button key="About Us">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iShare
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
}
