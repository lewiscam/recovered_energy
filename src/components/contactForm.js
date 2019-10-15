import React from "react"
import { Form, Button } from "semantic-ui-react"

const ContactForm = () => {
  return (
    <Form name="contact" method="post" action="/success" data-netlify="true">
      <Form.Input
        fluid
        label="First name"
        name="firstName"
        placeholder="First name"
        required
      />
      <Form.Input
        fluid
        label="Last name"
        name="lastName"
        placeholder="Last name"
        required
      />
      <Form.Input
        fluid
        label="Phone Number"
        name="phone"
        placeholder="(XXX) XXX-XXXX"
        type="tel"
        required
      />
      <Form.Input
        fluid
        label="Email"
        name="email"
        placeholder="example@mail.com"
        type="email"
        required
      />
      <Form.TextArea
        label="Message"
        name="message"
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
