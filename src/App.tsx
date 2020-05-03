import React from "react";
import Loader from "./common/loader/Loader";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Trans } from "react-i18next";
import "./App.scss";

const Header: Function = React.lazy(() => import("./common/header/Header"));
const Stepper: Function = React.lazy(() => import("./common/stepper/Stepper"));

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[800],
    },
  },
});

const App:React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <MuiThemeProvider theme={theme}>
        <Trans>
          <div className="main-container">
            <Header />
            <div className="main-content">
              <Stepper />
              <Switch>
                {routes.map((route: any, index: number) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    render={(props: any) => <route.component {...props} />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Trans>
      </MuiThemeProvider>
    </React.Suspense>
  );
};

export default App;
