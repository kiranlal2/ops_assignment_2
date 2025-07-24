import bgimg from '../assets/parallax/gallexy_1.webp';
import stars from '../assets/parallax/gallexy_3.webp';
import planet1 from '../assets/parallax/gallexy_4.webp';
import planet2 from '../assets/parallax/gallexy_5.webp';
import planet3 from '../assets/parallax/gallexy_6.webp';
import planet4 from '../assets/parallax/gallexy_7.webp';
import planet5 from '../assets/parallax/gallexy_8.webp';
import planet6 from '../assets/parallax/gallexy_9.webp';
import stones from '../assets/parallax/gallexy_10.webp';
import '../styles/Home.css'

export default function Home() {
  return (
    <main className='home_main'>
        <section className="parallax_container">
            <div className="parallax_layer bg_layer">
              <img src={bgimg} alt="background" id="bg_img" className="parallax_img" loading='lazy' />
            </div>
            {/* <div className="parallax_layer space_layer">
              <img src={space} alt="Space" id="space_img" className="parallax_img" loading='lazy' />
            </div> */}
            <div className="parallax_layer stars_layer">
              <img src={stars} alt="Stars" id="stars_img" className="parallax_img" loading='lazy' />
            </div>
            <div className="parallax_layer planet1_layer">
              <img src={planet1} alt="planet1" id="planet1_img" className="parallax_img" loading='lazy' />
            </div>
            <div className="parallax_layer planet2_layer">
              <img src={planet2} alt="planet2" id="planet2_img" className="parallax_img" loading='lazy' />
            </div>
            <div className="parallax_layer planet3_layer">
              <img src={planet3} alt="planet3" id="planet3_img" className="parallax_img" loading='lazy' />
            </div>
            <div className="parallax_layer planet4_layer">
              <img src={planet4} alt="planet4" id="planet4_img" className="parallax_img" loading='lazy' />
            </div>
            <div className="parallax_layer planet5_layer">
              <img src={planet5} alt="planet5" id="planet5_img" className="parallax_img" />
            </div>
            <div className="parallax_layer planet6_layer">
              <img src={planet6} alt="planet6" id="planet6_img" className="parallax_img" />
            </div>
            <div className="parallax_layer stones_layer">
              <img src={stones} alt="Stones" id="stones_img" className="parallax_img" />
            </div>
            <div className="content_layer">
              <div className="parallax_text">
                <h1 className='parallax_title'>Explore the Parallax space</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat, libero nulla, officiis adipisci fugiat molestias nostrum quia optio, doloribus iste veniam porro laboriosam ea quae impedit delectus voluptate nam!</p>
              </div>
            </div>
        </section>
       
        <section className="home_content">
            <div className="content_container">
              <h1 className="content_text">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deleniti dolor. Architecto recusandae, incidunt aliquam dicta similique perspiciatis reprehenderit? Unde minima alias corrupti culpa eaque, at nobis consequuntur maiores incidunt?</p>
            </div>
          
            <div className="content_container">
              <h1 className="content_text">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deleniti dolor. Architecto recusandae, incidunt aliquam dicta similique perspiciatis reprehenderit? Unde minima alias corrupti culpa eaque, at nobis consequuntur maiores incidunt?</p>
            </div>
          
            <div className="content_container">
              <h1 className="content_text">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deleniti dolor. Architecto recusandae, incidunt aliquam dicta similique perspiciatis reprehenderit? Unde minima alias corrupti culpa eaque, at nobis consequuntur maiores incidunt?</p>
            </div>
        </section>
    </main>
  )
}
