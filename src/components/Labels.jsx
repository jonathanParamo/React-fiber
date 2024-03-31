export default function Labels() {
  return(
    <div className='pages'>
      <div className="pages_wrapper">
        <div
          id='page-1'
          className='page page--welcome page--intro'
        >
          <h1 className='message'>Artics Pro One</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'
        >
          <h1 className='message'>Headband</h1>
          <p className='message--sub'>
            Immerse yourself in an unprecedented listening experience with the
            latest PC audio headsets. Designed for the most discerning audiophiles
            and digital gaming warriors, these headbands are the portal to a world
            where every musical note,every sound effect, is felt with extraordinary
            clarity and depth.
          </p>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'
        >
          <h1 className='message'>Sound control</h1>
          <p className='message--sub'>
            Immersive Sound: Equipped with high-fidelity drivers and virtual surround sound technology,
            these headphones immerse you in a rich, multidimensional listening experience, where every
            detail comes to life.

            Extreme Comfort: Designed with long sessions in mind, these headbands feature soft padding
            and ergonomic fit, allowing you to escape to distant worlds without the slightest hint of discomfort.

            Noise Cancellation: Active noise cancellation technology isolates you from the outside world, allowing
            you to fully concentrate on your game or that piece of music that transports you to another place.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--batery page--hidden'
        >
          <h1 className='message'>Great Batery</h1>
          <p className='message--sub'>
            The freedom to move without restraints comes true with the long-lasting battery for headbands. Designed to
            accompany you on your audio adventures for hours, this battery gives you the power you need to immerse
            yourself in your favorite music, games or movies without interruptions. With powerful capacity and fast
            charging, youll never have to worry about missing a beat.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'
        >
          <h1 className='message'>Best Constriction</h1>
          <p className='message--sub'>
            Durability and Style: With a robust construction and elegant design, these headbands are not only made to last,
            but also to stand out in your setup.
          </p>
        </div>
        <div
          id='page-6'
          className='page page--bandlogo page--hidden'
        >
          <h1 className='message'>Get yous!</h1>
          <button className='buy'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}