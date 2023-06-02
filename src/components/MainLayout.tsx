import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from '@components/Header';
import { useAppSelector } from '@store/store.ts';
import { getPathName } from '@utils/getPathName.ts';

export function MainLayout({ children }: PropsWithChildren) {
  // @ts-ignore
  const { image } = useAppSelector((state) => state.user.currentRestaurant);
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      {children}
      {
            getPathName(location.pathname) === 'booking'
            && (
            <Box
              component='img'
              sx={{
                width: '1200px',
                height: '500px',
                objectFit: 'cover',
              }}
              src={image}
              alt='cover'
            />
            )
        }
    </Box>
  );
}
