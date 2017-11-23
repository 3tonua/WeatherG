import React from 'react';
import moment from 'moment';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { getCurrent } from './actions/WeatherActions';

@connect((store) => {
    return {
        current: store.current
    }
})

export default class Current extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount(){
        this.props.dispatch(getCurrent());
    }
    render() {
        return (
            <Col>
                {this.props.current.loading
                        ? <div className="loaderbox">
                            <div className="loader">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                        :  ""}

                <Grid>
                    <Row>
                        <Col xs={12} md={6} mdOffset={3}>
                            <Paper className="currentBox" zDepth={2} >
                                <p className="currentName">
                                    {this.props.current.weather_current.name }
                                </p>
                                <div className="currentTemp" >
                                    {<span  > {this.props.current.weather_current && this.props.current.weather_current.main && this.props.current.weather_current.main.temp} <sup>o</sup>C</span>}
                                </div>
                                <div>
                                     {<div className="currentTempDop" > min: {this.props.current.weather_current && this.props.current.weather_current.main && this.props.current.weather_current.main.temp_min} <sup>o</sup>C</div> }

                                     {<div className="currentTempDop" > max: {this.props.current.weather_current && this.props.current.weather_current.main && this.props.current.weather_current.main.temp_max} <sup>o</sup>C</div> }
                                </div>
                                <p className="lastUpdate">
                                    Обновлено {moment().locale('ru').startOf('hour').fromNow() }
                                </p>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Col>
        )
    }
}