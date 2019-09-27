import React from 'react';

export default class NextMonth extends React.Component {

    render() {
        return (
            <a onClick={this.props.onClickAction}>NextMonth</a>
        )
    }
}
