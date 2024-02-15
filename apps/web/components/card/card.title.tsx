import { Typography } from "..";

interface CardTitlePropd {
  children: string;
}

export function CardTitle({ children }: CardTitlePropd) {
  return (
    <Typography variant="h2" color="primary" className="text-center">
      {children}
    </Typography>
  );
}
