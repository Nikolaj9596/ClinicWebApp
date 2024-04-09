
export const calculateAge = (date: string): number => {
  const diff = Date.now() - new Date(date).getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
