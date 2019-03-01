import React, {Component, Fragment} from 'react';
import messages from '../message'

import '../less/Message.css';

class Message extends Component{

    state = {
        messages: messages,
    };

    render() {
        const messageId = this.props.match.params.id;
        const message = messages.find( message => message.id === messageId);

        return (
            <Fragment>
                <div className='message-container Message'>
                    <p>From: {message.senderName} ({message.senderEmail})</p>
                    <p>To: you</p>
                    <p>Subject: {message.subject}</p>
                    <hr />
                    <p>{message.body}</p>
                </div>
            </Fragment>
        );
    }
}

export default Message;