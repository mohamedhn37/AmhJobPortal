import React from 'react';
import Partenaire1 from '../../img/Partenaire1.png';
import Partenaire2 from '../../img/Partenaire2.png';
import Partenaire3 from '../../img/Partenaire3.png';
import Partenaire4 from '../../img/Partenaire4.png';
import Partenaire5 from '../../img/Partenaire5.png';
import Partenaire6 from '../../img/Partenaire6.png';
import SeactionHead from '../SectionHead/SeactionHead';
import './Partner.css';

const Partner = () => {
  return (
    <>
      <div className="container my-5">
        <SeactionHead title="Nos Partenaires" />
        <div className="partner-carousel">
          <div className="carousel-slide">
            <img src={Partenaire1} alt="Partenaire1" />
            <img src={Partenaire2} alt="Partenaire2" />
            <img src={Partenaire3} alt="Partenaire3" />
            <img src={Partenaire4} alt="Partenaire4" />
            <img src={Partenaire5} alt="Partenaire5" />
            <img src={Partenaire6} alt="Partenaire6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
