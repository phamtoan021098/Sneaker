import React, { Component } from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import {connect} from 'react-redux';
import {showuserrequest} from '../../actions/actions';
class Login extends Component {
    componentDidMount(){
        this.props.FecthAll();
    }
    render() {
        
        return (
            <div>
                <Banner />
                <section class="login">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6" id="register">
                                <FormRegister/>
                            </div>
                            <div class="col-sm-6" id="login">
                                <FormLogin history={this.props.history}/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        FecthAll: () => {
            dispatch(showuserrequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);