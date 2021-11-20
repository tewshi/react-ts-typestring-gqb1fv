import React from "react";
import { example1, example2 } from "./const";
import { getMostRepeatedCharacter } from "./utils";

export const Solution = () => {
  const [answer, setAnswer] = React.useState<{
    example1: string;
    example2: string;
  }>({
    example1: "?",
    example2: "?"
  });

  const [result, setResult] = React.useState<string>("");
  const [result2, setResult2] = React.useState<string>("");

  return (
    <div>
      <pre>const example1 = {example1}</pre>
      <p>
        The answer is <b>{answer.example1}</b>
      </p>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => {
          // call your here function for example1
          const result = getMostRepeatedCharacter(example1);

          if (result !== "d") {
            setResult(
              `For the string "${example1}" the expected result is "d" but found "${result}"   `
            );
          }
          // call your here function for example1
          const result2 = getMostRepeatedCharacter(example2);

          if (result2 !== "B") {
            setResult2(
              `For the string "${example2}" the expected result is "B" but found "${result2}"   `
            );
          }

          if (result2 === "B" && result === "d") {
            setResult(
              "Your function is working well, you solved the problem, Congratulations!"
            );
            setResult2("");
          }
        }}
      >
        Green Button
      </button>
      <p>{result}</p>
      <p>{result2}</p>
    </div>
  );
};
