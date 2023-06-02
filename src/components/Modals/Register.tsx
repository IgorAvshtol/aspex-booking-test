import { useState } from 'react';
import {
  Button, InputAdornment, TextField, Box, Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { User } from '@store/reducers/types';
import styles from '@styles/styles.module.css';
import { errorOptions } from '@/others/toastThemes.ts';
import { registerSchema } from '@/others/validationSchema';
import {
  addNewUser, setCurrentUser, setIsLoggedUser, setModal,
} from '@/store/actions';

export function Register() {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // @ts-ignore
  const allUsers = useAppSelector((state) => state.user.allUsers);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: '',
    },
    onSubmit: (values) => {
      const currentUser = allUsers.find((user: User) => user.email === values.email);
      if (currentUser) {
        // @ts-ignore
        toast.error('Пользователь существует!', errorOptions);
      }
      if (!currentUser) {
        dispatch(
          addNewUser({
            email: values.email.trim(),
            password: values.password.trim(),
            phone: values.phone.trim(),
            id: Date.now().toString(),
          }),
        );
        dispatch(setCurrentUser({
          currentUser: {
            email: values.email.trim(),
            password: values.password.trim(),
            phone: values.phone.trim(),
            id: Date.now().toString(),
          },
        }));
        dispatch(setIsLoggedUser({ isLogged: true }));
        // @ts-ignore
        dispatch(setModal({ modal: null }));
      }
    },
    validationSchema: registerSchema,
  });

  const onCancelBtnClick = () => {
    dispatch(setModal({ modal: null }));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography fontSize='1.5em'>Регистрация</Typography>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          name='email'
          label='Почта'
          style={{ marginTop: 30 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          name='password'
          label='Пароль'
          style={{ marginTop: 30 }}
          value={formik.values.password}
          type={isVisible ? 'text' : 'password'}
          onChange={formik.handleChange}
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          name='phone'
          label='Телефон'
          placeholder='+375336880281'
          style={{ marginTop: 30 }}
          value={formik.values.phone}
          type='phone'
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='contained' onClick={onCancelBtnClick} color='error'>
            Отмена
          </Button>
          <Button type='submit' variant='contained'>
            Зарегистрироваться
          </Button>
        </Box>
      </form>
    </Box>
  );
}
