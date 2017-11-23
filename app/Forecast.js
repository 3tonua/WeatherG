import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { getForecast } from './actions/WeatherActions'

const styleBlock = {
    display: "inline-block"
};

@connect((store) => {
    return {
        forecast: store.forecast
    }
})

class Forecast extends React.Component {
    constructor(){
        super();
        this.state = {
            forecast: []
        }
    }
    componentDidMount(){
        this.props.dispatch(getForecast());
    }
    render() {
        return (
            <Col>
                <Grid>
                    <Row>
                        {
                            this.props.forecast.weather_forecast.map((forecast)=>{
                                return <div key={forecast.dt}>
                                    <Col xs={6} sm={4} md={3}>
                                        <Paper className="forecastBox" zDepth={2} >
                                            <span style={styleBlock}>
                                                <h3>{moment(forecast.dt*1000).locale('ru').format('dddd')}</h3>
                                                <p><img src="./img/thermometer.png" alt=""/> {forecast.temp.max.toFixed()} <sup>o</sup>C | {forecast.temp.min.toFixed()} <sup>o</sup>C </p>
                                                <p> <img src="./img/wind-sign.png" alt=""/> 7 км/ч</p>
                                            </span>
                                        </Paper>
                                    </Col>
                                </div>
                            })
                        }
                    </Row>
                </Grid>
            </Col>
        )}
}
export default Forecast;