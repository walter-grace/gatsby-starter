import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class SocialButtons extends Component {
    render() {
        return (
            <div>
                <Button href="https://www.instagram.com/barringtonbookclub/" color='instagram'>
                <Icon name='instagram' /> Instagram
                </Button>
                <Button>
                    <Icon name='slack hash' /> Slack Channel(coming)
                </Button>
                <Button>
                    <Icon name='exchange' /> Sell your books
                </Button>
            </div>
        );
    }
}

export default SocialButtons;