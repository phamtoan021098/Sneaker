import React, { Component } from 'react';
import Header from './Header';
import ListItems from './ListItem';
import Form from './Form';
import Footer from './Footer';
class ManagerProducts extends Component {
    render() {
        return (
            <div>
                <Header />
                <section class="products">
                    <div class="product-list">
                        <div class="row">
                            <div class="col-sm-3">                              
                                    <Form />                               
                            </div>
                            <div class="col-sm-9">
                                <h5>Danh Sách Sản Phẩm</h5>
                                <hr></hr>
                                <ListItems />
                            </div>
                        </div>
                    </div>                  
                </section >
                <Footer/>
            </div>
        );
    }
}
export default ManagerProducts;