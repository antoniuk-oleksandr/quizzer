import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import { Icon } from "@iconify/react";
import { Question, QuestionType, Option } from "../../quizSchema";
import { useQuizQuestionsStore } from "@/app/create/quizQuestionsStore";
import {
  handleOptionChange,
  handleRemoveOption,
  handleAddOption,
  handleInputCorrectAnswer,
  handleCorrectAnswerChange,
  handleSave,
} from "./handlers";
import { checkOptions } from "../../helpers";

interface CreateQuizModalProps {
  open: boolean;
  onClose: () => void;
  initialQuestion?: Question | null;
}

const defaultOptions = {
  SINGLE: [{ text: "" }, { text: "" }, { text: "" }],
  CHECKBOX: [{ text: "" }, { text: "" }, { text: "" }],
  BOOLEAN: [{ text: "True" }, { text: "False" }],
  INPUT: [],
};

const CreateQuizModal: React.FC<CreateQuizModalProps> = ({
  open,
  onClose,
  initialQuestion = null,
}) => {
  const addQuestion = useQuizQuestionsStore((state) => state.addQuestion);

  const [text, setText] = useState("");
  const [type, setType] = useState<QuestionType>("INPUT");
  const [options, setOptions] = useState<Option[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<Option[]>([]);

  useEffect(() => {
    if (initialQuestion) {
      setText(initialQuestion.text);
      setType(initialQuestion.type);
      setOptions(initialQuestion.options || []);
      setCorrectAnswers(initialQuestion.correctAnswers);
    } else {
      setText("");
      setType("INPUT");
      setOptions([]);
      setCorrectAnswers([]);
    }
  }, [initialQuestion]);

  useEffect(() => {
    if (type === "BOOLEAN") setOptions(defaultOptions.BOOLEAN);
    else if (type === "INPUT") setOptions([]);
    else setOptions(defaultOptions[type]);
    setCorrectAnswers([]);
  }, [type]);

  const isValid =
    (text.trim() &&
      (type === "SINGLE" || type === "BOOLEAN") &&
      correctAnswers.length === 1) ||
    (type === "CHECKBOX" && correctAnswers.length >= 1) ||
    (type === "INPUT" && correctAnswers.length === 1);

  return (
    <Modal open={open} onClose={onClose} title="Add Question" size="lg">
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium  mb-1">
            Question Text
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your question"
          />
        </div>

        <div>
          <label className="block text-sm font-medium  mb-1">
            Question Type
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={type}
            onChange={(e) => setType(e.target.value as QuestionType)}
          >
            <option value="INPUT">Input</option>
            <option value="CHECKBOX">Checkbox (multiple correct)</option>
            <option value="SINGLE">Single Choice</option>
            <option value="BOOLEAN">Boolean (True/False)</option>
          </select>
        </div>

        {(type === "SINGLE" || type === "CHECKBOX") && (
          <div>
            <label className="block text-sm font-medium  mb-1">Options</label>
            <div className="flex flex-col gap-2">
              {options.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={opt.text}
                    onChange={(e) =>
                      handleOptionChange(
                        idx,
                        e.target.value,
                        options,
                        setOptions,
                      )
                    }
                    placeholder={`Option ${idx + 1}`}
                  />
                  <Button
                    className="text-red-400 hover:text-red-600 p-1"
                    type="button"
                    disabled={options.length <= (type === "SINGLE" ? 2 : 1)}
                    aria-label="Remove option"
                    onClick={() =>
                      handleRemoveOption(
                        idx,
                        options,
                        setOptions,
                        setCorrectAnswers,
                        correctAnswers,
                      )
                    }
                  >
                    <Icon icon="mdi:close" className="h-5 w-5" />
                  </Button>
                </div>
              ))}
              <Button onClick={() => handleAddOption(setOptions)}>
                Add Option
              </Button>
            </div>
          </div>
        )}

        <div>
          {["CHECKBOX", "SINGLE"].includes(type) && checkOptions(options) && (
            <label className="block text-sm font-medium  mb-1">
              Correct Answers
            </label>
          )}
          
          {!["CHECKBOX", "SINGLE"].includes(type)&& (
            <label className="block text-sm font-medium  mb-1">
              Correct Answer
            </label>
          )}

          {type === "INPUT" && (
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={correctAnswers[0]?.text || ""}
              onChange={(e) =>
                handleInputCorrectAnswer(e.target.value, setCorrectAnswers)
              }
              placeholder="Correct answer"
            />
          )}

          {(type === "SINGLE" || type === "BOOLEAN") && (
            <div className="flex flex-col gap-2">
              {checkOptions(options) &&
                options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="correctAnswer"
                      checked={correctAnswers[0]?.text === opt.text}
                      onChange={() =>
                        handleCorrectAnswerChange(
                          idx,
                          true,
                          options,
                          type,
                          correctAnswers,
                          setCorrectAnswers,
                        )
                      }
                      className="accent-blue-500"
                    />
                    <span>{opt.text}</span>
                  </label>
                ))}
            </div>
          )}

          {type === "CHECKBOX" && (
            <div className="flex flex-col gap-2">
              {checkOptions(options) &&
                options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={
                        !!correctAnswers.find((ans) => ans.text === opt.text)
                      }
                      onChange={(e) =>
                        handleCorrectAnswerChange(
                          idx,
                          e.target.checked,
                          options,
                          type,
                          correctAnswers,
                          setCorrectAnswers,
                        )
                      }
                      className="accent-blue-500"
                    />
                    <span>{opt.text}</span>
                  </label>
                ))}
            </div>
          )}
        </div>

        <Button
          type="button"
          color="primary"
          fullWidth
          onClick={() =>
            handleSave(
              setText,
              setCorrectAnswers,
              setOptions,
              setType,
              text,
              type,
              options,
              correctAnswers,
              addQuestion,
              onClose,
            )
          }
          disabled={!isValid}
        >
          {initialQuestion ? "Save Changes" : "Add Question"}
        </Button>
      </div>
    </Modal>
  );
};

export default CreateQuizModal;
