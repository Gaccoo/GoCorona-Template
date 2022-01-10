import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

export const homeContent = {
  hero: {
    title: 'Take care of yours family’s health.',
    text: 'All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.',
  },
  coronaApp: {
    title: 'Stay safe with GoCorona.',
    text: '24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.',
  },
  experts: {
    title: 'Talk to experts.',
    text: 'Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.',
  },
  features: {
    title: 'Healthcare at your Fingertips.',
    text: 'Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.',
    features: [
      {
        title: 'Symptom Checker', text: 'Check if you are infected by COVID-19 with our Symptom Checker', id: 1, icon: { icon1 },
      },
      {
        title: '24x7 Medical support', text: 'Consult with 10,000+ health workers about your concerns.', id: 2, icon: { icon2 },
      },
      {
        title: 'Conditions', text: 'Bringing premium healthcare features to your fingertips.', id: 3, icon: { icon3 },
      },
    ],
  },
};

export default homeContent;
