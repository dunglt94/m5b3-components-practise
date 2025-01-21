import React, { Component } from 'react';
import Hello from "./components/Hello";

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    delete = () => {
        this.setState({ display: false });
    };

    create = () => {
        this.setState({display: true});
    }

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello />;
            return (
                <div style={{ textAlign: 'center' }}>
                    {comp}
                    <button onClick={this.delete}>
                        Delete the component
                    </button>
                </div>
            );
        }
        if (!this.state.display) {
            return (
                <div style={{textAlign: 'center'}}>
                    <button onClick={this.create}>
                        Create the component
                    </button>
                </div>
            )
        }
    }
}

export default App3;