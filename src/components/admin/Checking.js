import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatechecking, deletesneakerrequest } from '../../actions/actions';
import axios from 'axios';
class Checking extends Component {

    Total=(a,b,c)=>{
        var result=0;
        result=a*b*(1-c/100);
        return result;
    }
    render() {
        const { checking } = this.props;
        return (
            <tr>
                <td>
                    <p>{checking.name}</p>
                </td>
                <td>
                    <p>{checking.quantity}</p>
                </td>
                <td><img src={checking.img} style={{ height: '100px', width: '100px' }}
                    alt="" /></td>
                <td>
                    <p>{checking.size}</p>
                </td>
                <td>
                    <p>${checking.price}</p>
                </td>
                <td>
                    <p>{checking.discount}</p>
                </td>
                <td>
                    <p>{this.Total(checking.price,checking.quantity,checking.discount)}</p>
                </td>

            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Checking);