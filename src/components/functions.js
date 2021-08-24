export const dateParser = (date) =>
  `${date.toISOString().slice(0, 10)} godz. ${date
    .toISOString()
    .slice(11, 16)}`;
