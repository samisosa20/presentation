"use client";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import {
  Button,
  Icons,
  Stack,
  Carrusel,
  Card,
  EducationCard,
  Cursor,
} from "@/components";

import { DictInterface } from "../[lang]/dictionaries.interface";
import Link from "next/link";
import { useLangStore, animateHome, cn } from "@/src/lib/utils";

interface HomeProps {
  dict: DictInterface;
  lang: string;
}

type Education = {
  title: string;
  school: string;
  date: string;
};

type experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export function Home({ dict, lang }: HomeProps) {
  const { setLang } = useLangStore();

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  const { typewriterRef, isEndTitleAnimation } = animateHome();

  return (
    <Stack className="gap-16 overflow-x-hidden">
      <Stack direction="column" className="min-h-screen gap-24">
        <Stack direction="row" justify="spaceBetween" align="center">
          <Stack spacing="sm">
            <Stack
              ref={typewriterRef}
              className="transform translate-x-1/2 translate-y-1/2 md:min-w-[600px]"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(dict.hero.title).pauseFor(2000).start();
                }}
                options={{
                  wrapperClassName: "title",
                  cursorClassName: "title__cursor",
                }}
              />
            </Stack>
            <Button
              className={cn(
                !isEndTitleAnimation
                  ? "invisible opacity-0"
                  : "visible opacity-100",
                "transition-all ease-in-out duration-700"
              )}
            >
              <Icons.download />
              {dict.hero.button}
            </Button>
            <Stack
              direction="row"
              spacing="lg"
              align="center"
              className={cn(
                !isEndTitleAnimation
                  ? "invisible opacity-0"
                  : "visible opacity-100",
                "transition-all ease-in-out duration-700"
              )}
            >
              <Link
                href={"https://www.linkedin.com/in/samgutlon/"}
                target="_blank"
              >
                <Icons.linkedin className="cursor-pointer" />
              </Link>
              <Link href={"https://github.com/samisosa20"} target="_blank">
                <Icons.github className="cursor-pointer" />
              </Link>
            </Stack>
          </Stack>
          <div
            className={cn(
              !isEndTitleAnimation
                ? "invisible opacity-0"
                : "visible opacity-100",
              "transition-all ease-in-out duration-1000 bg-gray-300 h-[300px] w-[300px] rounded-xl"
            )}
          ></div>
        </Stack>
        <Carrusel show={isEndTitleAnimation} />
      </Stack>
      <Stack direction="column" className="min-h-screen gap-16">
        <Card show={isEndTitleAnimation}>
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
      <Cursor/>
    </Stack>
  );
}
