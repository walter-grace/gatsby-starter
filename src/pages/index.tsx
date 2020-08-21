import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  ButtonGroup,
} from "semantic-ui-react";
import SocialButtons from "../components/Buttons/Buttons";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">StarFruit</Header>
        <Header inverted as="h2">A blog and webspace to keep some cool things.</Header>
        <ButtonGroup>
        <Button href="/blog"primary size="huge">Explore a project</Button>
        <Button basic color='teal' href="https://interact1vebook.netlify.app/"primary size="huge">Interactive Books</Button>
        </ButtonGroup>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Click around and learn more about the blog</Header>
            <p>
            “Good friends, good books, and a sleepy conscience: this is the ideal life.”
                </p>
            <Header>Add Recommendations</Header>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            <img src={'https://media.giphy.com/media/NFA61GS9qKZ68/source.gif'} alt="Cat">
            </img>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Sharing knowledge is one way we can all connect with each other.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
