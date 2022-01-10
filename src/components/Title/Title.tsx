import React from 'react';
import style from './title.module.scss';

const formatTitle = (title: string): string[] => {
  const splitTitle = title.split(' ');
  const highlight = splitTitle.pop();
  // @ts-ignore
  return [splitTitle.join(' '), highlight];
};

const formatTitleReverse = (title: string): string[] => {
  const splitTitle = title.split(' ');
  const highlight = splitTitle.shift();
  // @ts-ignore
  return [splitTitle.join(' '), highlight];
};

type TitleProps = {
  title: string
  color: string
  reverse?: string
}

const Title = ({ title, color, reverse }: TitleProps) => {
  if (reverse) {
    return (
      <h1 className={style.heading}>
        <span className={style.heading} style={{ color }}>{formatTitleReverse(title)[1]}</span>
        {' '}
        {formatTitleReverse(title)[0]}
      </h1>
    );
  }
  return (
    <h1 className={style.heading}>
      {formatTitle(title)[0]}
      {' '}
      <span className={style.heading} style={{ color }}>{formatTitle(title)[1]}</span>
    </h1>
  );
};

export default Title;
