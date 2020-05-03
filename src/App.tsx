import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./common/loader/loader";
import routes from "./routes";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import "./App.scss";
import { Trans } from "react-i18next";

const Header = React.lazy(() => import("./common/header/header"));
const Stepper = React.lazy(() => import("./common/stepper/Stepper"));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[800],
    },
  },
});

class App extends Component {
  render() {
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
  }
}

export default App;
