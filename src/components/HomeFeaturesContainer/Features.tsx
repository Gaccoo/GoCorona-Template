import style from './features.module.scss';
import TitledText from '../TitledText/TitledText';
import color from '../../styles/colorScheme';
import textContent from '../../data/textContent';
import FeaturesCard from '../FeaturesCard/FeaturesCard';

import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import Footer from '../Footer/Footer';

const icons = [icon1, icon2, icon3];

const { features } = textContent;
const Features = () => (
  <div className={style.section}>
    <TitledText title={features.title} text={features.text} color={color.baseRed} reverse="true" />
    <div className={style.container}>
      {
        features.features.map((item, index) => (
          <FeaturesCard key={item.id} title={item.title} text={item.text} icon={icons[index]} />
        ))
      }
    </div>

    <Footer />
  </div>
);

export default Features;
