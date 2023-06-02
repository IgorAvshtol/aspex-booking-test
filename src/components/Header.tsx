import { useLocation } from 'react-router-dom';
import {
  Button, Avatar, Box, Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { Login } from '@components/Modals/Login';
import { ModalContainer } from '@components/Modals/ModalContainer.tsx';
import { Logout } from '@components/Modals/Logout';
import { Register } from '@components/Modals/Register';
import { Menu } from '@components/Menu';
import { getPathName } from '@utils/getPathName';
import { setModal } from '@/store/actions';

export function Header() {
  const dispatch = useAppDispatch();

  const modal = useAppSelector((state) => state.modal.modal);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  // @ts-ignore
  const currentUser = useAppSelector((state) => state.user.currentUser);
  // @ts-ignore
  const { currentRestaurant } = useAppSelector((state) => state.user.currentRestaurant);

  const onLoginBtnClick = () => {
    dispatch(setModal({ modal: 'login' }));
  };

  const onLogOutBtnClick = () => {
    dispatch(setModal({ modal: 'logout' }));
  };

  const onRegisterBtnClick = () => {
    dispatch(setModal({ modal: 'register' }));
  };

  const location = useLocation();

  return (
    <Box sx={{
      width: '90%',
      padding: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Box sx={{ display: 'flex' }}>
        <Menu />
        <Typography variant='h6' pl='32px'>
          {!getPathName(location.pathname) && ''}
          {getPathName(location.pathname) === 'profile' && 'Мои заказы'}
          {getPathName(location.pathname) === 'booking' && currentRestaurant}
        </Typography>
      </Box>
      {isLogged ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' pr='20px'>{currentUser.email}</Typography>
          <Avatar onClick={onLogOutBtnClick} sx={{ cursor: 'pointer' }} />
        </Box>
      ) : (
        <Box sx={{ width: '15%', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='outlined' onClick={onLoginBtnClick}>
            Войти
          </Button>
          <Button
            variant='contained'
            onClick={onRegisterBtnClick}
          >
            Регистрация
          </Button>
        </Box>
      )}
      <ModalContainer open={modal === 'login'}>
        <Login />
      </ModalContainer>
      <ModalContainer open={modal === 'logout'}>
        <Logout />
      </ModalContainer>
      <ModalContainer open={modal === 'register'}>
        <Register />
      </ModalContainer>
    </Box>
  );
}
