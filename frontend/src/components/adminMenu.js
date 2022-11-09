import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

function AdminMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <div>
           {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" elevation={0} style={{ background: '#fff', borderBottom: '#388e3c 3px solid', color: '#388e3c' }}>
              <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: "10px" }}>
              BINARY CODERS
            </Typography>
            <Button color="inherit" >FILTER</Button>
                  <Button color="inherit">LOGOUT</Button>
              </Toolbar>
              </AppBar> */}
              
          <Typography variant="h5" sx={{marginLeft:"40px"}}>ADMIN ROLES</Typography>
          <Divider />
          <List>
          <ListItemButton>
       <ListItemIcon>
         <MarkChatReadIcon />
       </ListItemIcon>
      <Link to="../ApproveScreen" style={{textDecoration:'none',color:'black'}}> <ListItemText primary="Approve workers request" /></Link>
     </ListItemButton>
       <ListItemButton>
       <ListItemIcon>
         <AssignmentIcon />
                  </ListItemIcon>
                  <Link to="../AssignPending" style={{textDecoration:"none",color:'black'}}>
       <ListItemText primary="Assign pending complaints" /></Link>
     </ListItemButton>
     <ListItemButton>
       <ListItemIcon>
         <UpdateIcon/>
       </ListItemIcon>
       <ListItemText primary="Update Anouncements" />
       </ListItemButton>
       <ListItemButton>
       <ListItemIcon>
         <DeleteIcon/>
       </ListItemIcon>
       <ListItemText primary="Delete Anouncements" />
       </ListItemButton>
       <ListItemButton>
       <ListItemIcon>
         <UpdateIcon/>
       </ListItemIcon>
       <ListItemText primary="Update Worker Info" />
       </ListItemButton>
       <ListItemButton>
       <ListItemIcon>
         <DeleteIcon/>
       </ListItemIcon>
       <ListItemText primary="Delete worker" />
              </ListItemButton>
              </List>
              {/* </Box> */}
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#fff",
            borderBottom: '#388e3c 3px solid', color: '#388e3c'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" flexGrow={1}>
             Binary Coders
                   </Typography>
                  <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar> 
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}

AdminMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminMenu;
