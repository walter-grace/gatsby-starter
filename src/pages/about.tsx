import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import SocialButtons from "../components/Buttons/Buttons";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="book" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> 
          Easy place to keep some of my data. Actor, Writer, Programmer.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
