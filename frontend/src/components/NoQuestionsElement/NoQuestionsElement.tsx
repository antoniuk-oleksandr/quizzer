type NoQuestionsElementProps = {
  className?: string;
};

const NoQuestionsElement = (props: NoQuestionsElementProps) => {
  const { className } = props;

  return (
    <div
      className={`text-center text-zinc-600 ${className ? className : ""}`}
    >
      No questions added yet.
    </div>
  );
};

export default NoQuestionsElement;
