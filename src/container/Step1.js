import React, { useState,useEffect, useMemo, useImperativeHandle } from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import Input from '../components/input';
import MainCard from '../components/MainCard';
import auction_data, { typeCar } from '../data/auction';
import {portListOdessa} from '../data/ports';
import { connect } from 'react-redux';
import { doAddAuction, doAddSize, doAddCyti,doAddCostTransit } from '../actions';
import { useFormInput, calculta } from '../components/functions';


{/**
 @{} + 1% к  стоимости
*/}
function Step1 ({ stepState, onAddAuction, onAddSize, onAddCyti,  summaState, children }){
  const auction = useFormInput('auction');


  useEffect(
    () => {
      onAddAuction({ auction: auction.value });
    },
    [ auction.value ],
  );

  const size = useFormInput('size');

  useEffect(
    () => {
      onAddSize({ size: size.value });
    },
    [ size.value ],
  );
  const cytiUse = useFormInput('cityUse');

  useEffect(
    () => {
      onAddCyti({ cytiUse: cytiUse.value });
    },
    [ cytiUse.value ],
  );

  var index = typeCar.filter(item => item[1] === size.value && item[2]);
  let costTransit = 0;
  let result = 0;
  let summ = 0;
  if(stepState.mainCraft){
    result = portListOdessa.map(item => item[0] === stepState.mainCraft[2] && item[1]).filter(el => el !== false);
    result = +result[0];

    costTransit = stepState.mainCraft && (+stepState.mainCraft[index[0] && index[0][2]]) + 77;
    summ =  +result + +costTransit

  }


  {/* <Paper>
        <Paper>
    // var index = typeCar.filter(item => item[1] === size.value && item[2]);
          <Typography variant='subtitle1'>
            <Typography variant='h3'>
              <Typography variant='display1'>Стоимость : </Typography>{' '}
              {stepState.mainCraft &&
                stepState.mainCraft[index[0] && index[0][2]]}{' '}
              $
            </Typography>
          </Typography>  </Paper>
        </Paper> */}

  return (
    <Paper background='tomato' header='Расчет доствки авто'>
      {children}
      <Radio
        labelPlacement='Выберете Aукцион'
        {...auction}
        options={auction_data}
      />
      <Typography variant="h6" color="inherit">
          Цена лота
      </Typography>

        <label >
          <Input enableLabel/>
        </label>
        <Typography variant="h6" color="inherit">
            Цена доставки
        </Typography>

        <div style={{ display: 'inline-flex' }}>
        <Select
            header='Выберете площадку'
            {...cytiUse}
            options={stepState.cytisData}
          />
            <br />
          <div style={{ width: 75 }} />
        </div>


        <Select header='Размер Машины' {...size} options={typeCar} />
        <Typography   variant="subheading" color="secondary">
          {(stepState.mainCraft && stepState.mainCraft[2]) === undefined ? null : (stepState.mainCraft && stepState.mainCraft[2]) + ' - Ближайший порт'}
        </Typography>
        <Typography variant="subheading" color="secondary">
          Страховка: + 77 $
        </Typography>
        <Typography variant="title" color="secondary">
            { !isNaN(summ) &&
              'СТОИМОСТЬ ДОСТАВКИ В ПОРТ ОДЕССЫ: ' + ' ' +  summ.toLocaleString() + ' $'}
        </Typography>
      <hr />
      <Typography variant="h5" color="primary">
          ОБЩАЯ СУММА: {(summaState.costCar  && summ) && !isNaN((+summaState.costCar + +summ).toFixed(2)) ? (+summaState.costCar + +summ).toFixed(2) : null}
      </Typography>

    </Paper>

  );
}
const mapStateToProps = state => ({
  stepState: state.step1State,
  summaState: state.summaState,
});
const mapDispatchToProps = dispatch => ({
  onAddAuction: payload => dispatch(doAddAuction(payload)),
  onAddSize: payload => dispatch(doAddSize(payload)),
  onAddCyti: payload => dispatch(doAddCyti(payload)),
  onAddCostTransit: payload => dispatch(doAddCostTransit(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
