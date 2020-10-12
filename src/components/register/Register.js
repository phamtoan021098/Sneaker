import React, { Component } from 'react';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import { connect } from 'react-redux';
import validator from 'validator' ;
import { showuserrequest, adduserrequest } from '../../actions/actions';
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            repassword: '',
            phone:'',
            fullname: {
                message: '',
                ishidden: 'hidden'
            },
            email1: {
                message: '',
                ishidden: 'hidden'
            },
            username1: {
                message: '',
                ishidden: 'hidden'
            },
            password1: {
                message: '',
                ishidden: 'hidden'
            },
            phone1: {
                message: '',
                ishidden: 'hidden'
            },
            password2: {
                message: '',
                ishidden: 'hidden'
            }
        }
    }
    componentDidMount() {
        this.props.FecthAll();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onValidateFullName = () => {
        const { name } = this.state;
        if (name.length > 20) {
            this.setState({
                fullname: {
                    ishidden: "",
                    message: 'Vượt quá giới hạn kí tự! Vui lòng kiểm tra lại'
                }
            });
        }
        else if (name.length < 6) {
            this.setState({
                fullname: {
                    ishidden: "",
                    message: 'Ít nhất 6 kí tự ! Vui lòng kiểm tra lại'
                }
            });
        }
        else {
            this.setState({
                fullname: {
                    ishidden: 'hidden',
                    message: ''
                }
            })
        }

    }
    onValidatePhone=()=>{
        const {phone}=this.state;
        const re=/^\d{10}$/;
        if(re.test(phone)===false){
            this.setState({
                phone1:{
                    ishidden:'',
                    message:"Nhập sai cú pháp số điện thoại!Vui lòng kiểm tra lại"
                }
            })
        }
        else{
            this.setState({
                phone1:{
                    ishidden:'hidden',
                    message:''
                }
            })
        }
    }
    onValidateEmail = () => {
        const { email } = this.state;
        const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!re.test(email)) {
            this.setState({
                email1: {
                    ishidden: '',
                    message: 'Email không hợp lệ!Vui lòng kiểm tra lại'
                }
            })
        }
        else {
            this.setState({
                email1: {
                    ishidden: 'hidden',
                    message: ''
                }
            })
        }
    }
    onValidateUserName = () => {
        const { username } = this.state;
        if (username.length > 12) {
            this.setState({
                username1: {
                    ishidden: '',
                    message: 'Giới hạn tối đa là 12 kí tự! Vui lòng kiểm tra lại.'
                }
            });
        }
        else if (username.length <= 4) {
            this.setState({
                username1: {
                    ishidden: '',
                    message: 'Tối thiểu là 4 kí tự! Vui lòng kiểm tra lại.'
                }
            });
        }
        else {
            this.setState({
                username1: {
                    ishidden: 'hidden',
                    message: ''
                }
            })
        }
    }
    onValidatePassword = () => {
        const { password } = this.state;
        if (password.length < 6) {
            this.setState({
                password1: {
                    ishidden: '',
                    message: 'Mật khẩu quá ngắn! Vui lòng kiểm tra lại.'
                }
            })
        }
        else if (password.length > 15) {
            this.setState({
                password1: {
                    ishidden: '',
                    message: 'Tối đa 15 kí tự! Vui lòng kiểm tra lại.'
                }
            })
        }
        else {
            this.setState({
                password1: {
                    ishidden: 'hidden',
                    message: ''
                }
            })
        }
    }
    onValidateRePassword = () => {
        const { repassword, password } = this.state;
        if (repassword !== password) {
            this.setState({
                password2: {
                    ishidden: '',
                    message: 'Nhập lại mật khẩu không khớp!Vui lòng kiểm tra lại.'
                }
            })
        }
        else {
            this.setState({
                password2: {
                    ishidden: 'hidden',
                    message: ''
                }
            })
        }
    }
    onSave = (event) => {
        const { fullname, email1, username1, password1, password2,phone1 } = this.state;
        const { user1 } = this.props;
        event.preventDefault();
        if (fullname.ishidden === 'hidden' && fullname.message === '' &&
            email1.ishidden === 'hidden' && email1.message === '' &&
            username1.ishidden === 'hidden' && username1.message === '' &&
            password1.ishidden === 'hidden' && password1.message === '' &&
            password2.ishidden === 'hidden' && password2.message === ''&&
            phone1.ishidden==='hidden'&& phone1.message==='') {

            const user = {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                phone:this.state.phone
            }
            var fla = 0;
            for (var i = 0; i < user1.length; i++) {
                if (user1[i].username ===user.username) {
                    window.alert('Tài khoản đã tồn tại!Vui lòng nhập lại.')
                }
                else {
                    fla = fla + 1;
                }
            }
            if (fla === user1.length) {
                this.props.onAdd(user);
                window.alert('Đăng kí thành công!');
                this.props.history.goBack();
            }
        }
        else{
            window.alert('Nhập thiếu thông tin!Vui lòng nhập đầy đủ thông tin')
        }

    }

    render() {
        return (
            <div>
                <Banner />
                <section className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-8">
                                <div className="register-form">
                                    <h5>Đăng Kí Thành Viên</h5>
                                    <hr />
                                    <form onSubmit={this.onSave}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Họ Và Tên:"
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                onBlur={this.onValidateFullName}
                                            />
                                            <small type={this.state.fullname.ishidden}>{this.state.fullname.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email:"
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                onBlur={this.onValidateEmail}

                                            />
                                            <small type={this.state.email1.ishidden}>{this.state.email1.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Số Điện Thoại:"
                                                onChange={this.onChange}
                                                value={this.state.phone}
                                                onBlur={this.onValidatePhone}
                                            />
                                            <small type={this.state.phone1.ishidden}>{this.state.phone1.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Tài Khoản:"
                                                value={this.state.username}
                                                onChange={this.onChange}
                                                onBlur={this.onValidateUserName}
                                            />
                                            <small type={this.state.username1.ishidden}>{this.state.username1.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Mật Khẩu:"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                onBlur={this.onValidatePassword}
                                            />
                                            <small type={this.state.password1.ishidden}>{this.state.password1.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="repassword"
                                                className="form-control"
                                                placeholder="Nhập Lại Tài Khoản:"
                                                value={this.state.repassword}
                                                onChange={this.onChange}
                                                onBlur={this.onValidateRePassword}
                                            />
                                            <small type={this.state.password2.ishidden}>{this.state.password2.message}</small>
                                        </div>
                                        <button type="submit" id="button">Đăng Kí <i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-2" />
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
        user1: state.user
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (user) => {
            dispatch(adduserrequest(user));
        },
        FecthAll: () => {
            dispatch(showuserrequest());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);