import { Typography } from "..";

interface CardDescriptionPropd {
  children: string;
}

export function CardDescription({ children }: CardDescriptionPropd) {
  return (
    <Typography variant="h5" className="text-justify">{children}</Typography>
  );
}
