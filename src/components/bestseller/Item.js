import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Item extends Component {
    render() {
        const { sneaker } = this.props;
        return (
            <div class="col-sm-3">
                <div className="card">
                    <div className="icon-bestseller"></div>
                    <Link to={"/view/" + sneaker._id}><img src={sneaker.img} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{sneaker.name}</p>
                        <p className="code">#{sneaker.code}</p>
                        <p className="price">${sneaker.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;