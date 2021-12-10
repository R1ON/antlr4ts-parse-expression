import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { NameStringParser } from './ANTLR/NameStringParser';

const App: FC = () => {
  const str = `спартак забьет {5.5+ 3} голов`;

  let result;
  
  try {
    result = NameStringParser.Parse(str).format();
  }
  catch (err) {
    console.log('err', err);
    return (
      <div>ЧТО_ТО СЛОМАЛОСЬ</div>
    )
  }

  console.log(result);
  // console.log('result.evaluateValue', result.evaluateValue());

  return (
    <div>{result}</div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
