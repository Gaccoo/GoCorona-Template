import React from 'react';
import textContent from '../../data/textContent';
import style from './experts.module.scss';
import color from '../../styles/colorScheme';
import TitledText from '../TitledText/TitledText';
import Button from '../Button/Button';
import videoImage from '../../assets/video-image.svg';
import Counter from '../Counter/Counter';

const { experts } = textContent;

const ExpertsContainer = () => (

  <div className={style.section} style={{ backgroundColor: color.bgGray }}>
    <div className={style.wrapper}>
      <Counter />
    </div>
    <div className={style.container}>
      <div className={style.wrapper}>
        <TitledText title={experts.title} text={experts.text} color={color.baseBlue}>
          <Button color={color.baseRed} text="FEATURES" />
        </TitledText>
      </div>

      <div className={style.wrapper}>
        <img className={style.image} src={videoImage} alt="Video" />
      </div>
    </div>
  </div>
);

export default ExpertsContainer;
