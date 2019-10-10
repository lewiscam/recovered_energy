import React, { useState } from "react"
import { Form, Button } from "semantic-ui-react"

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <Form.Input fluid label="First name" placeholder="First name" required />
      <Form.Input fluid label="Last name" placeholder="Last name" required />
      <Form.Input
        fluid
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        type="tel"
        required
      />
      <Form.Input
        fluid
        label="Email"
        placeholder="example@mail.com"
        type="email"
        required
      />
      <Form.TextArea
        label="Message"
        placeholder="Send us a message..."
        required
      />
      <Button type="submit" primary>
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
