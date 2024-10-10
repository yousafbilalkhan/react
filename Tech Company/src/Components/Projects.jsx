import React from 'react'
import "../Styles/Projects.css";
import "../Styles/App.css";
import pic1 from '../Images/pic1.jpg';
import pic2 from '../Images/pic2.jpg';
import pic3 from '../Images/pic3.jpg';

const Projects = () => {
  return (
    <main>
      <section id='section1-projects'>
        <div id="section1-column1-projects">
          <h2>Projects</h2>
        </div>
      </section>

      <section id='section2-projects'>
        <div id="section2-column1-projects">
          <img src={pic1} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
        <div id="section2-column2-projects">
          <img src={pic2} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
        <div id="section2-column3-projects">
          <img src={pic3} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
      </section>

      <section id='section3-projects'>
        <div id="section3-column1-projects">
          <img src={pic1} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
        <div id="section3-column2-projects">
          <img src={pic2} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
        <div id="section3-column3-projects">
          <img src={pic3} alt="" />
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
      </section>

    </main>
  )
}

export default Projects