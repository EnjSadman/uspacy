import "./styles.css"
import { Box, Container } from "@mui/material";

export function FixedLine() {
  return (
    <Container
      className="fixedLine__container manrope-16" 
    >
      <p>
        Безкоштовна онлайн-конференція
      </p>
      <Box
        className="fixedLine__whiteLine" 
        sx={{
          width: "38px",
          height: "2px",
          bgcolor: "var(--color-white)"
        }}
      />
      <p>
        30 квітня о 10:00
      </p>
    </Container>
  )
}