import { Box, Typography } from '@mui/material';
import { CustomDatePicker } from '@components/DatePicker.tsx';
import { ControlBar } from '@components/ControlBar.tsx';
import { AddNewOrderPayload } from '@store/reducers/types';

interface SecondStepProps {
  startDate: Date | null;
  setStartDate: (value: Date | null) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
  filters: AddNewOrderPayload;
}

export function SecondStep({
  startDate, setStartDate, activeStep, setActiveStep, filters,
}: SecondStepProps) {
  return (
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <Typography variant='h4'>Выберите время</Typography>
      <Box sx={{
        marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center',
      }}
      >
        <Box>
          <CustomDatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            isTime
          />
        </Box>
        <Box sx={{
          marginLeft: '100px',
          width: '200px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <ControlBar
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            prevLabel='Назад'
            nextLabel='Далее'
            filters={filters}
          />
        </Box>
      </Box>
    </Box>
  );
}
