import { MixedSeats, SeatType } from '@/interfaces';

export const reservedSeatsMixer = (seats: Array<MixedSeats[]>): Array<MixedSeats[]> => {
  const mixedSeats = [...seats];

  const numOfChanges = 2; // Number of random objects to change
  let changedCount = 0; // Counter for the number of changes made

  while (changedCount < numOfChanges) {
    const randomArrayIndex = Math.floor(Math.random() * mixedSeats.length);
    const randomObjectIndex = Math.floor(Math.random() * mixedSeats[randomArrayIndex].length);

    if (mixedSeats[randomArrayIndex][randomObjectIndex].el === SeatType.AVAILABLE) {
      mixedSeats[randomArrayIndex][randomObjectIndex].el = SeatType.RESERVED;
      changedCount++;
    }
  }
  return mixedSeats;
};
