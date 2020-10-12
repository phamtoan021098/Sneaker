import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Item extends Component {
    render() {
        const { sneaker } = this.props;
        return (
            <div class="col-sm-3">
                <div className="card">
                    <span className="label-product">-{sneaker.discount}%</span>
                    <Link to={"/view/" + sneaker._id}><img src={sneaker.img} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{sneaker.name}</p>
                        <p className="code">#{sneaker.code}</p>
                        <p className="price" style={{color:"red"}}>${this.discount(sneaker.price, sneaker.discount)}</p>
                        <p className="price"><strike>${sneaker.price}</strike></p>
                       
                    </div>
                </div>
            </div>
        );
    }
    discount = (a, b) => {
        return a * (1 - b / 100);
    }
}
export default Item;