import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ItemVans extends Component {
    render() {
        const { vans } = this.props;
        return (
            <div class="col-sm-3">
                <div className="card">
                <div className={vans.quantity>95 ? "empty":"icon-bestseller"}></div>
                    <Link to={"/view/" + vans._id}><img src={vans.img} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{vans.name}</p>
                        <p className="code">#{vans.code}</p>
                        <p className="price">${vans.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemVans;