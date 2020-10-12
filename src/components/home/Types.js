import React, { Component } from 'react';
import Vans from './Vans';
import Converse from './Converse';
import Palladium from './Palladium';
import {showcartrequest} from '../../actions/actions';
import {connect} from 'react-redux';
class Types extends Component {
componentDidMount(){
this.props.fetchAll();
}
    render() {
        return (
           <div>
               <Vans />
               <Converse />
               <Palladium />
           </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      cart: state.cart
    };
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: () => {
            dispatch(showcartrequest());
        }
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Types);