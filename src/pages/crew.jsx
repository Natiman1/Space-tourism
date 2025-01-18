import { useState } from 'react';
import { crew } from '../data';

const Crew = () => {

  const [people] = useState(crew);
  const [currentCrew, setCurrentCrew] = useState(0);

  const { name, images, role, bio } = people[currentCrew];


  return (
    <section className="crew">
      <h1><span>02</span> Meet your crew</h1>
      <div className="crew__container">
        <article>
          <img src={images.png} alt={name} />
        </article>
        <article className="crew_text_box">

          <h3>{role}</h3>
          <h2>{name}</h2>
          <p>{bio}</p>
          {people.map((person, index) => (
            <button
              key={index}
              onClick={() => setCurrentCrew(index)}
              className={index === currentCrew ? "crew__btn active" : "crew__btn"}
            >
            </button>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Crew