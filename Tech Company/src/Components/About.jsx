import React from 'react'
import "../Styles/About.css";
import "../Styles/App.css";
import pic3 from '../Images/pic3.jpg';

const About = () => {
  return (
    <main>
      <section id='section1-about'>
        <div id="section1-column1-about">
          <h2>About</h2>
        </div>
      </section>

      <section id='section2-about'>
        <div id="section2-column1-about">
          <img src={pic3} alt="" />
        </div>
        <div id="section2-column2-about">
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
      </section>
      
    </main>
  )
}

export default About