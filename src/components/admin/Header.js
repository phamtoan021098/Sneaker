import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <Link to="/" class="navbar-brand" href="#">Daxuo Store</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="order">Đơn Hàng</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/admin'>Sản Phẩm </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/user'>Khách Hàng</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;