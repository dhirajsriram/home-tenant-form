import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../../../../store/reducer";
import Navigation from "./Navigation";
import "../../../../i18n";
import { setFormValue } from "../../../../store/action";

let wrapper;
let props = {
  next: 4,
  previous: 2,
  field: "email",
};
configure({ adapter: new Adapter() });

let store = createStore(allReducers);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <React.Suspense fallback={<div></div>}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <Navigation {...props} />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  );
});

describe("<Navigation>", () => {
  it("Renders without exploding", async () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Goes back", async () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click");
    expect(store.getState().reducer.step).toBe(props.previous);
  });
  it("Next is disabled by default", async () => {
    const button = wrapper.find("button").at(0);
    expect(button.props().disabled).toBe(true);
  });
  it("Goes forward", async () => {
    let mockFromValue = {
      field: "email",
      value: {
        value: "XXXX",
        valid: true,
      },
    };
    store.dispatch(setFormValue(mockFromValue));
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(store.getState().reducer.step).toBe(props.next);
  });
});
