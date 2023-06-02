import { Box, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { ControlBar } from '@components/ControlBar.tsx';
import { AddNewOrderPayload } from '@store/reducers/types';
import { successOptions } from '@/others/toastThemes.ts';
import { MixedSeats, SeatType } from '@/interfaces';

interface ThirdStepProps {
  seatsArray: MixedSeats[][];
  seatPressed: string[];
  setSeatPressed: (value: any) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
  filters: AddNewOrderPayload;
}

export function ThirdStep({
  seatsArray,
  seatPressed,
  setSeatPressed,
  activeStep,
  setActiveStep,
  filters,
}: ThirdStepProps) {
  const onSeatClick = (id: string, type: SeatType) => () => {
    if (type === SeatType.RESERVED) {
      // @ts-ignore
      toast.info('Это место уже занято', successOptions);
    }
    setSeatPressed((prev: any[]) => (
      (prev.includes(id) ? prev.filter((el) => el !== id) : prev.concat(id))
    ));
  };

  return (
    <>
      <Box sx={{
        width: '1280px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
      >
        {seatsArray.map((table, i) => (
          <Box key={i}>
            <Box>
              №
              {i + 1}
            </Box>
            <Box sx={{
              margin: '35px 45px',
              width: 'max-content',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              {table.map((seat, index) => (
                <Button
                  onClick={onSeatClick(seat.id, seat.el)}
                  key={seat.id}
                  sx={{
                    marginTop: '5px',
                    width: '50px',
                    height: '100px',
                    border: '1px solid gray',
                    // eslint-disable-next-line no-nested-ternary
                    backgroundColor: seatPressed.includes(seat.id)
                      ? '#45d762'
                      : seat.el === SeatType.RESERVED
                        ? '#cee3d2'
                        : 'inherit',
                  }}
                >
                  {
                            seat.el === SeatType.RESERVED
                              ? <Typography>Занят</Typography>
                              : index + 1
                          }
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{
        width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center',
      }}
      >
        <Box sx={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
          <ControlBar
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            prevLabel='Назад'
            nextLabel='Забронировать'
            filters={filters}
          />
        </Box>
      </Box>
    </>
  );
}
