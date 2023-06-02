import * as Yup from 'yup';

export const phoneRegExp = /^(\+\d{1,4})?[-\s]?(\(\d{1,3}\)[-.\s]?)?(\d{2,4}[-.\s]?){1,2}\d{3,4}$/;

export const registerSchema = Yup.object().shape({
  email: Yup.string().email('Неверная адрес').required(),
  password: Yup.string().min(3, 'Пароль слишком короткий').max(50, 'Слишком длинный пароль').required(),
  phone: Yup.string().matches(phoneRegExp, 'Неверный номер').min(7).required(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Неверная адрес').required(),
  password: Yup.string().min(3, 'Пароль слишком короткий').max(50, 'Слишком длинный пароль').required(),
});
