import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
class Filter extends Component {
    render() {
        const { sort } = this.props;
        return (
            <div className="dropdown" id="dd">
                <button type="button" className="btn dropdown-toggle" id="dropdown-toggle" data-toggle="dropdown">
                    SẮP XẾP
            </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item sort" onClick={() => this.onClick('name', 1)}>Tên (A-Z)</a>
                    <a className="dropdown-item" onClick={() => this.onClick('name', -1)}>Tên (Z-A)</a>
                    <a className="dropdown-item" onClick={() => this.onClick('price', 1)}>Giá (Thấp - Cao)</a>
                    <a className="dropdown-item" onClick={() => this.onClick('price', -1)}>Giá (Cao - Thấp)</a>
                </div>
            </div>
        );
    }
    onClick = (a, b) => {
        this.props.onSort({ name: a, option: b });
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    };
}
const mapDispathToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sort(sort));
        }
    };
}
export default connect(mapStateToProps, mapDispathToProps)(Filter);