import React, { Component } from "react";
import { Button } from "react-bootstrap";

import Gift from "./Gift";

class App extends Component {
    state = {
        gifts: []
    }

    addGift = (event) => {
        const { gifts } = this.state;
        const max_id = gifts[gifts.length - 1] ? gifts[gifts.length - 1].id : 0;

        this.setState({ gifts: [...gifts, { id: max_id + 1 }] })
    }

    render() {
        const { gifts } = this.state;
        return (
            <div>
                <h2>Gift Giver</h2>
                <ul className="gift-list">
                    {
                        gifts.map(({ id }) => <Gift key={id} />)
                    }
                </ul>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;
