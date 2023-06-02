import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useAppDispatch } from '@store/store.ts';
import { MainLayout } from '@components/MainLayout';
import { restaurants } from '@/data/restaurants.ts';
import { addCurrentRestaurant } from '@/store/actions';

export function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onRestaurantPress = (title: string, imageUrl: string) => () => {
    dispatch(addCurrentRestaurant({ currentRestaurant: title, image: imageUrl }));
    navigate(`/booking/${title}`);
  };

  return (
    <MainLayout>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
      >
        <Typography variant='h4'>Выберите ресторан:</Typography>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
          {restaurants.map((restaurant) => (
            <Box
              key={restaurant.title}
              onClick={onRestaurantPress(restaurant.title, restaurant.img)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: '50px',
                cursor: 'pointer',
              }}
            >
              <Typography variant='h6'>{restaurant.title}</Typography>
              <Box
                component='img'
                sx={{
                  width: '400px', height: '300px', borderRadius: '25px', objectFit: 'cover',
                }}
                src={restaurant.img}
                alt={restaurant.alt}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
}
