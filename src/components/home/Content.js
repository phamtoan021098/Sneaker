import React, { Component } from 'react';
class Content extends Component {
    render() {
        return (
            <section className="content-adver">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fab fa-fedex fa-3x"></i></h1>
                                    <h3>Miễn Phí Giao Hàng</h3>
                                    <p>Giao hàng miễn phí khi bạn mua hơn 2 mặt hàng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fab fa-supple fa-3x"></i></h1>
                                    <h3>Hỗ Trợ Khách Hàng</h3>
                                    <p>Luôn sẵn sàng trả lời mọi câu hỏi của khách hàng một cách chu đáo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fas fa-credit-card fa-3x"></i></h1>
                                    <h3>An Toàn Thanh Toán</h3>
                                    <p>Đảm bảo an toàn tuyệt đối khi thanh toán</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Content;
