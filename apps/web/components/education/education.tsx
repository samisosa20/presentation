import { Stack, Typography } from "..";

interface EducationProps {
  title: string;
  school: string;
  date: string;
}

export function EducationCard({ title, school, date }: EducationProps) {
  return (
    <Stack align="center">
      <Typography variant="h5" color="primary" className="font-bold">{title}</Typography>
      <Typography variant="h5">{school}</Typography>
      <Typography variant="body2" color="accent">{date}</Typography>
    </Stack>
  );
}
