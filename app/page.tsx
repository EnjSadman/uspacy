import styles from "./page.module.css";
import { Box, Container } from "@mui/material";
import { FixedLine } from "./components/FixedLine/FixedLine";
import { ChangingText } from "./components/ChangingText/ChangingText";

export default function Home() {
  return (
      <>
        <main className={styles.main}>
          <Box>
            <Container>
              <ChangingText />
            </Container>
            <Container>
              
            </Container>
            <FixedLine />
          </Box>
        </main>
      </>
  );
}
