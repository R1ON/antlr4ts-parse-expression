import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import parseNameStringExpression from './ANTLR/parser';

const App: FC = () => {
  const str = ` [1,2,3,[4,5]] `;

  let result;
  
  try {
    result = parseNameStringExpression(str);
  }
  catch (err) {
    console.log('err', err);
    return (
      <div>ЧТО_ТО СЛОМАЛОСЬ</div>
    )
  }

  console.log('result', result);
  console.log('result.evaluateValue', result.evaluateValue());

  return (
    <div>обычный див</div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
