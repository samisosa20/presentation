import { Typography } from "..";

interface CardSubTitlePropd {
  children: string;
}

export function CardSubTitle({ children }: CardSubTitlePropd) {
  return (
    <Typography variant="h3" color="primary">{children}</Typography>
  );
}
