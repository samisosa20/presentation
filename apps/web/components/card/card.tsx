import { Stack } from "..";

import { CardCompany } from "./card.company";
import { CardDate } from "./card.date";
import { CardDescription } from "./card.description";
import { CardSubTitle } from "./card.subtitle";
import { CardTitle } from "./card.title";

interface CardProps {
  children?: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <Stack className="bg-bg-200 gap-8 px-8 py-6 rounded-3xl max-w-4xl mx-auto">
        {children}
    </Stack>
  );
}

Card.displayName = "Card";
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Company = CardCompany;
Card.Date = CardDate;
Card.Description = CardDescription;