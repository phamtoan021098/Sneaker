import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class IntroProducts extends Component {
    render() {
        return (
            <section className="product-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4" id="banner1">
                            <div className="content">
                                <h3>Men's Sneaker</h3>
                                <p>Support 24/7</p>
                                <Link to="/shop">
                                    <button id="button">Mua Ngay <i class="fas fa-arrow-right"></i></button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-12" id="banner2">
                                    <div className="content-1">
                                        <h3>Make A Deal</h3>
                                        <p>You will enjoy with us</p>
                                        <Link to="/shop">
                                            <button id="button">Mua Ngay <i class="fas fa-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6" id="banner3">
                                    <div className="content-2">
                                        <h2>Extra 50% Off</h2>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                                        <Link to="/sale">
                                            <button id="button">Mua Ngay <i class="fas fa-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-6" id="banner4">
                                    <div className="content-3">
                                        <h2>Best Sellers</h2>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>

                                        <Link to="/bestseller">
                                            <button id="button">Mua Ngay <i class="fas fa-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default IntroProducts;
