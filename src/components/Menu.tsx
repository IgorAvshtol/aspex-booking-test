import { useState } from 'react';
import {
  IconButton, List, ListItem, ListItemText, Typography, Box, Menu as BasicMenu,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'Главная', link: '/' },
  { text: 'Мои заказы', link: '/profile' },
];

export function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <Box>
      <IconButton color='inherit' onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <BasicMenu
        open={open}
        onClose={toggleDrawer(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Typography variant='h5'>
            Разделы
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} component='a' href={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </BasicMenu>
    </Box>
  );
}
