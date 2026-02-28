import * as React from 'react';

const Title = ({ text }) => {
    return (
        <h2 className="text-4xl md:text-5xl font-bold text-[#603809] mb-4 drop-shadow-sm">
            {text}
        </h2>
    );
};

export default Title;