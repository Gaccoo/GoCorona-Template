import React from 'react';
import style from './button.module.scss';

type ButtonProps = {
  color: string,
  text: string
}

const Button = ({ text, color }: ButtonProps) => (
  <button style={{ backgroundColor: color }} className={style.button}>{text}</button>
);

export default Button;
