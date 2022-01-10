import style from './features.module.scss';

type CardProps = {
  title: string
  text: string
  icon: string
}

const FeaturesCard = ({ title, text, icon }: CardProps) => (
  <div className={style.card}>
    <img className={style.icon} src={icon} alt={title} />
    <h4 className={style.feature}>{title}</h4>
    <span className={style.text}>{text}</span>
  </div>
);

export default FeaturesCard;
