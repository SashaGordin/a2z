import React from 'react';
import './Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import Why from './Why';

function Homepage() {

  return (
    <div className="homepage">
      <div className="banner">
        <h1>Your Food & Beverage Consulting Partner</h1>
        <p>Empowering entrepreneurs to create sustainable and tech-driven products</p>
      </div>
      <div className="content-wrapper">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We are committed to helping food and beverage entrepreneurs craft sustainable and technologically advanced products. Our mission revolves around cultivating leadership abilities and providing a comprehensive strategy for turning visionary ideas into reality.
          </p>
        </div>
        <div className="why">
          <h2> Why Hire Us</h2>
          <div className="why-wrapper">
            {<Why
              title="SPECIALIZED EXPERTISE"
              content_1="We are subject matter experts, possessing in-depth knowledge and experience that may not be available within your organization."
              content_2=" We bring specialized skills to tackle specific technical issues."
            />}
            {<Why
              title="OBJECTIVE INSIGHTS"
              content_1="We offer an outsider's perspective, allowing us to provide unbiased and objective insights into your technical challenges or projects."
              content_2=" We can identify solutions that might be overlooked internally."
            />}
            {<Why
              title="COST-EFFECTIVE"
              content_1="Hiring a full-time employee with specialized technical skills can be costly, especially if the need is temporary or project-specific."
              content_2=" We offer a cost-effective alternative, as you only pay for the duration of our engagement."
            />}
            {<Why
              title="FAST RESULTS"
              content_1="We can hit the ground running, using our expertise to deliver results quickly."
              content_2=" This can be crucial when time is of the essence, such as in urgent projects or when responding to technical issues."
            />}
          </div>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <p>
            Ready to discuss your project or have questions? We're here to help. Contact us today to get started.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;