import React from 'react';
import AppBar from 'material-ui/AppBar';
import Current from './Current';
import Forecast from './Forecast';

class Main extends React.Component {
    render() {
        return(
            <div>
                <AppBar
                    title="Погода"
                    showMenuIconButton={false}
                />
                    <Current/>
                    <Forecast/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;