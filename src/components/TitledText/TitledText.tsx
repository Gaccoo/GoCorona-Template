import React from 'react';
import style from './TitledText.module.scss';
import Title from '../Title/Title';

type HeroProps = {
  title: string
  text: string
  color: string
  children?: React.ReactNode
  reverse?: string
}

const TitledText = ({
  title, text, color, children, reverse,
}: HeroProps) => (
  <div className={style.titleMain}>

    <div className={reverse ? style.wrapperCenter : style.wrapper}>
      <Title title={title} color={color} reverse={reverse} />
    </div>

    <p className={reverse ? style.paragraphCenter : style.paragraph}>{text}</p>

    <div className={style.wrapper}>
      {children}
    </div>
  </div>
);

export default TitledText;
