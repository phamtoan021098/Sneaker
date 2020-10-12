import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ItemPalladium extends Component {
    render() {
        const { palladium } = this.props;
        //console.log(palladium.discount);
        return (
            <div class="col-sm-3">
                <div className="card">
                    <div className={palladium.quantity>95 ? "empty":"icon-bestseller"}></div>
                    <Link to={"/view/" + palladium._id}><img src={palladium.img} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{palladium.name}</p>
                        <p className="code">#{palladium.code}</p>
                        <p className="price">{}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemPalladium;