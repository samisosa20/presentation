import { Typography } from "..";

interface CardDatePropd {
  children: string;
}

export function CardDate({ children }: CardDatePropd) {
  return (
    <Typography variant="body2" color="accent">
      {children}
    </Typography>
  );
}
