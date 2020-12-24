import { format, parseISO } from "date-fns";

const DateRange = ({
  startIsoDate,
  endIsoDate,
  formatString = "MMM, yyyy",
}) => {
  const startDate = startIsoDate ? parseISO(startIsoDate) : undefined;
  const endDate = endIsoDate ? parseISO(endIsoDate) : undefined;

  if (startDate && endDate) {
    return (
      <>
        <time dateTime={startIsoDate}>{format(startDate, formatString)}</time> -{" "}
        <time dateTime={endIsoDate}>{format(endDate, formatString)}</time>
      </>
    );
  }

  if (startDate && !endDate) {
    return (
      <>
        <time dateTime={startIsoDate}>{format(startDate, formatString)}</time> -{" "}
        Present
      </>
    );
  }

  if (endDate && !startDate) {
    return <time dateTime={endIsoDate}>{format(endDate, formatString)}</time>;
  }
};

export default DateRange;
