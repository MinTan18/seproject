import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from "../../../services/userService";


class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender');
            if(res && res.errCode ===0) {
                this.setState({
                    genderArr: res.data
                })
            }
            console.log("check res", res);

        }catch(e) {
            console.log(e);
        }
    }


    render() {
        let genders = this.state.genderArr;
        return (
            <div className = "user-redux-container">
                <div className = 'title'>\
                    USER MANAGE
                </div>
                <div className = "user-redux-body">
                    <div className = "container">
                        <div className = "row">

                        </div><form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress2">First name</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputCity">Last Name</label>
                                <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                <div className="form-group col-md-4">
                                <label for="inputState">Gender</label>
                                {genders && genders.length > 0 && 
                                genders.map((item,idenx) => {
                                    return (
                                        <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                    )
                                })}
                                
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
