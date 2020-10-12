import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Items extends Component {

    render() {
        var { item, index } = this.props;
        return (
            <div className="col-sm-3" >
                <div className="card">
                <div className={item.quantity>95 ? "empty":"icon-bestseller"}></div>
                    <Link to={"/view/" + item._id}><img src={`/${item.img}`} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{item.name}</p>
                        <p className="code">#{item.code}</p>
                        <p className="price">${item.price}</p>
                    </div>
                </div>
            </div >
        );
    }

}
export default Items;