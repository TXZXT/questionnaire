import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextFieldInput from '../components/TextFieldInput';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import Select from '../components/Select';
import QuestionCardLayout from '../components/QuestionCardLayout/index';


const Page2 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 2,
    question: 'Напишите информацию об объекте',
    answer: {
      address: '',
      square: '',
      floor: '',
      roomsCount: '',
    },
  });

  const getOnlyNumber = (writingText) => {
    if (Number.isNaN(Number(writingText))) return false;
    return true;
  };

  return (
    <QuestionCardLayout
      questionNumber={answer.id}
      questionText={answer.question}
    >
      <div className={classes.answer}>
        <TextFieldInput
          label="Адрес объекта"
          value={answer.answer.address}
          onChange={writingText => setAnswer({
            ...answer,
            answer: { ...answer.answer, address: writingText },
          })}
        />
        <div className={classes.containerInputs}>
          <div className={classes.containerSquare}>
            <TextFieldInput
              label="Площадь"
              value={answer.answer.square}
              onChange={(writingText) => {
                if (getOnlyNumber(writingText)) {
                  return setAnswer({
                    ...answer,
                    answer: { ...answer.answer, square: writingText },
                  });
                }
                return false;
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">Кв.м.</InputAdornment>,
              }}
            />
          </div>

          <div className={classes.containerFloor}>
            <TextFieldInput
              label="Этаж"
              value={answer.answer.floor}
              onChange={(writingText) => {
                if (getOnlyNumber(writingText)) {
                  return setAnswer({
                    ...answer,
                    answer: { ...answer.answer, floor: writingText },
                  });
                }
                return false;
              }}
            />
          </div>
        </div>

        <Select
          label="Количество комнат"
          value={answer.answer.roomsCount}
          onChange={e => setAnswer({
            ...answer,
            answer: { ...answer.answer, roomsCount: e.target.value },
          })}
        >
          <MenuItem value="Студия">Студия</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value="Более 5">Более 5</MenuItem>
        </Select>

      </div>
      <Button
        disabled={((answer.answer.address.length === 0)
          || (answer.answer.square.length === 0)
          || (answer.answer.floor.length === 0)
          || (answer.answer.roomsCount.length === 0))}
        onClick={() => onClickNext(answer)}
      />
    </QuestionCardLayout>
  );
};

const styles = {
  answer: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
    },
  },
  containerInputs: {
    display: 'flex',
  },
  containerSquare: {
    flex: 1,
    marginRight: '10px',
  },
  containerFloor: {
    flex: 1,
    marginLeft: '10px',
  },
};

export default withStyles(styles)(Page2);
