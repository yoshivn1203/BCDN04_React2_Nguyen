import React, { useEffect } from 'react';
import modelImg from '../assets/glassesImage/model.jpg';
import classes from './Model.module.css';
import { data } from '../assets/data/index';

function Model(props) {
  const selectedGlasses = data.find((glasses) => glasses.id === props.selectedGlassesId);

  return (
    <div className={classes.content}>
      <div className={classes.card}>
        <img src={modelImg} alt='model' />
      </div>
      <div className={classes.card}>
        <img src={modelImg} alt='model' />
        {selectedGlasses && <img src={selectedGlasses.url} alt='glasses' />}
        {selectedGlasses && (
          <div className={classes.description}>
            <h4>{selectedGlasses.name}</h4>
            <h5>{`Price: $${selectedGlasses.price}`}</h5>
            <p>{selectedGlasses.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Model;
