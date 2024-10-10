import React from 'react'
import "./Home.css";
import "../../../Styles/App.css";
import "../../../Assets/Fonts/Poppins.css";
import pic1 from '../../../Assets/Images/pic1.jpg';
import pic2 from '../../../Assets/Images/pic2.jpg';
import pic3 from '../../../Assets/Images/pic3.jpg';


const Home = () => {
  return (
    <main>

      <section id='section1-home'>
        <div id='section1-column1-home'>
          <div className="heading poppins-medium">IT Consulting & Services</div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </section>

      <section id='section2-home'>
        <div id="section2-column1-home">
          <div className="heading">With the Right Software, Great Things Can Happen</div>
        </div>
      </section>

      <section id='section3-home'>
        <div id="section3-column1-home">
        <div className="heading">What We Offer</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo vero veniam aliquid, praesentium omnis delectus explicabo repellat autem quo, in soluta quis, pariatur rerum saepe deserunt ratione dolor dolores?</p>
        </div>
      </section>

      <section id='section4-home'>
        <div id='section4-column1-home'>
          <img src={pic1} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
        <div id='section4-column2-home'>
          <img src={pic2} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias impedit nulla illum recusandae reiciendis facere nam id, esse ipsum, fugit aperiam, nobis sint cum vitae sunt repudiandae iusto quibusdam provident.</p>
        </div>
        <div id='section4-column3-home'>
          <img src={pic3} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam vel ipsa placeat reprehenderit, dolores ducimus odio vero eius debitis odit similique quod hic molestias consequatur libero iusto, reiciendis facilis?</p>
        </div>
      </section>

    </main>
  )
}

export default Home;
