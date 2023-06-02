import { ReactNode } from 'react';
import { AddNewOrderPayload, Order } from '@store/reducers/types';

export interface Seat {
  id: string;
  type: SeatType;
}

export enum SeatType {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
}

export interface MixedSeats {
  el: SeatType;
  id: string;
}

export const seat: Seat = { id: '', type: SeatType.AVAILABLE };

export interface CustomDatePickerProps {
  startDate: Date | null;
  setStartDate: (value: Date | null) => void;
  isTime: boolean;
}

export interface ProgressStepsProps {
  activeStep: number;
  setActiveStep: (value: number) => void;
}

export interface SliderProps {
  orders: Order[];
}

export interface ControlBarProps {
  activeStep: number;
  setActiveStep: (value: number) => void;
  prevLabel: string;
  nextLabel: string;
  filters: AddNewOrderPayload;
}

export interface CustomModalProps {
  open: boolean;
  children: ReactNode;
}

export interface Restaurant {
  id: string;
  title: string;
  img: string;
  alt: string;
}
