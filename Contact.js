import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ff00ff;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 20px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #111;
  color: #fff;

  &:focus {
    border-color: #ff00ff;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #111;
  color: #fff;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background: #ff00ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #00ffff;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <Text>Feel free to reach out if you have any questions or would like to discuss opportunities!</Text>
      <Form action="mailto:contact.adnanks@gmail.com" method="post" encType="text/plain">
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
      <Text>
        <strong>Email:</strong> contact.adnanks@gmail.com<br />
        <strong>Phone:</strong> +91 9744466737
      </Text>
    </ContactContainer>
  );
};

export default Contact;
