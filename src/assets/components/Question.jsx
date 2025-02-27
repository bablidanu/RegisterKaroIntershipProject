import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Question = ({ item }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div className="bg-purple-400 max-w-[1200px] mx-auto p-8 mt-10 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold">{item.q}</h3>
        <div
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
          className={`${
            showAnswer ? "rotate-180" : ""
          } p-2 rounded-full bg-white cursor-pointer`}
        >
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>
      <div className={`${showAnswer ? "block" : "hidden"}`}>
        <hr className="my-5" />
        <p className="text-2xl">{item.a}</p>
      </div>
    </div>
  );
};

// Define prop types for the component
Question.propTypes = {
  item: PropTypes.shape({
    q: PropTypes.string.isRequired, // Question should be a required string
    a: PropTypes.string.isRequired, // Answer should be a required string
  }).isRequired, // item itself is required
};

export default Question;
