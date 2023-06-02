import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useAppDispatch } from '@store/store.ts';
import { errorOptions } from '@/others/toastThemes.ts';
import { addNewOrder } from '@/store/actions';
import { ControlBarProps } from '@/interfaces';

export function ControlBar({
  activeStep, setActiveStep, prevLabel, nextLabel, filters,
}: ControlBarProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const next = () => {
    setActiveStep(activeStep + 1);
  };

  const prev = () => {
    setActiveStep(activeStep - 1);
  };

  const onCreateOrderBtnClick = () => {
    const orderHour = new Date(filters.dateAndTime!).getHours();
    const currentHour = new Date().getHours();
    if (orderHour <= currentHour) {
      // @ts-ignore
      toast.info('Вы не можете заказать на данное время', errorOptions);
    } else {
      dispatch(addNewOrder(filters));
      navigate('/profile');
    }
  };

  return (
    <>
      <Button
        onClick={prev}
        disabled={activeStep === 1}
        sx={{
          color: 'black',
        }}
      >
        {prevLabel}
      </Button>
      <Button
        onClick={activeStep === 3 ? onCreateOrderBtnClick : next}
        sx={{
          color: 'black',
        }}
      >
        {nextLabel}
      </Button>
    </>
  );
}
