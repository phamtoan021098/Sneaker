import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { showorderuserrequest, deleteorderrequest } from '../../actions/actions';
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone: ''
        };
    }
    componentDidMount() {

    }
    render() {
        const { item, key } = this.props;
       // const {}
        axios.get('http://localhost:4000/user/detail/' + this.props.item.user).then(res => {
            this.setState({
                username: res.data.name,
                phone: res.data.phone
            })
        })
       // console.log(typeof item.status)
        return (
            <tr>
                <td>
                    <p>{key}</p>
                </td>
                <td>
                    <p>{this.state.username}</p>
                </td>
                <td>
                    <p>{this.state.phone}</p>
                </td>
                <td>
                    <p>{item.datetime}</p>
                </td>
                <td><button type="button" class={this.identify1(item.status)}>{this.identify(item.status)}</button></td>
                <td>
                    <a id="edit" onClick={this.onUpdate} data-toggle="modal" data-target="#exampleModal"><i class="fa fa-tasks"></i></a>
                </td>
                <td>
                    <a id="delete" onClick={this.onDelete}><i class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        );
    }
    identify=(a)=>{
        var result="";
        if(a==="1"){
            result="Chưa Xác Nhận";
        }
        else if(a==="2"){
            result="Đang Xử Lí";
        }
        else if(a==="3"){
            result="Đang Chờ";
        }
        else if(a==="4"){
            result="Đã Xác Nhận";
        }
        return result;
    }
    identify1=(a)=>{
        var result="";
        if(a==="1"){
            result="btn btn-warning";
        }
        else if(a==="2"){
            result="btn btn-secondary";
        }
        else if(a==="3"){
            result="btn btn-info";
        }
        else if(a==="4"){
            result="btn btn-success";
        }
        return result;
    }
    onUpdate = () => {
        this.props.onDetail(this.props.item.user, this.props.item.datetime);
    }
    onDelete = () => {
        const { order, item } = this.props;
        if (window.confirm('Bạn Có Chắc Xóa Không?')) {
            for (var i = 0; i < order.length; i++) {
                if (order[i].user === item.user && order[i].datetime === item.datetime) {
                    this.props.onDelete(order[i]._id);
                }
            }
        }
    }
}
const mapStateToProps = (state) => {
    return {
        orderuser: state.orderuser
        , order: state.order
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDetail: (user, datetime) => {
            dispatch(showorderuserrequest(user, datetime))
        },
        onDelete: (id) => {
            dispatch(deleteorderrequest(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);