import { Typography } from "..";

interface CardCompanyPropd {
  children: string;
}

export function CardCompany({ children }: CardCompanyPropd) {
  return (
    <Typography variant="h4" className="text-primary-200">{children}</Typography>
  );
}
