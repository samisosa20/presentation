import {
  Button,
  Icons,
  Stack,
  Typography,
  Carrusel,
  Card,
  EducationCard,
} from "@/components";

import { DictInterface } from "../[lang]/dictionaries.interface";

interface HomeProps {
  dict: DictInterface;
}

type Education = {
  title: string;
  school: string;
  date: string;
}

type experience = {
  title: string;
  company: string;
  date: string;
  description: string;
}

export function Home({ dict }: HomeProps) {
  return (
    <Stack className="gap-16">
      <Stack direction="row" justify="spaceBetween" align="center">
        <Stack spacing="sm">
          <Typography
            variant="h1"
            component="h1"
            dangerouslySetInnerHTML={{ __html: dict.hero.title }}
          />
          <Button>
            <Icons.download />
            {dict.hero.button}
          </Button>
          <Stack direction="row" spacing="lg" align="center">
            <Icons.linkedin className="cursor-pointer" />
            <Icons.github className="cursor-pointer" />
          </Stack>
        </Stack>
        <div className="bg-gray-300 h-[300px] w-[300px]"></div>
      </Stack>
      <Carrusel />
      <Card>
        <Card.Title>{dict.aboutMe.title}</Card.Title>
        <Card.Description>{dict.aboutMe.description}</Card.Description>
      </Card>
      <Card.Title>{dict.education.title}</Card.Title>
      <Stack direction="row" spacing="xl" justify="center" wrap="wrap">
        {dict.education.list.map((education: Education, index: number) => (
          <EducationCard
            title={education.title}
            school={education.school}
            date={education.date}
            key={index}
          />
        ))}
      </Stack>
      <Card.Title>{dict.experiences.title}</Card.Title>
      {dict.experiences.list.map((experience: experience, index: number) => (
        <Card key={index}>
          <Stack>
            <Card.SubTitle>{experience.title}</Card.SubTitle>
            <Card.Company>{experience.company}</Card.Company>
            <Card.Date>{experience.date}</Card.Date>
          </Stack>
          <Card.Description>{experience.description}</Card.Description>
        </Card>
      ))}
    </Stack>
  );
}
