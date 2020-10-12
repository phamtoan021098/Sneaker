import React, { Component } from 'react';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import axios from 'axios';
import { connect } from 'react-redux';
import { showcartrequest, addcartrequest, deletecartrequest } from '../../actions/actions';
class Itemdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            code: '',
            img: '',
            img1: '',
            img2: '',
            src: '',
            material: '',
            color: '',
            size: 0,
            quantity: 0,
            quantityitem: 0,
            discount:0
        }
    }
    change = (src) => {
        this.setState({
            src: src
        });
    }
    componentDidMount() {
        axios.get('http://localhost:4000/sneakers/view/' + this.props.match.params.id).then(response => {

            this.setState({
                id: response.data._id,
                name: response.data.name,
                price: response.data.price,
                code: response.data.code,
                img: `/${response.data.img}`,
                img1: `/${response.data.img1}`,
                img2: `/${response.data.img2}`,
                src: `/${response.data.img}`,
                material: response.data.material,
                color: response.data.color,
                quantityitem: response.data.quantity,
                discount:response.data.discount
            });
        });
        this.props.fetchAll();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (event) => {
        event.preventDefault();
        const { cart} = this.props;
        console.log(this.props.id.id);
        console.log(cart);
        const currentcart = {
            id: this.state.id,
            user:this.props.id.id,
            name: this.state.name,
            price: this.state.price,
            img: this.state.img,
            size: this.state.size,
            quantity: this.state.quantity,
            discount:this.state.discount
        };
        var fla = 0;
        if(this.props.id.id===""){
            window.alert("Bạn vui lòng đăng nhập để thêm vào giỏ hàng!");
        }
        else{
           if( currentcart.quantity===0|| currentcart.size===0){
            window.alert("Bạn vui lòng chọn đầy đủ thông tin để thêm sản phẩm!");
           }
           else{
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name === currentcart.name && cart[i].size === currentcart.size) {
                    var newquantity = cart[i].quantity+currentcart.quantity;
                    this.props.onDelete(cart[i]._id)
                    const updatecart ={
                        id: this.state.id,
                        user:this.props.id.id,
                        name: this.state.name,
                        price: this.state.price,
                        img: this.state.img,
                        size: this.state.size,
                        quantity: newquantity,
                        discount:this.state.discount
                    }
                    this.props.onAdd(updatecart);          
                    this.props.fetchAll();
                    window.alert('Đã đưa vào giỏ hàng! Vui lòng kiểm tra lại.')
                    //console.log(cart)
                    this.props.history.goBack();
                   
                }
                else {
                    fla = fla + 1;
                }
            }
            if (fla === cart.length || cart.length === 0) {
                this.props.onAdd(currentcart);
                this.props.fetchAll();
                window.alert('Đã đưa vào giỏ hàng! Vui lòng kiểm tra lại.')
                this.props.history.goBack();
                //console.log(this.props.cart);
            }
           }
        }
    }
    render() {
       // console.log(this.props.id)
        return (
            <div>
                <Banner cart={this.props.cart}/>
                <section className="item">
                    <div className="container">
                        <form onSubmit={this.onSave}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <a href="#"><img src={this.state.src} alt="" id="image-container" /></a>
                                    <div className="nav">
                                        <img onClick={() => this.change(this.state.img)} src={this.state.img} alt="" />
                                        <img onClick={() => this.change(this.state.img1)} src={this.state.img1} alt="" />
                                        <img onClick={() => this.change(this.state.img2)} src={this.state.img2} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <h3>{this.state.name}</h3>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <p> 0 Review | Give your Reivew </p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p>SKU: {this.state.code}</p>
                                            <p>Chất Liệu:{this.state.material}</p>
                                            <p>Màu Sắc:{this.state.color}</p>
                                            <select name="size" onChange={this.onChange}>
                                                <option value="default">Chọn Size</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <button type="submit" style={{marginTop:"2%",marginLeft:"2%"}} id="button" onClick={this.showcart}> Thêm<i className="fas fa-arrow-right"></i></button>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Giá : ${this.state.price}</h5>
                                            <p>Miễn Phí Giao Hàng Nội Thành Khi Mua Online</p>
                                            <p>Số Lượng:</p>
                                            <div className="value-button" onClick={this.decrease} id="decrease">-</div>
                                            <input type="number" name="number" id="number" value={this.state.quantity} />
                                            <div className="value-button" onClick={this.increase} id="increase">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr></hr>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    decrease = () => {
        if (this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }
    increase = () => {
        if (this.state.quantity < 10) {
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        id:state.id
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (cart) => {
            dispatch(addcartrequest(cart));
        },
        onDelete: (id) => {
            dispatch(deletecartrequest(id));
        },
        fetchAll: () => {
            dispatch(showcartrequest());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Itemdetail);