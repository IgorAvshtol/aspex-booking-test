import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button, InputAdornment, TextField, Box, Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { User } from '@store/reducers/types';
import styles from '@styles/styles.module.css';
import { errorOptions } from '@/others/toastThemes.ts';
import { loginSchema } from '@/others/validationSchema';
import { setCurrentUser, setIsLoggedUser, setModal } from '@/store/actions';

export function Login() {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // @ts-ignore
  const allUsers = useAppSelector((state) => state.user.allUsers);

  const onCancelBtnClick = () => {
    dispatch(setModal({ modal: null }));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const currentUser = allUsers.find((user: User) => user.email === values.email);

      if (!currentUser) {
        // @ts-ignore
        toast.info('Пользователь не найден', errorOptions);
        return;
      }
      if (currentUser && currentUser.password === values.password) {
        dispatch(setIsLoggedUser({ isLogged: true }));
        dispatch(setCurrentUser({ currentUser }));
        dispatch(setModal({ modal: null }));
        return;
      }
      // @ts-ignore
      toast.error('Проверьте введённые данные!', errorOptions);
    },
    validationSchema: loginSchema,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography fontSize='1.5em'>Войти</Typography>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          name='email'
          label='Почта'
          value={formik.values.email}
          onChange={formik.handleChange}
          style={{ marginTop: 20 }}
          helperText={formik.errors.email}
        />
        <TextField
          name='password'
          label='Пароль'
          value={formik.values.password}
          type={isVisible ? 'text' : 'password'}
          onChange={formik.handleChange}
          style={{ marginTop: 20 }}
          helperText={formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {isVisible ? (
                  <Visibility onClick={toggleVisibility} />
                ) : (
                  <VisibilityOff onClick={toggleVisibility} />
                )}
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='contained' onClick={onCancelBtnClick} color='error'>
            Отмена
          </Button>
          <Button type='submit' variant='contained'>
            Войти
          </Button>
        </Box>
      </form>
    </Box>
  );
}
