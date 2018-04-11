import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import PropTypes from 'prop-types';

class ModalParent extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const whereTo = this.props.whereTo
    return (
      <div className="ModalParent">
        <button onClick={() => this.toggleModal()}>
          Open the modal
        </button>

        <ModalContainer whereTo={whereTo} show={this.state.isOpen}
          onClose={() => this.toggleModal()}>
          Here's some content for the modal
        </ModalContainer>
      </div>
    );
  };
}

ModalParent.propTypes = {
  whereTo: PropTypes.string,
  children: PropTypes.node
};


export default ModalParent;