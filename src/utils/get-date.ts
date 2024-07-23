import { MONTHS } from '../const';
export const getDate = (date: string): string => {
  const splitDate: string = date.split('T')[0];
  const dateComm = new Date(splitDate);
  return `${MONTHS[dateComm.getMonth()]} ${dateComm.getFullYear()}`;
};
