import { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Progress } from '@components/Progress.tsx';
import { MainLayout } from '@components/MainLayout';
import { seat, SeatType } from '@interfaces/index.ts';
import { useAppSelector } from '@store/store.ts';
import { reservedSeatsMixer } from '@utils/reservedSeatsMixer.ts';
import { FirstStep } from '@components/BookingSteps/FirstStep.tsx';
import { SecondStep } from '@components/BookingSteps/SecondStep.tsx';
import { ThirdStep } from '@components/BookingSteps/ThirdStep.tsx';
import { tables } from '@/data/tables.ts';

const sortTables = tables.map((table) => new Array(table.capacity).fill(seat).map((_, i) => ({
  el: SeatType.AVAILABLE,
  id: (table.id + i).toString(),
})));

export function Booking() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [seatPressed, setSeatPressed] = useState<string[]>([]);

  const isLoggedIn = useAppSelector((state) => state.auth.isLogged);
  // @ts-ignore
  const currentRestaurant = useAppSelector((state) => state.user.currentRestaurant);

  const orderData = {
    id: Date.now().toString(),
    quests: seatPressed.length,
    tableNumber: seatPressed,
    dateAndTime: startDate?.toString(),
  };

  const seatsArray = useMemo(() => reservedSeatsMixer(sortTables), [sortTables]);

  return (
    <MainLayout>
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2em',
      }}
      >
        {!isLoggedIn || !currentRestaurant ? (
          <Typography variant='h4' mb='30px'>
            Войдите, чтобы заказать место
          </Typography>
        ) : (
          <>
            <Progress activeStep={activeStep} setActiveStep={setActiveStep} />
            <Box sx={{
              marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
            }}
            >
              {
                      activeStep === 1
                      && (
                      <FirstStep
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        filters={orderData}
                      />
                      )
                  }
              {
                      activeStep === 2
                      && (
                      <SecondStep
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        filters={orderData}
                      />
                      )
                  }
              {activeStep === 3
                      && (
                      <ThirdStep
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        seatPressed={seatPressed}
                        setSeatPressed={setSeatPressed}
                        seatsArray={seatsArray}
                        filters={orderData}
                      />
                      )}
            </Box>
          </>
        )}
      </Box>
    </MainLayout>
  );
}
