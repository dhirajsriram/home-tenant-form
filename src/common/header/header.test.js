// import React from "react";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { MemoryRouter } from "react-router";
// import App from "../../App";
// import {render,wait,cleanup, fireEvent} from '@testing-library/react';
// import { Provider } from "react-redux";
// import allReducers from "../../store/reducer";
// import { createStore } from "redux";

// afterEach(cleanup);
// configure({ adapter: new Adapter() });
// const store = createStore(allReducers);
// function TestBed () {
//   return (
// <Provider store={store}>
//     <MemoryRouter initialEntries={["/"]}>
//       <App />
//     </MemoryRouter></Provider>
//   )
// }
// test("Header appears on all routes", async () => {
//   jest.setTimeout(30000);
//   const Title = 'Sample App';
//   const {getByText}  = render(
//     <TestBed/>
//   );
//   await wait(()=> expect(getByText(Title)).toBeDefined());
// });

// test("Menu are part of the header", async () => {
//   jest.setTimeout(30000);
//   const Menu = 'menu';
//   const {getByLabelText}  = render(
//       <TestBed/>
//     );
//   await wait(()=> expect(getByLabelText(Menu)).toBeDefined());
// });

// test("Clicking on the hamburger opens the sidemenu", async () => {
//   jest.setTimeout(30000);
//   const Menu = 'menu';
//   const {getByLabelText,getByText}  = render(
//     <TestBed/>
//   );
//   await wait(()=> {fireEvent.click(getByLabelText(Menu))
//   });
//   const items = await getByText(/About/);
//   expect(items).toBeDefined()
// });

// test("Clicking on the hamburger opens the sidemenu", async () => {
//   jest.setTimeout(30000);
//   const Menu = 'menu';
//   const Home='HOME';
//   const {getByLabelText,getByText}  = render(
//     <Provider store={store}>
//     <MemoryRouter initialEntries={["/asdasd"]}>
//       <App />
//     </MemoryRouter></Provider>
//   );
//   await wait(()=> {fireEvent.click(getByLabelText(Menu))});
//   await wait(()=> {fireEvent.click(getByText(/Home/))});
//   await wait(()=> expect(getByText(Home)).toBeDefined());
// });






