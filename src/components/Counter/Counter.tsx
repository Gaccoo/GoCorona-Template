import style from './counter.module.scss';

const Counter = () => (

  <div className={style.box}>
    <div className={style.wrapper}>
      <h1 className={style.count}>2m</h1>
      <span className={style.text}>USERS</span>
    </div>
    <div className={style.wrapper}>
      <h1 className={style.count}>78</h1>
      <span className={style.text}>COUNTRIES</span>
    </div>
    <div className={style.wrapper}>
      <h1 className={style.count}>10,000+</h1>
      <span className={style.text}>MEDICAL EXPERTS</span>
    </div>
  </div>

);

export default Counter;
