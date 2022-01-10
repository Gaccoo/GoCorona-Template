import React from 'react';
import style from './Watch.module.scss';
import playButton from '../../assets/button-play.svg';

const Watch = () => (
  <div className={style.watch}>
    <div className={style.buttonWrapper}>
      <img className={style.button} src={playButton} alt="Play" />
    </div>
    <div className={style.column}>
      <div className={style.primaryText}>Stay safe with GoCorona</div>
      <div className={style.secondaryText}>WATCH VIDEO</div>
    </div>
  </div>
);

export default Watch;
