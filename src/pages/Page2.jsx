import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MultilineInput from '../components/MultilineInput';
import colors from '../style/colors';
import Button from '../components/Button';
import mediaQueries from '../mediaQueries';
import Select from '../components/Select';

const Page2 = (props) => {
  const { classes, onClickNext } = props;
  const answer = {};

  return (
    <div className={classes.container}>
      <div className={classes.guestion}>
        2) Заполните поля
      </div>
      <div className={classes.answer}>
        <MultilineInput label="Адрес объекта" />
        <MultilineInput label="Площадь" />
        {/* <div className={classes.containerSmallInput}>
          <MultilineInput label="Количество комнат" size="small" />
          <MultilineInput label="Этаж" size="small" />
        </div> */}
        <Select label="Количество комнат">
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={0}>Студия</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>Более 5</MenuItem>
        </Select>

        <MultilineInput label="Этаж" />
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
  // containerSmallInput: {
  //   display: 'flex',
  //   // justifyContent: 'space-between',
  // },
};

export default withStyles(styles)(Page2);
