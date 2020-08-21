import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          Blog
            <Header.Subheader>
            blog about some of the more interesting books
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
