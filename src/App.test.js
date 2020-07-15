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
        const id = 1;
        beforeEach(() => {
            app.find(".btn-add").simulate("click");
        });

        afterEach(() => {
            app.setState({ gifts: [] })
        });

        it("Adds a new gift to `state`", () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });

        it("Adds a new gift to the rendered list", () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it("Creates a Gift component", () => {
            expect(app.find("Gift").exists()).toBe(true)
        });

        describe("And the user wants to remove the added gift", () => {
            beforeEach(() => {
                app.instance().removeGift(id)
            });

            it("Removes the gift from state", () => {
                expect(app.state().gifts).toEqual([]);
            })
        })

        describe("getLastGift", () => {
            describe("Given an empty array", () => {
                it("return 0", () => {
                    expect(app.instance().getLastGiftId([])).toEqual(0)
                });
            });

            describe("Given an array of numbers", () => {
                it("return the last Gift Index", () => {
                    expect(app.instance().getLastGiftId([{ id: 1 }, { id: 2 }])).toEqual(2)
                })
            })
        })
    })

})
