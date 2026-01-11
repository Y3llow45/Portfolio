import { motion } from 'framer-motion';
import './Awards.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { trackEvent } from '../../ga';

interface AwardsProps {
  language: 'eng' | 'deu' | 'spa';
}

const awardsData = [
  {
    year: 2024,
    award: true,
    title: {
      eng: 'First place in the National Spring Information Technology Tournament',
      deu: 'Erster Platz im Nationalen Frühlingsturnier für Informationstechnologie',
      spa: 'Primer lugar en el Torneo Nacional de Primavera de Tecnología de la Información'
    },
    link: 'https://it-vt.eu/page-view/80/%D0%9A%D0%BB%D0%B0%D1%81%D0%B8%D1%80%D0%B0%D0%BD%D0%B5+2024/category/23'
  },
  {
    year: 2023,
    award: true,
    title: {
      eng: 'First place in the National Spring Information Technology Tournament',
      deu: 'Erster Platz im Nationalen Frühlingsturnier für Informationstechnologie',
      spa: 'Primer lugar en el Torneo Nacional de Primavera de Tecnología de la Información'
    },
    link: 'https://it-vt.eu/page-view/77/%D0%9A%D0%BB%D0%B0%D1%81%D0%B8%D1%80%D0%B0%D0%BD%D0%B5+2023/category/23'
  },
  {
    year: 2023,
    award: false,
    title: {
      eng: 'Laureate of the Chamber of Architects in Bulgaria',
      deu: 'Laureat der Architektenkammer in Bulgarien',
      spa: 'Laureado de la Cámara de Arquitectos en Bulgaria'
    },
    link: 'https://odk-varna.com/wp-content/uploads/2023/02/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB-%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B8-%D0%BF%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D1%86%D0%B8-%D0%B2-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B8.pdf'
  }
];

const Awards: React.FC<AwardsProps> = ({ language }) => {
    const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

    return (
        <section className="awards" ref={setRef}>
          <h2>{language === 'eng' && 'Awards'}{language === 'deu' && 'Auszeichnungen'}{language === 'spa' && 'Premios'}</h2>
          <div className="awards-list">
            {awardsData.map((award, index) => (
              <motion.div
                key={index}
                className="award-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {award.award ? <img src="/images/first.png" alt="First" className='award-img' /> : 
                    <img src="/images/laureate.png" alt="Laureate" className='award-img' />}
                  <p>{award.title[language]} ({award.year})</p>
                </div>
                <a href={award.link} target="_blank" rel="noopener noreferrer" 
                onClick={() =>
                trackEvent('click_award_link', {
                  section: 'awards',
                  year: award.year,
                  type: award.award ? 'first_place' : 'laureate'
                })}>Results</a>
              </motion.div>
            ))}
          </div>
        </section>
    );
};

export default Awards;
