import React from 'react'
import ContactForm from './ContactForm';
import "../Styles/Contact.css";
import "../Styles/App.css";


const Contact = () => {
  return (
    <main>
      <section id='section1-contact'>
        <div id="section1-column1-contact">
          <h2>Contact</h2>
        </div>
      </section>

      <section id='section2-contact'>
        <div id="section2-column1-contact">
          <ContactForm />
        </div>
        <div id="section2-column2-contact">
          <div className="sub-heading">Lorem ipsum</div>
          <p className='sub-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam aut dolores quia officia maxime recusandae eum non necessitatibus sed placeat aperiam consectetur, commodi ex earum. Illo ratione error repellat.</p>
        </div>
      </section>


    </main>
  )
}

export default Contact



