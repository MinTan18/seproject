import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Station.scss";
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class Station extends Component {

    render() {

        return (
            <div className = "section-share station-section ">
                <div className = "station-container">
                    <div className = "station-header">
                       <span className = "title-section">
                         Our Station
                        </span> 
                    </div>
                <div className = "section-body">
                    <Slider {...this.props.settings}>
                
                <div className = "station-customize">
                        <div className = "bg-image station-img" />
                        <div className = "position text-center">
                        <div className = "position text-center">
                        <div>SaiGon Station </div>
                        </div>
                        </div>

                </div>
                
                <div className = "station-customize">
                     <div className = "bg-image station-img" />
                     <div className = "position text-center">
                        <div>BienHoa Station </div>
                        </div>
                </div>
                <div className = "station-customize">
                     <div className = "bg-image station-img" />
                     <div className = "position text-center">
                        <div>HaiPhong Station </div>
                        </div>
                </div>
                <div className = "station-customize">
                     <div className = "bg-image station-img" />
                     <div className = "position text-center">
                        <div>HaNoi Station </div>
                        </div>
                </div>
                     </Slider>

                </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
