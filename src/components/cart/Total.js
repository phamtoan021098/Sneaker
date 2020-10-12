import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addorderrequest,deletecartrequest} from '../../actions/actions';
import axios from 'axios';
class Total extends Component {
    onGoToOrder = () => {
        const { cart } = this.props;
        console.log(cart);
        for (var i = 0; i < cart.length; i++) {
            var today=new Date();
            const order = {
                datetime:today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                user: cart[i].user,
                cartid: cart[i]._id,
                itemid:cart[i].id,
                name: cart[i].name,
                quantity: cart[i].quantity,
                size: cart[i].size,
                price: cart[i].price,
                img: cart[i].img,
                discount:cart[i].discount,
                status:String(1)
            }
            this.props.onAdd(order);
            this.props.onDelete(cart[i]._id);
        }
        window.alert('Đơn Hàng Đã Được Ghi Nhận!Chúng Tôi Sẽ Liên Hệ Với Bạn Sớm Nhất')
    }
    render() {
        var { cart} = this.props;
       
        return (
            <div className="total">
                <h5 style={{ textAlign: 'left' }}>Hóa Đơn Thanh Toán</h5>
                <div className="subtotals" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Tổng Tiền:</div>
                    <div className="col-sm-6">${this.total(cart)}.00</div>
                </div>
                <div className="delivery" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Delivery :</div>
                    <div className="col-sm-6">$0.00</div>
                </div>
                <hr />
                <div className="totals" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Tổng Cộng:</div>
                    <div className="col-sm 6">${this.total(cart)}.00</div>
                </div>
                <div className="checked" style={{ display: 'flex' }}>
        <div className="col-sm-6" style={{ marginTop: "5%" }}><button type="submit" onClick={this.onGoToOrder} id="button">Đặt Hàng</button></div>
        <div className="col-sm 6"></div>
                </div>
            </div>
        );
    }
    total = (cost) => {
        var total = 0;
        for (var i = 0; i < cost.length; i++) {
            total += cost[i].price * cost[i].quantity*(1-(cost[i].discount/100));
        }
        return total;
    }
}
const mapStateToProp = (state) => {
    return {
        cart: state.cart,
        order: state.order,
        id: state.id,
        orderuser: state.orderuser
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (order) => {
            dispatch(addorderrequest(order));
        },
        onDelete: (id) => {
            dispatch(deletecartrequest(id));
        }
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(Total);