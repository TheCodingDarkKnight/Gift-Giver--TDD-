import React, { Component } from "react";
import { Button } from "react-bootstrap";

import Gift from "./Gift";
import "./index.css";
class App extends Component {
    state = {
        gifts: []
    }

    getLastGiftId = gifts => gifts[gifts.length - 1] ? gifts[gifts.length - 1].id : 0;

    addGift = () => {
        const { gifts } = this.state;
        const max_id = this.getLastGiftId(gifts)

        this.setState({ gifts: [...gifts, { id: max_id + 1 }] })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({ gifts })
    }

    render() {
        const { gifts } = this.state;
        return (
            <div>
                <h2>Gift Giver</h2>
                <ul className="gift-list">
                    {
                        gifts.map(gift => <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />)
                    }
                </ul>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;
