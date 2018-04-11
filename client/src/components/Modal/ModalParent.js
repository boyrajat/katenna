import React, { Component } from 'react';
import ModalContainer from './ModalContainer';

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

    return (
      <div className="ModalParent">
        <button onClick={() => this.toggleModal()}>
          Open the modal
        </button>

        <ModalContainer show={this.state.isOpen}
          onClose={() => this.toggleModal()}>
          Here's some content for the modal
        </ModalContainer>
      </div>
    );
  };
}

export default ModalParent;