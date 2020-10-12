import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Checking from './Checking';
import { connect } from 'react-redux';
import { showorderrequest, updateorderrequest,showsneakeradminrequest, updatequantityrequest } from '../../actions/actions';
import Footer from './Footer';
import axios from 'axios';
class Orderlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            currentpage: 1,
            perpage: 7,
            temp: []
        }
    }
    show = (a) => {
        this.setState({
            currentpage: a
        })
    }
    componentDidMount() {
        this.props.fetchAll();
        this.props.showadmin();
    }
    total = (cost) => {
        var total = 0;
        for (var i = 0; i < cost.length; i++) {
            total += cost[i].price * cost[i].quantity * (1 - cost[i].discount / 100);
        }
        return total;
    }
  /*  Checked = () => {
        const { orderuser } = this.props;
        for (var i = 0; i < orderuser.length; i++) {
            const update = {
                _id: orderuser[i]._id,
                status: String(2),
                datetime: orderuser[i].datetime
            }

            this.props.onUpdate(update);
        }
    }
    Waitting = () => {
        const { orderuser } = this.props;
        for (var i = 0; i < orderuser.length; i++) {
            const update = {
                _id: orderuser[i]._id,
                status: String(3),
                datetime: orderuser[i].datetime
            }
            this.props.onUpdate(update);
        }
    }*/
    Success = () => {
        const { orderuser, sneakeradmin } = this.props;
        for (var i = 0; i < orderuser.length; i++) {
            var a = "";
            const update = {
                _id: orderuser[i]._id,
                status: String(4),
                datetime: orderuser[i].datetime
            }
            console.log(orderuser[i].itemid);
            for (var x = 0; x < sneakeradmin.length; x++) {
                if (sneakeradmin[x]._id === orderuser[i].itemid) {
                    a = sneakeradmin[x].quantity
                }
            }
            var updatequantity = a - orderuser[i].quantity;
            const sneakernew = {
                _id: orderuser[i].itemid,
                quantity: updatequantity
            }
            this.props.onUpdateQuantity(sneakernew);
            this.props.onUpdate(update);
            window.alert('Cập Nhật Thành Công');
        }

    }
    render() {
        const { order, orderuser, sneakeradmin } = this.props;
        console.log(this.props.sneakeradmin);
        const listnew = [];
        for (var x = 0; x < order.length; x++) {
            listnew.push(order[x]);
        }
        for (var i = 0; i < listnew.length; i++) {
            for (var j = i+1; j <listnew.length; j++) {
                if (listnew[i].user === listnew[j].user && listnew[i].datetime === listnew[j].datetime) {
                    listnew.splice(j, 1);
                }
                else{
                    j++;
                }

            }
        }
        console.log(listnew)
        listnew.sort((a, b) => {
            if (a.status > b.status) return 1;
            else if (a.status < b.status) return -1;
        });
        console.log(listnew)
        const { currentpage, perpage } = this.state;
        const indexOfLast = currentpage * perpage;
        const indexOfFirst = indexOfLast - perpage;
        const currentlist = listnew.slice(indexOfFirst, indexOfLast);
        let list = currentlist.map((item, index) => {
            return (
                <Order item={item} key={index} />
            );
        });
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(listnew.length / perpage); i++) {
            pageNumbers.push(i);
        }
        let showpage = pageNumbers.map((page, index) => {
            return (
                <li className="page-item" key={index}>
                    <a className="page-link" onClick={() => this.show(index + 1)}>{page}</a>
                </li>
            );
        })
        let listchecking = orderuser.map((checking, index) => {
            return (
                <Checking checking={checking} key={index} />
            );
        });
        return (
            <div>
                <div>
                    <Header />
                    <section className="cart-list">
                        .<div className="container">
                            <div className="row">
                                <div className="col-sm-12" style={{ marginLeft: "100px" }}>
                                    <table className="table  table-responsive">
                                        <thead className="thead-inverse">
                                            <tr>
                                                <th>#</th>
                                                <th>Khách Hàng</th>
                                                <th>Số Điện Thoại</th>
                                                <th>Thời Gian</th>
                                                <th>Trạng Thái Đơn Hàng</th>
                                                <th>Xác Nhận</th>
                                                <th>Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <ul className="pagination"> {showpage}</ul>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "800px" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Chi Tiết Đơn Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table  table-responsive">
                                    <thead className="thead-inverse">
                                        <tr>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Ảnh</th>
                                            <th>Size</th>
                                            <th>Giá</th>
                                            <th>Giảm Giá(%)</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listchecking}
                                    </tbody>
                                </table>
                                <div className="subtotals" style={{ display: 'flex' }}>
                                    <div className="col-sm-6">Tổng Tiền:</div>
                                    <div className="col-sm-6">${this.total(orderuser)}.00</div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="button" onClick={this.Success}>Cập Nhật</button>
                                <button id="button" data-dismiss="modal">Trở Lại</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    message = (a) => {
        for (var i = 0; i < a.length; i++) {
            if (a.quantity === 0) {
                return a[i].name + "Hiện Đang Hết Hết Hàng"
            }
            else {
                return "";
            }
        }
    }

}

const mapStateToProps = state => {
    return {
        order: state.order,
        orderuser: state.orderuser,
        sneakeradmin: state.sneakeradmin
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: () => {
            dispatch(showorderrequest());
        },
        onUpdate: (user) => {
            dispatch(updateorderrequest(user));
        },
        showadmin: () => {
            dispatch(showsneakeradminrequest());
        },
        onUpdateQuantity: (sneaker) => {
            dispatch(updatequantityrequest(sneaker))
        }

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Orderlist);