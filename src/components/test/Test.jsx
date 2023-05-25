import React, { Component } from "react";


class Counter extends React.Component {
        state = {
            value:0,
        }


    handleIncrement = () => {
        this.setState(prevState => ({ value: prevState.value + 1 })
         );
    }

    handleDecrement = () => {
        this.setState(prevState =>  ({value: prevState.value - 1}));
    }
 
    render() {
        const { value } = this.state;
    return (
            <div >
                <button type="button" onClick={this.handleIncrement}>Increment by </button>
                <span>{value}</span>
                <button type="button" onClick={this.handleDecrement}>Decrement by </button>
            </div>
        );
    
}
}
export default Counter;




















// class Counter extends React.Component {

//     // код нижчче обробляє та спрощує бабл
//     // static defaultProps = {
//     //     step: 1,
//     // };
//     // constructor() {
//     //     super();
//     // this.state = {
//     //     value: 0,
//     //     step:1,
//     // };

//     state = {
//         value: 0,
//         step: 1,
//     }

//     handleIncrement = () => {
//         this.setState(
//             {
//                 value: 10,
//             }
//         );

//         console.log("збільшити");
//     }

//     handleDecrement = () => {
//         console.log("зменшиити");
//     }


//     render() {
//         // const { step } = this.props;

//         return (
//             <div>
//                 <button type="button" onClick={this.handleIncrement}>Increment by {this.state.step}</button>
//                 <span>{this.state.value}</span>
//                 <button type="button" onClick={this.handleDecrement}>Decrement by {this.state.step}</button>
//             </div>
//         );
//     }
// }

// export default Counter;