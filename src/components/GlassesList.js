import React from 'react';
import classes from './GlassesList.module.css';
import { data } from '../assets/data/index';

function GlassesList(props) {
  const onClickHandler = (id) => {
    props.onChangeGlasses(id);
  };

  return (
    <div className={classes.container}>
      {data.map((glasses) => {
        const { id, url } = glasses;
        return (
          <img key={id} src={url} alt='glasses' onClick={() => onClickHandler(id)} />
        );
      })}
    </div>
  );
}
export default GlassesList;
