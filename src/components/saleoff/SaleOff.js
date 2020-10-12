import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { showcartrequest,showsneakerrequest } from '../../actions/actions';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
class SaleOff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpage: 1,
            perpage: 8
        };
    }
    show = (a) => {
        this.setState({
            currentpage: a
        })
    }
    componentDidMount() {
        this.props.fetchAll();
    }
    render() {
        const { sneakers } = this.props;
        const currentsale = [];
        //console.log(sneakers)
        for (var i = 0; i < sneakers.length; i++) {
            if (sneakers[i].discount>0) {
                currentsale.push(sneakers[i]);
            }
        }
        console.log(currentsale);
        currentsale.sort((a, b) => {
            if (a.discount > b.discount) return 1;
            else if (a.discount < b.discount) return -1;
        });
        const { currentpage, perpage } = this.state;
        const indexOfLast = currentpage * perpage;
        const indexOfFirst = indexOfLast - perpage;
        const current = currentsale.slice(indexOfFirst, indexOfLast);
        let listbestseller = current.map((sneaker, index) => {
            return (
                <Item sneaker={sneaker} key={index} />
            );
        })
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(currentsale.length / this.state.perpage); i++) {
            pageNumbers.push(i);
        }
        console.log(pageNumbers)
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
                <section class="converse">
                    <div class="container">
                        <div class="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6" id="a">
                                <h3>Sản Phẩm Khuyến Mãi</h3>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <div class="row">
                            {listbestseller}
                        </div>
                        <div class="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <ul className="pagination">
                                    {showpage}
                                </ul>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sneakers: state.sneaker,
        cart: state.cart
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: () => {
            dispatch(showsneakerrequest());
        },
        fetchAll: () => {
            dispatch(showcartrequest());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SaleOff);