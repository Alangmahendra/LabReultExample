import React, { Component } from 'react'
import './SecondBar.css'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'



export default class SeconBar extends Component {


    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: this.props.title,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [2.0, 2.8, 3.0, 1.2, 1.8, 1.9, 4.0, 5.6, 6.0, 6.3, 4.8, 2.8, 3.4, 4.8]
                }
            ]
        };

        const popover = (
            <Popover
                id="popover-basic"
                placement="top"
                positionLeft={Number(this.props.left)}
                positionTop={Number(this.props.top)}>
                <Line data={data} width={1000} height={800} />
            </Popover>
        )
        const bar1 = {
            "width": this.props.bar1
        }
        const bar2 = {
            "width": this.props.bar2
        }
        const bar3 = {
            "width": this.props.bar3
        }

        if (this.props.bar3) {
            return (
                <div>
                    <Popover id="popover-basic"
                        placement="top"
                        positionLeft={Number(this.props.left)}
                        positionTop={Number(this.props.top)}>   
                        {this.props.popContent}
                    </Popover>
                    <div className="stacked-bar-graph">
                        <span style={bar1} className="bar-1"></span>
                        <span style={bar2} className="bar-2"> {this.props.message} </span>
                        <span style={bar3} className="bar-3"></span>
                    </div>
                </div>
            )
        } else {
            if (this.props.title) {
                return (
                    <OverlayTrigger placement="top" overlay={popover}>
                        <div>
                            <Popover id="popover-basic"
                                placement="top"
                                positionLeft={Number(this.props.left)}
                                positionTop={Number(this.props.top)}>
                                
                                {this.props.popContent}
                            </Popover>
                            <div className="stacked-bar-graph">
                                <span style={bar1} className="bar-2"> {this.props.message} </span>
                                <span style={bar2} className="bar-1">  </span>
                            </div>
                        </div>
                    </OverlayTrigger>
                )
            } else {
                return (
                    <div>
                        <Popover id="popover-basic"
                            placement="top"
                            positionLeft={Number(this.props.left)}
                            positionTop={Number(this.props.top)}>
                            
                            {this.props.popContent}
                        </Popover>
                        <div className="stacked-bar-graph">
                            <span style={bar1} className="bar-2"> {this.props.message} </span>
                            <span style={bar2} className="bar-1">  </span>
                        </div>
                    </div>
                )
            }
        }


    }
}
