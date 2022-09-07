import React from 'react';
import modelImg from '../assets/glassesImage/model.jpg';
import classes from './Model.module.css';

function Model(props) {
  const selectedGlasses = props.selectedGlasses;
  const { name, price, desc, url } = selectedGlasses;

  return (
    <div className={classes.content}>
      <div className={classes.card}>
        <img src={modelImg} alt='model' />
      </div>
      <div className={classes.card}>
        <img src={modelImg} alt='model' />
        {url && <img src={url} alt='glasses' />}
        {name && (
          <div className={classes.description}>
            <h4>{name}</h4>
            <h5>{`Price: $${price}`}</h5>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Model;
