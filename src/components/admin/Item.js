import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletesneakerrequest, editingsneaker } from '../../actions/actions';
import axios from 'axios';
class Item extends Component {
    onUpdate = () => {
        this.props.onEditing(this.props.sneaker);
    }
    onDelete = () => {
        if (window.confirm('Bạn có chắc muốn xóa không ?')) {
            this.props.onDeleteItem(this.props.sneaker._id);
        }
    }
    render() {
        const { sneaker } = this.props;
         //console.log(sneaker)
        return (
            <tr>
                <td>
                    <p>{sneaker.name}</p>
                </td>
                <td>
                    <p>${sneaker.price}</p>
                </td>
                <td>{sneaker.brand}</td>
                <td>{sneaker.code}</td>
                <td>{sneaker.material}</td>
                <td>{sneaker.color}</td>
                <td><img src={sneaker.img} style={{ height: '100px', width: '100px' }}
                    alt="" /></td>
                <td>{sneaker.quantity}</td>
                <td>{sneaker.discount}</td>
                <td>
                    <a id="edit" onClick={this.onUpdate} data-toggle="modal" data-target="#exampleModal" ><i class="fas fa-wrench"></i></a>
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
        editing: state.editing
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditing: (sneaker) => {
            dispatch(editingsneaker(sneaker));
        },
        onDeleteItem: (id) => {
            dispatch(deletesneakerrequest(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);