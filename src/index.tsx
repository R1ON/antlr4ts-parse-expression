import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { NameStringParser, MatchNamesFormatterContext } from './ANTLR';

const MATCH = {
    id: 19378,
    sportId: 1,
    tournamentUnionId: 1481,
    tournamentId: 2910,
    tournamentStageId: 1670,
    slotKey: 2,
    type: 1,
    isTop: false,
    modelType: 10,
    isOpen: true,
    startDate: '2020-02-02T12:30:00Z',
    name: 'Дармштадт 98 - Оснабрюк',
    timer: {
      started: false,
      reverse: false,
      gameTime: 0,
      timestamp: '2020-01-26T11:31:25Z',
    },
    state: {
      secondHalfGoalsTeam2Total: 0.0,
      matchGoalsTeam2Total: 1.0,
      firstHalfGoalsTeam1Total: 1.0,
      matchGoalsTeam1Total: 1.0,
      firstHalfGoalsTotal: 2.0,
      secondHalfGoalsTeam1Total: 0.0,
      secondHalfGoalsTotal: 0.0,
      matchGoalsTotal: 2.0,
      firstHalfGoalsTeam2Total: 1.0,
    },
    scores: {
      '100': {
        '101': {
          '1': {
            '1': 1,
            '2': 1,
          },
          '2': {
            '1': 0,
            '2': 0,
          },
        },
        '100': {
          '0': {
            '1': 1,
            '2': 1,
          },
        },
        '106': {
          '0': {
            '1': 1,
            '2': 1,
          },
        },
      },
    },
    periods: {
      '101': {
        number: 2,
        finished: false,
      },
    },
    objects: {
      '1': {id: 24438, "name":"Спартак"},
      '2': {id: 22234, "name":"ЦСКА"},
    },
    stakes: {
      '45380716': {
        id: 45380716,
        isOpen: true,
        parameters: {},
        names: {
          short: 'Дармштадт 98: Не проигрыш/Тотал 2.5',
          long: 'Дармштадт 98: Не проигрыш/Тотал 2.5',
        },
      },
      '45380745': {
        id: 45380745,
        isOpen: true,
        parameters: {},
        names: {
          short: 'Точный тотал матча',
          long: 'Точный тотал матча',
        },
      },
      '45380766': {
        id: 45380766,
        isOpen: true,
        parameters: {},
        names: {
          short: 'Двойной исход',
          long: 'Двойной исход',
        },
      },
      '45380880': {
        id: 45380880,
        type: 1292,
        isOpen: true,
        parameters: {
          points: 0.0,
          pointType: 100.0,
          feedType: 100.0,
          periodType: 106.0,
        },
        names: {
          short: 'Победа с форой в основное время',
          long: 'Победа с форой 0 в основное время',
        },
      },
      '45380883': {
        id: 45380883,
        type: 1292,
        isOpen: true,
        parameters: {
          points: -1.5,
          pointType: 100.0,
          feedType: 100.0,
          periodType: 106.0,
        },
        names: {
          short: 'Победа с форой в основное время',
          long: 'Победа с форой -1.5 в основное время',
        },
      },
    },
    bets: {
      '45380717': {
        id: 45380717,
        stakeId: 45380716,
        key: 1,
        price: 4.3,
        isOpen: true,
        names: {
          short: 'Дармштадт 98 не проиграет и ТМ <2.5',
          long: 'Дармштадт 98 не проиграет и ТМ <2.5',
        },
      },
      '45380718': {
        id: 45380718,
        stakeId: 45380716,
        key: 2,
        price: 1.22,
        isOpen: true,
        names: {
          short: 'Дармштадт 98 проиграет или ТМ >2.5',
          long: 'Дармштадт 98 проиграет или ТМ >2.5',
        },
      },
      '45380719': {
        id: 45380719,
        stakeId: 45380716,
        key: 3,
        price: 1.83,
        isOpen: true,
        names: {
          short: 'Дармштадт 98 не проиграет и ТМ >2.5',
          long: 'Дармштадт 98 не проиграет и ТМ >2.5',
        },
      },
    },
    betsCount: 3,
  };

const App: FC = () => {
  const str = ` {Object[1].name} `;

  let result;
  
  try {
    const formatterContext = new MatchNamesFormatterContext();
    formatterContext.addObjects(MATCH.objects['1']);
    formatterContext.addObjects(MATCH.objects['2']);

    const parameters = {
      points: -1.5,
      pointType: 100.0,
      feedType: 100.0,
      periodType: 106.0,
    };

    result = NameStringParser.Parse(str).format(formatterContext, parameters);
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
