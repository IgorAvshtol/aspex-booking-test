import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePickerProps } from '@/interfaces';

export function CustomDatePicker({ startDate, setStartDate, isTime }: CustomDatePickerProps) {
  return (
    <DatePicker
      popperPlacement='bottom'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showIcon
      locale={ru}
      showTimeSelect={isTime}
      minTime={isTime ? new Date(0, 0, 0, 12, 0) : undefined}
      maxTime={isTime ? new Date(0, 0, 0, 22, 0) : undefined}
      timeIntervals={60}
      timeFormat='HH:mm'
      dateFormat={isTime ? 'Pp' : undefined}
    />
  );
}
