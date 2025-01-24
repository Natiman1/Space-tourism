import { useState } from "react"

import { destinations } from "../data"
// import moon from '../assets/destination/image-moon.png'


const Destination = () => {

  const [planets] = useState(destinations);
  const [activePlanet, setActivePlanet] = useState(0);

  const { name, description, images, distance, travel } = planets[activePlanet];
  return (
    <section className="destination">
      <h1><span>01</span> Pick your destination</h1>

      <div className="destination__container">
        <article>
          <img src={images.png} alt={name} />
        </article>
        <article className="destinations_text_box">
          <div className="destinations">
            {planets.map((planet, index) => (
              <button
                key={index}
                onClick={() => setActivePlanet(index)}
                className={index === activePlanet ? "destinations__btn active" : "destinations__btn"}
              >
                {planet.name}
              </button>
            ))}
          </div>

          <h2>{name}</h2>
          <p>{description}</p>
          <div className="destination_divider"></div>
          <div className="destination__info">
            <h3>Avg. Distance <span className="destination_no">{distance}</span></h3>
            <h3>Est. Travel Time  <span className="destination_no">{travel}</span></h3>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Destination