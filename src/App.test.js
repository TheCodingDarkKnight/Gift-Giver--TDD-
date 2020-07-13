import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from "./App";

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it("Render App correctly", () => {
    expect(app).toMatchSnapshot();
});

it("Initialize the `state` with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
})

it("Adds a new gift to `state` when clicking the `add gift` button", () => {
    app.find(".btn-add").simulate("click");

    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it("Adds a new gift to the rendered list when clicking the `add gift` button", () => {
    app.find(".btn-add").simulate("click");

    expect(app.find('.gift-list').children().length).toEqual(2);
});
