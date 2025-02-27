import Question from "./Question";
import data from "../assets/data";

const QuestionList = () => {
  return (
    <div className="h-auto p-1 min-h-screen bg-black">
      {data.map((item, index) => (
        <Question key={index} item={item} />
      ))}
    </div>
  );
};

export default QuestionList;
