import {
  Box, Step, StepLabel, Stepper,
} from '@mui/material';
import { ProgressStepsProps } from '@/interfaces';

const steps = [
  {
    label: 'Дата',
    step: 1,
  },
  {
    label: 'Время',
    step: 2,
  },
  {
    label: 'Место',
    step: 3,
  },
];

export function Progress({ activeStep }: ProgressStepsProps) {
  return (
    <Box sx={{ width: '100%' }}>
      {/* eslint-disable-next-line no-nested-ternary */}
      <Stepper activeStep={activeStep === 2 ? 1 : activeStep === 3 ? 2 : 0} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.step}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
