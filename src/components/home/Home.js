import React,{Component} from 'react';
import Banner from '../header-footer/Banner';
import Content from './Content';
import BrandLogo from './BrandLogo';
import IntroProducts from './IntroProducts';
import Types from './Types';
import Footer from '../header-footer/Footer';
import {connect} from 'react-redux';
import {showcartrequest} from '../../actions/actions';
class Home extends Component{
    componentDidMount(){
        this.props.fetchAll();
    }
    render(){
        //console.log(this.props.id);
        return(
            <div>
                <Banner newcart={this.props.cart}/>
                <Content />
                <IntroProducts />
                <Types />
                <BrandLogo/>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        id:state.id,
        cart:state.cart
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll :()=>{
            dispatch(showcartrequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);