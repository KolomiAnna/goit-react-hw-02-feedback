import React from "react";
import Test from 'components/test/Test';
import Modal from 'components/test/Modal';
import Header from 'components/test/Header';
import ToDoList from 'components/test/ToDoList';


export class App extends React.Component {
  state = {
    isShowModal: false,
  }

  showModal = () => { 
    this.setState({ isShowModal: true })
  }

  closeModal = () => {
    this.setState({isShowModal:false,})
  }
  
render(){
  return (
    <>
      {/* <Feedback
      /> */}
      <Header showModal={this.showModal} />
      <Test />

      {this.state.isShowModal && (<Modal closeModal={this.closeModal}> SOMEEEEE </Modal>)}
      <ToDoList /> 
    </>
  );
  };
}

