import { Typography, Box } from '@mui/material';
import { Orders } from '@components/Orders.tsx';
import { MainLayout } from '@components/MainLayout';
import { useAppSelector } from '@store/store.ts';

export function Profile() {
  // @ts-ignore
  const orders = useAppSelector((state) => state.user.orders);
  // @ts-ignore
  const { email } = useAppSelector((state) => state.user.currentUser);
  console.log(email);
  return (
    <MainLayout>
      <Box sx={{
        marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        {!orders.length || !email ? (
          <Typography variant='h4'>У вас нету забранированых мест</Typography>
        ) : (
          <>
            <Typography variant='h4'>Забронированные столы</Typography>
            <Orders orders={orders} />
          </>
        )}
      </Box>
    </MainLayout>
  );
}
