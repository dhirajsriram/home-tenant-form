import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../../store/reducer";
import Header from "./Header";
import { initialState } from "../../store/reducer/reducer";
import { setFormValue } from "../../store/action";
import "../../i18n";

let wrapper;
configure({ adapter: new Adapter() });

const store = createStore(allReducers);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <React.Suspense fallback={<div></div>}>
        <MemoryRouter initialEntries={["/"]} keyLength={0}>
          <Header />
        </MemoryRouter>
      </React.Suspense>
    </Provider>
  );
});

describe("<Header>", () => {
  // it("Renders without exploding", async () => {
  //   expect(wrapper).toMatchSnapshot();
  // });
  it("Home button resets the form", async () => {
    let tempState = initialState;
    let tempPayload = {
      field: "email",
      value: {
        value: "XXXX",
        valid: true,
      },
    };
    store.dispatch(setFormValue(tempPayload));
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(store.getState().reducer).toEqual(tempState);
  });
  it("Sets the language based on selection", async () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click");
    const de = wrapper.find("li").at(1);
    de.simulate('click');
    expect(store.getState().reducer.language).toEqual('DE');
  });
});
