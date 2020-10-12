import React, { Component } from 'react';
import axios from 'axios';
import ItemPalladium from './ItemPalladium';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {showsneakerrequest} from '../../actions/actions';
class Palladium extends Component {
componentDidMount() {
  this.props.fetchAll();
}
render() {
    const { sneakers } = this.props;
    const palladium = [];
    for (var i = 0; i < sneakers.length; i++) {
        if (sneakers[i].brand === 'Palladium') {
            palladium.push(sneakers[i])
        }
    }
    const current=palladium.slice(0, 8);
    let listpalladium = current.map((palladium, index) => {
        return (
            <ItemPalladium palladium={palladium} key={index} />
        );
    })

        return (
            <section class="palladidum">
            <div class="container">
              <div class="row-palladium"></div>
              <div class="row">
                {listpalladium}
              </div>
              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4" id="col-sm-4">
                            <Link to="/shop/Palladium">
                                <button id="button">Chi Tiết <i class="fas fa-arrow-right"></i></button>
                            </Link>
                        </div>
                <div class="col-sm-4"></div>
              </div>
            </div>
          </section>
        
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
  export default connect(mapStateToProps,mapDispatchToProps)(Palladium);