// src/components/FallingBats.jsx
import React, { useEffect, useState } from "react";

function FallingBats() {
    const [bats, setBats] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBats((prev) => [...prev, createBat()]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const createBat = () => {
        const left = Math.random() * 100;
        return { left: `${left}%` };
    };

    return (
        <div className="falling-bats">
            {bats.map((bat, index) => (
                <span key={index} className="bat" style={{ left: bat.left }} />
            ))}
        </div>
    );
}

export default FallingBats;
