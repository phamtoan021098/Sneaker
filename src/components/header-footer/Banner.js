import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showcartrequest,giveid } from '../../actions/actions';
import { connect } from 'react-redux';
class Banner extends Component {
  componentDidMount() {
   // this.props.fetchAll(this.props.iduser.id);
    //console.log(this.props.id.id); 
   // console.log(this.props.iduser.id);
   // console.log(this.props.newcart);
  }
  render() {
    const { newcart } = this.props;
    //  console.log(this.props.iduser.id);
    this.props.fetchAll(this.props.iduser.id);
  
    var sum = 0;
    for (var i = 0; i < newcart.length; i++) {
      sum = sum + newcart[i].quantity;
    }
    return (
      <section className="banner">
        <div className="py-1 bg-black">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                      className="fas fa-phone"></span></div>
                    <span className="text">+0906821098</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="fas fa-at"></span>
                    </div>
                    <span className="text">phamphuocdangtoan@email.com</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right"><span
                    className="fas fa-truck"></span>
                    <div>
                      <span className="text">Giao Hàng Trong 3-5 Ngày &amp;Trả Lại Miễn Phí </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
        </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="/" className="nav-link">Trang Chủ</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Thương Hiệu</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <Link className="dropdown-item" to="/shop/Vans">Vans</Link>
                    <Link className="dropdown-item" to="/shop/Converse">Converse</Link>
                    <Link className="dropdown-item" to="/shop/Palladium">Palladium</Link>
                  </div>
                </li>
                <li className="nav-item">{this.isLogined(this.props.iduser.id)}</li>
                <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span
                  className="fas fa-shopping-cart"></span>[{sum}]</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
  isLogined = (id) => {
    let result = '';
    if (id === '') {
      result = <Link to="/login" className="nav-link">Đăng Nhập</Link>
    }
    else {
      result = <Link onClick={this.onLogOut} className="nav-link">Đăng Xuất</Link>
    }
    return result;
  }
  onLogOut=()=>{
    this.props.onLogout({id:""});
    this.props.fetchAll('');
    console.log(this.props.id);
  }
}
const mapStateToProps = (state) => {
  return {
    newcart: state.cart,
    iduser:state.id
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAll :(user)=>{
      dispatch(showcartrequest(user));
  },
    onLogout:(id)=>{
      dispatch(giveid(id));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
