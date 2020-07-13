import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from "./App";

configure({ adapter: new Adapter() });

const app = shallow(<App />);

describe("App", () => {
    it("Render App correctly", () => {
        expect(app).toMatchSnapshot();
    });

    it("Initialize the `state` with an empty list of gifts", () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe("When clicking `add-button`", () => {
        beforeEach(() => {
            app.find(".btn-add").simulate("click");
        });

        afterEach(() => {
            app.setState({ gifts: [] })
        });

        it("Adds a new gift to `state`", () => {
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });

        it("Adds a new gift to the rendered list", () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it("Creates a Gift component", () => {
            expect(app.find("Gift").exists()).toBe(true)
        })
    })

})
