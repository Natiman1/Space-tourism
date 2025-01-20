import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { technology } from '../data';

const Technology = () => {

  const [spaceSheeps] = useState(technology);
  const [currentSpaceSheep, setCurrentSpaceSheep] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  const { name, images, description } = spaceSheeps[currentSpaceSheep];

  return (
    <section className="technology">
      <h1><span>03</span> Space Sheep Technology</h1>
      <div className="technology__container">
        <article>
          <img src={isTabletOrMobile ? images.landscape : images.portrait } alt={name} />
        </article>
        <article className="technology_text_box">
          <div>
            <p>THE TERMINOLOGY…</p>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className='btn_container'>
          {spaceSheeps.map((spaceSheep,index) => (
            
              <button
                key={index}
                onClick={() => setCurrentSpaceSheep(index)}
                className={index === currentSpaceSheep ? "technology__btn active" : "technology__btn"}
              >
                {index + 1}
              </button>
          ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Technology