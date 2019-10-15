import React from "react"
import { Grid, Icon, List } from "semantic-ui-react"
import ContactForm from "./../components/contactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <ContactForm />
        </Grid.Column>
        <Grid.Column>
          <List>
            <List.Item>
              <Icon name="address card" />
              <List.Content>
                <List.Header>Address</List.Header>
                <List.Description>
                  Recovered Energy, Inc.
                  <br /> 11455 N. Rio Vista Rd.
                  <br /> Pocatello ID 83202
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="phone" />
              <List.Content>
                <List.Header>Phone</List.Header>
                <List.Description>208-637-0645</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="fax" />
              <List.Content>
                <List.Header>Fax</List.Header>
                <List.Description>208-917-8601</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name="mail" />
              <List.Content>
                <List.Header>Email</List.Header>
                <List.Description>
                  <a href="mailto:support@recoveredenergy.com">
                    support@recoveredenergy.com
                  </a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default ContactPage
