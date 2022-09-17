import React from 'react';
import classes from './GlassesList.module.css';
import data from '../dataGlasses.json';

function GlassesList(props) {
  const { onChangeGlasses } = props;

  return (
    <div className={classes.container}>
      {data.map((glasses) => {
        const { id, url } = glasses;
        return (
          <div key={id} onClick={() => onChangeGlasses(glasses)}>
            <img src={url} alt='glasses' />
          </div>
        );
      })}
    </div>
  );
}
export default GlassesList;
