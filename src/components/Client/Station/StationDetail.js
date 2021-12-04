import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../../containers/HomePage/HomeHeader';
import './StationDetail.scss';
import Detail1 from "../../../assets/stationimg/station1.jpg";

class StationDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }
    

    render() {
        
        // console.log(this.props.match.param.id)
        // console.log('check new', this.props.params.id);
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
           <>
               <HomeHeader 
                isShowBanner = {false}
               />
               <div className = "station-detail-container">
                  <div className = "intro-station">
                      <div className = "content-left">
                          <div className = "detail-img">

                          </div>
                      </div>
                      <div className = "content-right">
                          <div className = "up">
                              SaiGon Station
                          </div>
                          <div className = "down">
                              <div className = "down-content">
                                  Address: 1 Nguyen Thong Street District 3
                              </div>
                              <div className = "down-working-hours">
                                  Working hours: 
                              </div>
                              <div className = "hours-content">
                                  Monday-Friday: 7h30 - 22h30<br/>
                                  Sunday: Allday
                              </div>
                              <button className = "btn btn-buy">
                                  Buy Ticket
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className = "schedule">

                  </div>
                  <div className = "detail-info">

                  </div>
                  <div className = "comment">

                  </div>
               </div>
           </>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail);
