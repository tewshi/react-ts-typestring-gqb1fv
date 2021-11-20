import React from 'react';
import { example1, example2 } from './const';
import { getMostRepeatedCharacter } from './utils';

export const Solution = () => {
  const [answer, setAnswer] = React.useState<{
    example1: string;
    example2: string;
  }>({
    example1: '?',
    example2: '?'
  });

  const [result, setResult] = React.useState<string>('');
  const [result2, setResult2] = React.useState<string>('');
  const [success, setSuccess] = React.useState<boolean>(false);

  return (
    <div>
      <pre>const example1 = {example1}</pre>
      <p>
        The answer is <b>{answer.example1}</b>
      </p>
      {result && (
        <p style={{ color: success ? '#73ab84' : '#d10000' }}>{result}</p>
      )}
      <pre>const example2 = {example2}</pre>
      <p>
        The answer is <b>{answer.example2}</b>
      </p>
      {result2 && (
        <p style={{ color: success ? '#73ab84' : '#d10000' }}>{result2}</p>
      )}
      <button
        style={{ backgroundColor: 'green', color: 'white' }}
        onClick={() => {
          // call your here function for example1
          const result = getMostRepeatedCharacter(example1);

          if (result !== 'd') {
            setSuccess(false);
            setResult(`Expected "d" but found "${result}"   `);
          }
          // call your here function for example1
          const result2 = getMostRepeatedCharacter(example2);

          if (parseInt(result2) !== 0) {
            setSuccess(false);
            setResult2(`Expected 0 but found "${result2}"   `);
          }

          if (parseInt(result2) === 0 && result === 'd') {
            setResult(
              'Your function is working well, you solved the problem, Congratulations!'
            );
            setResult2('');
            setSuccess(true);
          }
        }}
      >
        The Green Button
      </button>
    </div>
  );
};
