import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Loader from "./common/loader/loader";
import routes from "./routes";

const Header = React.lazy(() => import("./common/header/header"));

class App extends Component {
  render() {
    return (
        <React.Suspense fallback={<Loader />}>
        <Header/>
        <div className="main-container">
            <Switch>
              {routes.map((route:any,index:number) => (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props: any) => (
                    <route.component {...props} />
                  )}
                />
              ))}
            </Switch>
          </div>
        </React.Suspense>
    );
  }
}

export default App;