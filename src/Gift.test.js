import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Gift from "./Gift";

configure({ adapter: new Adapter() });

describe("Gift", () => {
    const gift = shallow(<Gift />)

    it("Renders properly", () => {
        expect(gift).toMatchSnapshot();
    })

    it("Initializes a person and present in `state`", () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    })

    describe('When typing into the person input', () => {
        const person = "Uncle";

        beforeEach(() => {
            gift.find(".input-person").simulate("change", { target: { value: person } });
        });

        it("Updates the person in `state`", () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('When typing into the present input', () => {
        const present = "Golf Clubs";

        beforeEach(() => {
            gift.find(".input-present").simulate("change", { target: { value: present } });
        });

        it("Updates the present in `state`", () => {
            expect(gift.state().present).toEqual(present);
        });
    });
})