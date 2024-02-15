import { Button, Icons, Stack, Typography } from "@/components";

export default function Home() {
  return (
    <>
    <Stack direction="row" justify="spaceBetween" align="center">
      <Stack spacing="sm">
        <Typography variant="h1" component="h1">
          Hola,
          <br />
          soy <span className="text-primary-300">Sammy</span>
          <br />
          Full Stack developer
        </Typography>
        <Button><Icons.download/>Descargar CV</Button>
        <Stack direction="row" spacing="lg" align="center">
          <Icons.linkedin className="cursor-pointer"/>
          <Icons.github className="cursor-pointer"/>
        </Stack>
      </Stack>
      <div className="bg-gray-300 h-[300px] w-[300px]"></div>
    </Stack>
    <Stack>
      
    </Stack>
    </>
  );
}
