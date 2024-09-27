import styles from "./page.module.css";
import { Box, Container } from "@mui/material";
import { FixedLine } from "./components/FixedLine/FixedLine";

export default function Home() {
  return (
      <>
        <main className={styles.main}>
          <Box>
            <Container>
              <h1 className="montserrat">
                123
              </h1>
              <h2 className="manrope">
                234
              </h2>
            </Container>
            <Container>
              
            </Container>
            <FixedLine />
          </Box>
        </main>
      </>
  );
}
