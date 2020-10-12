import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row" style={{ marginTop: '10%' }}>
                        <div className="col-sm-3">
                            <h4>Giới Thiệu</h4>
                            <p><i className="fas fa-angle-right"></i>Về Cửa Hàng</p>
                            <p><i className="fas fa-angle-right"></i>Tin Tức</p>
                            <p><i className="fas fa-angle-right"></i>Cửa Hàng</p>
                            <p><i className="fas fa-angle-right"></i>Giảm Giá</p>
                        </div>
                        <div className="col-sm-3">
                            <h4>Hỗ Trợ Khách Hàng</h4>
                            <p><i className="fas fa-angle-right"></i>Hỗ Trợ Trưc Tuyến</p>
                            <p><i className="fas fa-angle-right"></i>Liên Hệ</p>
                            <p><i className="fas fa-angle-right"></i>Tuyển Dụng</p>
                            <p><i className="fas fa-angle-right"></i>Kiểm Tra Đơn Hàng</p>
                        </div>
                        <div className="col-sm-3">
                            <h4>Thông Tin Công Ty</h4>
                            <p><i className="fas fa-angle-right"></i>HCMUTE</p>
                            <p><i className="fas fa-angle-right"></i>Võ Văn Ngân Street,Thủ Đức District</p>
                            <h4>Đường Dây Nóng</h4>
                            <p><i className="fas fa-angle-right"></i>0906821098</p>
                        </div>
                        <div className="col-sm-3">
                            <h4>hỗ trợ thanh toán</h4>
                            <i className="fab fa-amazon-pay fa-2x"></i>
                            <i className="fab fa-amazon fa-2x"></i>
                            <i className="fab fa-cc-visa fa-2x"></i>
                            <i className="fab fa-cc-paypal fa-2x"></i>
                            <i className="fab fa-cc-jcb fa-2x"></i>
                        </div>
                    </div>

                </div>
                <div className="row" style={{ textAlign: 'center', backgroundColor: "rgba(242,242,242,1)" }}>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8' ><p>Designed by Criss</p></div>
                    <div className='col-sm-2'></div>
                </div>
            </section>
        )
    }
}
export default Footer;