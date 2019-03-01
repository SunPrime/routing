import React, { Component } from 'react';

import '../less/MessagePreview.css';

class MessagePreview extends Component {
    render() {
        const { title, senderName} = this.props;

        return (
            <div className='MessagePreview'>
                <div className='title'>
                    {title}
                </div>
                <div className='from'>
                    {`from ${senderName}`}
                </div>
            </div>
        );
    }
}

export default MessagePreview;