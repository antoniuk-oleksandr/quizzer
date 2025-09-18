import { Option } from "@/types/Option";

type QuizComponentOptionsProps = {
  options: Option[];
};

const QuizComponentOption = (props: QuizComponentOptionsProps) => {
  const { options } = props;

  if (options.length <= 0) return null;
  return (
    <div className="mb-4 space-y-2">
      <h3 className="font-medium text-zinc-600">Options:</h3>
      <ul className="space-y-1">
        {options.map((option) => (
          <li key={option.id} className="pl-2">
            <span className="text-gray-800">• {option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizComponentOption;
