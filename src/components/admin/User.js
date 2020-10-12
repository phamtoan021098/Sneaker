import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { showuserrequest } from '../../actions/actions';
import EachUser from './EachUser';
import Footer from './Footer';
import Header from './Header';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 5
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
        const { user } = this.props;
        const { currentPage, perPage } = this.state;
        const indexOfLast = currentPage * perPage;
        const indexOfFirst = indexOfLast - perPage;
        const usernew = [];
        for (var i = 0; i < user.length; i++) {
            if (user[i].admin === 0) {
                usernew.push(user[i])
            }
        }
        const usercurrent = usernew.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(usernew.length / perPage); i++) {
            pageNumbers.push(i);
        }
        let showpage = pageNumbers.map((page, index) => {
            return (
                <li className="page-item" key={index}>
                    <a className="page-link" onClick={() => this.show(index + 1)}>{page}</a>
                </li>
            );
        })
        let list = usercurrent.map((user, index) => {
            return (
                <EachUser user={user} key={index} />
            );
        });
        return (
            <div>
                <Header />
                <section className="cart-list">
                    .<div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{ marginLeft: "100px" }}>
                                <table className="table table-striped table-inverse table-responsive table-sc" id="example">
                                    <thead className="thead-inverse">
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Số Điện Thoại</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <ul className="pagination"> {showpage}</ul>
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
        user: state.user
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll: () => {
            dispatch(showuserrequest());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);