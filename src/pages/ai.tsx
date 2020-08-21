import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import SocialButtons from "../components/Buttons/Buttons";
import { Link } from "@reach/router";
import GAN from "./BigBiGAN.jpeg"

const ai = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="computer" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <img src={GAN} alt="I"></img>
        <img src={GAN} alt="I"></img>
      </Segment>
      <Segment vertical>
        <img src={GAN} alt="I"></img>
        <img src={GAN} alt="I"></img>
      </Segment>
    </Container>
  );
};

export default withLayout(ai);