import React, {Component, Fragment} from 'react'

import messages from '../message.json'
import MessagePreview from './MessagePreview'

import '../less/InboxPage.css'
import {Link} from "react-router-dom";
import Message from "./Message";

class InboxPage extends Component{
    state = {
        messages: messages
    };

    render (){
        return (
            <Fragment>
                <div className='InboxPage'>
                    <div className='messages'>
                        {messages.map(message => (
                            <Link to={`/inbox/message/${message.id}`} key={message.id}>
                                <MessagePreview
                                    title={message.subject}
                                    senderName={message.senderName}
                                />
                            </Link>
                        ))
                        }
                    </div>
                </div>
            </Fragment>

        );
}
}

export default InboxPage;