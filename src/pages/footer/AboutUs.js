import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function AboutUs() {
  return (
    <Container>
      <h1>About Us</h1>
      <p>Welcome to our community-based game rating site!</p>
      <p>
        Our mission is to provide a platform where gamers can come together to
        share their experiences and opinions on various games. Whether you're
        passionate about console gaming, PC gaming, mobile gaming, or any other
        form of gaming, our website is the place for you.
      </p>
      <p>
        We believe that every gamer's voice deserves to be heard, and by
        crowdsourcing ratings and reviews from our community members, we aim to
        provide comprehensive and unbiased information to help gamers make
        informed decisions about which games to play.
      </p>
      <Row className="mt-5">
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a vibrant and inclusive community where
            gamers of all backgrounds and preferences can come together to
            discuss and rate their favorite games.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Values</h2>
          <ul>
            <li>Community</li>
            <li>Transparency</li>
            <li>Integrity</li>
            <li>Inclusivity</li>
            <li>Passion</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};