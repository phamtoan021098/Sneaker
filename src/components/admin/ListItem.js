import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { showsneakerrequest } from '../../actions/actions';
import EachItem from './Item';
import Footer from './Footer';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 3
        }
    }
    componentDidMount() {
        this.props.fetchAll();
    }
    show = (a) => {
        this.setState({
            currentPage: a
        })
    }
    render() {
        const { sneakers } = this.props;
        //console.log(sneakers);
        const { currentPage, perPage } = this.state;
        const indexOfLast = currentPage * perPage;
        const indexOfFirst = indexOfLast - perPage;
        const currentsneakers = sneakers.slice(indexOfFirst, indexOfLast);
        let list = currentsneakers.map((sneaker, index) => {
            return (
                <EachItem sneaker={sneaker} key={index} />
            );
        })
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(sneakers.length / perPage); i++) {
            pageNumbers.push(i);
        }
        let showpage = pageNumbers.map((page, index) => {
            return (
                <li className="page-item" key={index}>
                    <a className="page-link" onClick={() => this.show(index + 1)}>{page}</a>
                </li>
            );
        })
        return (
            <div>
                <table className="table table-striped table-inverse table-responsive table-sc" id="example">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Hãng</th>
                            <th>Mã</th>
                            <th>Chất Liệu</th>
                            <th>Màu Sắc</th>
                            <th>Ảnh</th>
                            <th>Số Lượng</th>
                            <th>Giảm Giá</th>
                            <th>Sửa</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
                <ul className="pagination">
                    {showpage}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sneakers: state.sneaker
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: () => {
            dispatch(showsneakerrequest());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);