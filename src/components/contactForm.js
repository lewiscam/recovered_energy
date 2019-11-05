import React from "react"
import { Form, Button } from "semantic-ui-react"

const ContactForm = () => {
  return (
    <Form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Form.Input
        fluid
        label="Name"
        name="name"
        placeholder="Name"
        required
        id="contact-name"
      />
      <Form.Input
        fluid
        label="Company"
        name="company"
        placeholder="Company"
        id="contact-company"
      />
      <Form.Input
        fluid
        label="Phone Number"
        name="phone"
        placeholder="(XXX) XXX-XXXX"
        type="tel"
        required
        id="contact-phone"
      />
      <Form.Input
        fluid
        label="Email"
        name="email"
        placeholder="example@mail.com"
        type="email"
        required
        id="contact-email"
      />
      <Form.TextArea
        label="Message"
        name="message"
        placeholder="Send us a message..."
        required
        id="contact-message"
      />
      <Button type="submit" primary>
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
