import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
import "fontsource-roboto";
import { Container } from "@mui/system";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53 )",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white !important",
    padding: "0 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 54,
      marginBottom: 15,
      marginTop: 50,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setCheckded] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setCheckded(e.target.checked)}
          color="secondary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* many options for maxwidth like- sm,lg,md,xs etc */}
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use material-UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: 15 }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%", marginTop: 15 }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: "100%", marginTop: 15 }} />
              </Grid>
            </Grid>
            {/* <TextField
              variant="filled"
              color="secondary"
              type="date"
              label="The Date"
            /> */}
            <CheckboxExample />
            <ButtonGroup variant="contained">
              <Button
                startIcon={<SaveIcon />} // applies at the start
                //endIcon={<SaveIcon />} // *applies at the end of the component.
                size="large"
                href="#"
                //variant="contained" //* since we included a button group we can remove the variant property from here
                color="primary"
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                href="#"
                // color="secondary"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
