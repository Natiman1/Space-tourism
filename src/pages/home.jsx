// 

const Home = () => {
  {/* {data.destinations.map((destinations, index) => (
          <h1 key={index}>{destinations.name}</h1>
        ))} */}
  return (
    <section className="home">
      <div className="home_container">
        <h5>So, you want to travel to</h5><br /><span className="span-text">Space</span>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="explore">
        <p>Explore</p>
      </div>
    </section>
  )
}

export default Home