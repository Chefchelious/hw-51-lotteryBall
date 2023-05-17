import React from 'react';

interface IBallProps {
    number: number
}

const Ball: React.FC<IBallProps> = props => {

    return (
        <div className="Ball">
            <span>{props.number}</span>
        </div>
    );
};

export default Ball;