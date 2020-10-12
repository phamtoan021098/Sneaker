import React, { Component } from 'react';
import Item from './Item';
import Total from './Total';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import { connect } from 'react-redux';
import {showcartrequest} from '../../actions/actions';
import axios from 'axios';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpage: 1,
            perpage: 3,
            test:[]
        };
    }
    show = (a) => {
        this.setState({
            currentpage: a
        })
    }
    componentDidMount(){
      // Axios.get('http://localhost:4000/addcart/cart/'+this.props.iduser.id).then(res=>{
        //        console.log(res.data)
      // })
      this.props.fetchAll(this.props.iduser.id);
    }
    render() {
        const {newcart}=this.props;
        //console.log(newcart);
       // console.log(this.state.test)
       console.log(newcart);
        const { currentpage, perpage } = this.state;
        const indexOfLast = currentpage * perpage;
        const indexOfFirst = indexOfLast - perpage;
        const cartbyid=[];
        for(var i=0;i<newcart.length;i++){
            if(newcart[i].user===this.props.iduser.id){
                cartbyid.push(newcart[i]);
            }
        }
       // console.log(cartbyid);
        const currentcart = cartbyid.slice(indexOfFirst, indexOfLast);
        let list = currentcart.map((item, index) => {
            return (
                <Item key={index} item={item}/>
            );
        });
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(cartbyid.length / perpage); i++) {
            pageNumbers.push(i);
        }
        let showpage = pageNumbers.map((page, index) => {
            return (
                <li className="page-item" key={index}>
                    <a className="page-link" onClick={() => this.show(index + 1)}>{page}</a>
                </li>
            );
        })

        return (
            <div>
                <Banner />
                <section className="cart-list">
                    .<div className="container">
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <table className="table  table-responsive">
                                    <thead className="thead-inverse">
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Size</th>
                                            <th>Số Lượng</th>
                                            <th>Giảm Giá</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                        
                                <ul className="pagination"> {showpage}</ul>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row" style={{ marginBottom: '5%' }}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <Total cart={cartbyid} />
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    Showtotal = (cart) => {
        var result = null;
        if (cart.lenght > 0) {
            result = <Total cart={cart} />
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
      newcart:state.cart,
      iduser:state.id,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll :(user)=>{
            dispatch(showcartrequest(user));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);