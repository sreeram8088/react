import React from 'react';
class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor');
    }
    state ={
        a :0
    };

    componentWillMount = () =>{
        console.log('Component Will Mount');
    };

    componentDidMount = () =>{
        console.log('Component Did Mount');
    };

    shouldComponentUpdate = () =>{
        console.log('shouldComponentUpdate');
        return true;
    };
    
    componentWillUpdate = () =>{
        console.log('componentWillUpdate');
    };

    changeState = e => {
        this.setState({
            a:this.state.a + 10
        });
    };

    render () {
        return (
            <div>
                Life Cycle Demo
                <button onClick={this.changeState}>Change State</button>
                {this.state.a}
            </div>
        );
    }

}
export default LifeCycleDemo;