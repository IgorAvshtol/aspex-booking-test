import { Box, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { format, utcToZonedTime } from 'date-fns-tz';
import { differenceInMilliseconds } from 'date-fns';
import { useAppDispatch } from '@store/store.ts';
import { errorOptions, successOptions } from '@/others/toastThemes.ts';
import { removeOrder } from '@/store/actions';
import { SliderProps } from '@/interfaces';

export function Orders({ orders }: SliderProps) {
  const dispatch = useAppDispatch();

  const onCancelOrderPress = (id: string, time: string) => () => {
    const timeNow = new Date();
    const bookingTime = new Date(time);

    const timeDifference = differenceInMilliseconds(bookingTime, timeNow);

    if (timeDifference / (1000 * 60) >= 60) {
      dispatch(removeOrder({ id }));
      // @ts-ignore
      toast.info('Заказ удалён', successOptions);
      return;
    }
    // @ts-ignore
    toast.info('Вы не можете отменить', errorOptions);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ marginTop: '20px', display: 'flex' }}>
        {orders.map(({
          quests, dateAndTime, id, tableNumber,
        }) => (
          <Box
            sx={{
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              border: '1px solid gray',
              textAlign: 'center',
            }}
            key={id}
          >
            <Box>
              {format(utcToZonedTime(new Date(dateAndTime), 'Europe/Moscow'), 'dd.MM.yyyy HH:mm')}
            </Box>
            <Box>
              стол №
              {' '}
              {tableNumber.map((number) => <Typography key={number}>{number.slice(0, -1)}</Typography>)}
            </Box>
            <Box>
              мест -
              <Typography>{quests}</Typography>
            </Box>
            <Box sx={{
              width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center',
            }}
            >
              <Button
                variant='contained'
                onClick={onCancelOrderPress(id, dateAndTime)}
                sx={{ backgroundColor: 'red' }}
              >
                Отменить заказ
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
