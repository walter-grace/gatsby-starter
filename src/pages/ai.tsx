import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import SocialButtons from "../components/Buttons/Buttons";
import { Link } from "@reach/router";
import GAN from "./BigBiGAN.jpeg";
import AttnGAN from "./AttnGAN.jpeg";
import Golem from "./golem.jpeg";
import Sketch from './PhotoSketch.png';
import Linkify from 'react-linkify';
const ai = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="computer" />
          <Header.Content>
            Gallery
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <h4>the weird stuff</h4>
        <Linkify>
        <h6>
          https://n1cozw0rldz.netlify.app/index
        </h6>
        </Linkify>
      </Segment>
      <Segment vertical>
        <img src={Sketch} alt="I"></img>
        <img src={GAN} alt="I"></img>
      </Segment>
      <Segment vertical>
        <img src={GAN} alt="I"></img>
        <img src={Sketch} alt="I"></img>
      </Segment>
      <Segment vertical>
        <img src={AttnGAN} alt="I"></img>
        <img src={Golem} alt="I"></img>
      </Segment>
      <Segment vertical>
        <img src={Golem} alt="I"></img>
        <img src={AttnGAN} alt="I"></img>
      </Segment>
    </Container>
  );
};

export default withLayout(ai);