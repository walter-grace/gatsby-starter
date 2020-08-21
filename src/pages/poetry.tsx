import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import SocialButtons from "../components/Buttons/Buttons";
import { Link } from "@reach/router";

const poetry = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="write square" />
          <Header.Content>
            Poetry
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
        The wind blows east. The trees
        rise. The house looks as if it had stood still for hours. The air smells of
        earthy soil and fresh leaves.
        He sits at the window. He looks out over the city. He thinks of
        the pioneers who came before him, of the steel factories, of the
        communes, of the skyscrapers. He thinks of the road that led from
        these to these. He thinks of the houses that rose and fell on the hillsides,
        the pavements, the shops, the factories. He thinks of the men who walked
        that road, carrying their seeds, their knowledge, their hope, their
        wages, to this house.
        </p>
      </Segment>
      <Segment vertical>
        <p>
        What is needed in this moment? We must have beautiful things. The earth, the trees, the sounds of the sea. Let us say yes to all the things that are beginning
        to awaken in us. We must say ues to each other, yes to ourselves.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(poetry);