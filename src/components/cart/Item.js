import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletecartrequest, updatecart } from '../../actions/actions';
import * as actions from '../../actions/actions';
import axios from 'axios';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sneaker: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/sneakers/view/' + this.props.item.id).then(res => {
            this.setState({
                sneaker: res.data
            });
        });
    }
    delete = () => {
        if (window.confirm('Bạn có chắc xóa sản phẩm này không ?')) {
            this.props.onDelete(this.props.item._id);
        }
    }
    render() {
        var { item } = this.props;
        //console.log(item)
        return (
            <tr>
                <td>
                    <button onClick={this.delete} id="button" style={{ width: "80px" }}>X</button>
                </td>
                <td><img src={item.img} style={{ height: '100px', width: '100px' }} alt="" /></td>
                <td><p>{item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><p>{item.size}</p></td>
                <td>{item.quantity}</td>
        <td>{item.discount}</td>
                <td>${this.total(item.quantity, item.price,item.discount)}</td>
            </tr>
        );
    }
    total = (a, b,c) => {
        return a * b*(1-c/100);
    }
}
const mapStateToProps = state => {
    return {
        newcart: state.cart
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (id) => {
            dispatch(deletecartrequest(id));
        },
        onAfterDelete: (cart) => {
            dispatch(actions.updatecart(cart));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);