import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import { questionsAccordion } from "../../fixtures/data";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

export const AccordionComponent = () => {
  // Control una opcion a la vez
  const [expanded, setExpanded] = useState("");
  // Control de varios elementos a la vez
  //   const [expanded, setExpanded] = useState<string[]>([]);
  //   const handleExpanded = (question: string) => {
  //     let currentQuestions: string[] = [...expanded];
  //     if (currentQuestions.includes(question)) {
  //       currentQuestions = currentQuestions.filter((q) => q !== question);
  //     } else {
  //       currentQuestions.push(question);
  //     }
  //     if (currentQuestions.length > 2) currentQuestions.shift();
  //     setExpanded(currentQuestions);
  //   };
  return (
    <div>
      {questionsAccordion.map(({ question, answer }) => (
        <>
          <Accordion
            // Componente controlado - 1 opción abierta a la vez
            expanded={expanded === question}
            onChange={() =>
              setExpanded((q) => (q === question ? "" : question))
            }
            // COntrol todas extensibles
            // expanded={expanded.includes(question)}
            // onChange={() => handleExpanded(question)}
            key={question}
            // disableGutters
            square
            slotProps={{
              transition: { unmountOnExit: true },
            }} // Para hacer que desaparezca del dom el contenido de cada acordion cuando esta cerrado
            disabled={question === "Why use MUI?"}
            sx={{
              "&.MuiAccordion-root.Mui-expanded": { my: 2 },
              maxWidth: 500,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ fill: "blue", fontSize: 40 }} />}
              sx={{
                "&.MuiAccordionSummary-root": {
                  color: "darkslateblue",
                  fontFamily: "verdana",
                  bgcolor: "lightblue",
                  height: 80,
                  "&.Mui-disabled": {
                    bgcolor: "black",
                  },
                },
              }}
            >
              {question}
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "lightcyan", height: 50, color: "blue" }}
            >
              <Typography component="span">{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};
