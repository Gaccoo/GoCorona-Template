import React from 'react';
import heroImage from '../../assets/hero.svg';
import pageContent from '../../data/textContent';
import Watch from '../Watch/Watch';
import TitledText from '../TitledText/TitledText';
import style from './Hero.module.scss';
import color from '../../styles/colorScheme';
import '../../styles/home.scss';
import Button from '../Button/Button';

const { hero } = pageContent;
const Hero = () => (
  <div className={style.hero} style={{ backgroundColor: color.bgGray }}>
    <div className="column">
      <TitledText
        title={hero.title}
        text={hero.text}
        color={color.baseBlue}
      >
        <Button color={color.baseRed} text="GET STARTED" />
      </TitledText>
      <Watch />
    </div>
    <div className={style.wrapper}>
      <img className={style.heroImage} src={heroImage} alt="GoCorona" />
    </div>

    <div className={style.rightRow} />
  </div>
);

export default Hero;
