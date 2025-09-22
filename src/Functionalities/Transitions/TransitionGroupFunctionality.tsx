import { Delete } from "@mui/icons-material";
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { useState } from "react";

export const TransitionGroupFunctionality = () => {
  const countriesArray = ["GERMANY", "SPAIN", "MEXICO", "USA"];
  const [countries, setCountries] = useState(countriesArray);
  return (
    <>
      <Button onClick={() => setCountries(countriesArray)}>Reset</Button>
      <List sx={{ width: 300 }}>
        <TransitionGroup>
          {countries.map((country) => (
            <Collapse key={country} timeout={300}>
              <ListItem
                secondaryAction={
                  <IconButton
                    onClick={() =>
                      setCountries((prev) => prev.filter((c) => c !== country))
                    }
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={country}
                  secondary="Some deescription for this"
                />
              </ListItem>
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </>
  );
};
