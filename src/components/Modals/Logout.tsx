import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useAppDispatch } from '@store/store.ts';
import { User } from '@store/reducers/types';
import {
  addCurrentRestaurant, setCurrentUser, setIsLoggedUser, setModal,
} from '@/store/actions';

export function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onCloseModalPress = () => {
    dispatch(setModal({ modal: null }));
  };

  const logout = () => {
    dispatch(setIsLoggedUser({ isLogged: false }));
    dispatch(setCurrentUser({
      currentUser: {} as User,
    }));
    dispatch(addCurrentRestaurant({ currentRestaurant: '', image: '' }));
    dispatch(setModal({ modal: null }));
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography fontSize='1.5em'>Хотите выйти?</Typography>
      <Box sx={{
        marginTop: '10px', width: '100%', display: 'flex', justifyContent: 'space-between',
      }}
      >
        <Button
          variant='contained'
          onClick={logout}
          size='small'
        >
          Выйти
        </Button>
        <Button variant='contained' onClick={onCloseModalPress} size='small' color='error'>
          Отмена
        </Button>
      </Box>
    </Box>
  );
}
