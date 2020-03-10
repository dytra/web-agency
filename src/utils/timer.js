export const addMinutes = (date,x) => {
  const now = new Date(date);
  now.setMinutes(now.getMinutes() + x);
  return new Date(now);
}
