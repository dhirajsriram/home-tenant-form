import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import "../../../i18n";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../../../store/reducer";
import Email from "./Email";

let wrapper;
configure({ adapter: new Adapter() });

const store = createStore(allReducers);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <React.Suspense fallback={<div></div>}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <Email />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  );
});

describe("<Email>", () => {
  it("Renders without exploding", async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
