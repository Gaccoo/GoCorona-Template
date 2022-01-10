import React from 'react';
import pageContent from '../../data/textContent';
import TitledText from '../TitledText/TitledText';
import image from '../../assets/app-image.svg';
import color from '../../styles/colorScheme';
import style from './appContainer.module.scss';
import Button from '../Button/Button';

const { coronaApp } = pageContent;

const AppContainer = () => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <img className={style.image} src={image} alt="GoCorona App" />
    </div>

    <div className={style.wrapper}>
      <div>
        <TitledText
          title={coronaApp.title}
          text={coronaApp.text}
          color={color.baseRed}
        >
          <Button color={color.baseRed} text="FEATURES" />
        </TitledText>
      </div>
    </div>

  </div>
);

export default AppContainer;
