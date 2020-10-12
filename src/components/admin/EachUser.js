import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteuserrequest } from '../../actions/actions';
import axios from 'axios';
class EachUser extends Component {
   onDelete=()=>{
       if(window.confirm('Bạn có chắc muốn xóa không?')){
           this.props.onDelete(this.props.user._id)
       }
   }
    render() {
        const { user } = this.props;
         //console.log(sneaker)
        return (
            <tr>
                <td>
                    <p>{user._id}</p>
                </td>
                <td>
                    <p>{user.name}</p>
                </td>
                <td>
                    <p>{user.username}</p>
                </td>
                <td>
                    <p>{user.email}</p>
                </td>
                <td>
                    <p>{user.phone}</p>
                </td>
                <td>
                    <a id="delete" onClick={this.onDelete}><i class="far fa-trash-alt"></i></a>
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
       onDelete:(id)=>{
           dispatch(deleteuserrequest(id));
       }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EachUser);