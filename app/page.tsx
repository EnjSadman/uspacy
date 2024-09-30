import  "./styles.css";
import { Box, Container } from "@mui/material";
import { FixedLine } from "./components/FixedLine/FixedLine";
import { ChangingText } from "./components/ChangingText/ChangingText";
import { SlashDividedText } from "./components/SlashDividedText/SlashDividedText";
import { ScrollButton } from "./components/ScrollButton/ScrollButton";
import { AboutConference } from "./components/AboutConference/AboutConference";
import { Form } from "./components/Form/Form";

export default function Home() {
  return (
      <>
        <main className="main">
          <Box>
            <Container className="container-flex-col-centered first-screen">
              <SlashDividedText beforeSlash={"Онлайн-конференція"} afterSlash={"30 квітня о 10:00"} />
              <ChangingText />
              <ScrollButton text={"Зареєструватися"} anchor={"register"} />
              <AboutConference />
            </Container>
            <Container className="register register__container" id="register">
              <Form />
            </Container>
            <FixedLine />
          </Box>
        </main>
      </>
  );
}
