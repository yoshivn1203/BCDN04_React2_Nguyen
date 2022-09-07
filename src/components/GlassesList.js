import React from 'react';
import classes from './GlassesList.module.css';
import data from '../dataGlasses.json';

function GlassesList(props) {
  const onClickHandler = (glasses) => {
    props.onChangeGlasses(glasses);
  };

  return (
    <div className={classes.container}>
      {data.map((glasses) => {
        const { id, url } = glasses;
        return (
          <img key={id} src={url} alt='glasses' onClick={() => onClickHandler(glasses)} />
        );
      })}
    </div>
  );
}
export default GlassesList;
