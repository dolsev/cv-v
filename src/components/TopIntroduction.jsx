import React from "react";

const TopIntroduction = ({  heading, paragraphs }) => {
    return (
                <div className="right-top">
                    <h1>{heading}</h1>
                    {paragraphs.map((paragraph, index) => <h2 key={index}>{paragraph}</h2>)}
                </div>
    );
};

export default TopIntroduction;