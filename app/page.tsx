import  "./styles.css";
import { Box, Container } from "@mui/material";
import { FixedLine } from "./components/FixedLine/FixedLine";
import { ChangingText } from "./components/ChangingText/ChangingText";
import { ButtonRegisterPurple } from "./components/ButtonPurple/ButtonPurple";
import { SlashDividedText } from "./components/SlashDividedText/SlashDividedText";

export default function Home() {
  return (
      <>
        <main>
          <Box>
            <Container className="container-flex-row-centered">
              <SlashDividedText beforeSlash={"Онлайн-конференція"} afterSlash={"30 квітня о 10:00"} />
              <ChangingText />
              <ButtonRegisterPurple text={"Зареєструватися"} clickEventFunction={null} />
            </Container>
            <Container>
              
            </Container>
            <FixedLine />
          </Box>
        </main>
      </>
  );
}
