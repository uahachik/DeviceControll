const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const HumanReadableDate = ({ timestamp }: { timestamp: string | Date | undefined; }) => {
  const date = new Date(String(timestamp));
  return <span>{date.toLocaleString(undefined, options)}</span>;
};

export default HumanReadableDate;