export function currentYear(): number {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}
