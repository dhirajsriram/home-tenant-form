import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { render, wait, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import allReducers from "./store/reducer";
import { createStore } from "redux";
import "./i18n";

let wrapper;
configure({ adapter: new Adapter() });

beforeEach(() => {
  wrapper = shallow(<App />);
});

afterEach(cleanup);

const store = createStore(allReducers);

describe("<App>", () => {
  it("Unknown routes should be navigated to a 404 page", async () => {
    const fourzerofour = "404!";
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/sddsdweq"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    await wait(() => expect(getByText(fourzerofour)).toBeDefined());
  });
  it("Default routes to be navigated to first step of the form", async () => {
    const hometext = "Name";
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    await wait(() => expect(getByText(hometext)).toBeDefined());
  });
  it("Default routes to be navigated to first step of the form", async () => {
    expect(wrapper).toMatchSnapshot();
  });
});



