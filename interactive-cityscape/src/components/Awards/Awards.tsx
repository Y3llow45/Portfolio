import { motion } from 'framer-motion';
import './Awards.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const awardsData = [
  {
    year: 2024,
    award: true,
    title: ' place in the National Spring Information Technology Tournament',
    link: 'https://it-vt.eu/page-view/80/%D0%9A%D0%BB%D0%B0%D1%81%D0%B8%D1%80%D0%B0%D0%BD%D0%B5+2024/category/23'
  },
  {
    year: 2023,
    award: true,
    title: ' place in the National Spring Information Technology Tournament',
    link: 'https://it-vt.eu/page-view/77/%D0%9A%D0%BB%D0%B0%D1%81%D0%B8%D1%80%D0%B0%D0%BD%D0%B5+2023/category/23'
  },
  {
    year: 2023,
    award: false,
    title: 'Laureate of the Chamber of Architects in Bulgaria',
    link: 'https://odk-varna.com/wp-content/uploads/2023/02/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB-%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B8-%D0%BF%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D1%86%D0%B8-%D0%B2-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B8.pdf'
  }
];

const Awards = () => {
  const { setRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="awards" ref={setRef}>
      <h2>Awards</h2>
      <div className="awards-list">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            className="award-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              {award.award ? <img src="/images/first.png" alt="First" className='award-img' /> : 
                <img src="/images/laureate.png" alt="First" className='award-img' />}
              <p className='info-text'>{award.title} ({award.year})</p>
            </div>
            <a href={award.link} target="_blank" rel="noopener noreferrer">Results</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
