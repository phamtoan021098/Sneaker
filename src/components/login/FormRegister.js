import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FormRegister extends Component {
  render() {
    return (
      <div className="register-form">
        <h5>Khách Hàng Mới</h5>
        <hr />
        <p>Bằng cách tạo tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể chuyển qua quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ giao hàng, xem và theo dõi đơn hàng của bạn trong tài khoản của bạn và hơn thế nữa.
            </p>
        <Link to='/register'>
          <button id="button">Đăng Kí<i class="fas fa-arrow-right"></i></button>
        </Link>
      </div>
    );
  }
}
export default FormRegister;