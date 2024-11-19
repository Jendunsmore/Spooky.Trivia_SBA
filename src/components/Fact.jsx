// shows random Halloween facts between questions

import React from "react";

export default function FactPopup({ fact }) {
    return (
        <div className="fact-popup">
            <p>{fact}</p>
        </div>
    );
}
