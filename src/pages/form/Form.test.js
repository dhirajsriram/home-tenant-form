import React from "react";
import Form from "./Form";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import "../../i18n";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../../store/reducer";

let wrapper;
configure({ adapter: new Adapter() });

const store = createStore(allReducers);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <React.Suspense fallback={<div></div>}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <Form />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  );
});

describe("<Form>", () => {
  it("Renders without exploding", async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
