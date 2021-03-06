import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { render, wait, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import allReducers from "./store/reducer";
import { createStore } from "redux";
import "./i18n";

let wrapper;
configure({ adapter: new Adapter() });

afterEach(cleanup);

const store = createStore(allReducers);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <React.Suspense fallback={<div></div>}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <App />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  );
});

describe("<App>", () => {
  it("Default routes to be navigated to first step of the form", async () => {
    const hometext = "Name";
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText(hometext)).toBeDefined();
  });
  it("Renders without exploding", async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
