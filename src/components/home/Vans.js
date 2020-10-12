import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemVans from './ItemVans';
import axios from 'axios';
import {connect} from 'react-redux';
import {showsneakerrequest} from '../../actions/actions';
import { thisExpression } from '@babel/types';
class Vans extends Component {
    
    componentDidMount(){
        this.props.fetchAll();
    }
    render() {
        const {sneakers}=this.props;
        const vans = [];
        for (var i = 0; i < sneakers.length; i++) {
            if (sneakers[i].brand === 'Vans') {
                vans.push(sneakers[i])
            }
        }
        const current=vans.slice(0, 8);
        let listvans = current.map((vans, index) => {
            return (
                <ItemVans vans={vans} key={index} />
            );
        })
        return (
            <section class="vans">
                <div class="container">
                    <div class="row-vans"></div>
                    <div class="row">
                        {listvans}
                    </div>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4" id="col-sm-4">
                            <Link to="/shop/Vans">
                                <button id="button">Chi Tiết<i class="fas fa-arrow-right"></i></button>
                            </Link>
                        </div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
            </section >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sneakers: state.sneaker
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {  
        fetchAll: () => {
            dispatch(showsneakerrequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Vans);