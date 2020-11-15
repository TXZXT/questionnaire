import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MultilineInput from '../components/MultilineInput';
import colors from '../style/colors';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';

const Page1 = (props) => {
  const { classes, onClickNext } = props;
  const [answer, setAnswer] = useState({
    id: 1,
    name: '',
    email: '',
    phone: '',
  });

  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        1) Тут написан какой-то приветствующий текст, который предлагает пройти тест из 40+ вопросов
      </div>
      <div className={classes.answer}>
        <MultilineInput
          label="ФИО"
          value={answer.name}
          onChange={writingText => setAnswer({ ...answer, name: writingText })}
        />
        <MultilineInput
          label="Email"
          value={answer.email}
          onChange={writingText => setAnswer({ ...answer, email: writingText })}
        />
        <MultilineInput
          label="Контактный телефон"
          value={answer.phone}
          onChange={writingText => setAnswer({ ...answer, phone: writingText })}
        />
      </div>
      <Button onClick={() => onClickNext(answer)} />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [`@media ${mediaQueries.mobile}`]: {
      height: 'auto',
      flex: 1,
      width: '100%',
      // paddingLeft: '10px',
      paddingTop: '30px',
      // paddingRight: '10px',
    },
  },
  guestion: {
    color: colors.PRIMARY,
    fontWeight: 600,
    paddingBottom: '20px',
    fontSize: '16px',
    [`@media ${mediaQueries.mobile}`]: {
      // fontSize: '14px',
      // width: '100%',
      // lineHeight: '10px',
      // wordSpacing: '3px',
      paddingLeft: '20px',
      // paddingTop: '30px',
      paddingRight: '20px',
    },
  },
  answer: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
      flex: 1,
      // paddingTop: '30px',
      // paddingRight: '30px',
    },
  },
};

export default withStyles(styles)(Page1);
