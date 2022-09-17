import React from 'react';
import classes from './Model.module.css';

function Model(props) {
  const { name, price, desc, url } = props.selectedGlasses;

  return (
    <div className={classes.content}>
      <div className={classes.card}>
        <img src='./glassesImage/model.jpg' alt='model' />
      </div>
      <div className={classes.card}>
        <img src='./glassesImage/model.jpg' alt='model' />
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
