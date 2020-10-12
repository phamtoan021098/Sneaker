/*import React, { useState } from 'react';
import { Col, Row, Form, Input, Divider,Button } from 'antd';
import 'antd/dist/antd.css';
import '../../css/styles.css';
function FormLogin(props) {
    const [form] = Form.useForm();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const onLogin=(e)=>{
      console.log(object);
    }
    return (
        <div className="container">
            <Row className="loginregister">
                <Col flex={2}>
                    <div className="titlelogointro">
                        <Divider orientation='left'><h5>Đăng Nhập</h5></Divider>
                    </div>
                    <Form
                        form={form}
                        name="control-hooks"
                        onFinish={onLogin}
                    >
                        <Form.Item
                            label="Tài khoản"
                            name="username"
                            rules={[{ required: true, message: "Please input your username" }]}

                            hasFeedback
                        >
                            <Input placeholder="Nhập tài khoản của bạn" />
                        </Form.Item>
                        <Form.Item
                            label="Mật Khẩu"
                            name="password"
                            rules={[{ required: true, message: "Please input your password" }]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Nhập mật khẩu của bạn" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={onLogin} >Đăng nhập</Button>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>
        </div >
    );
}

export default FormLogin;
*/
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {giveid} from '../../actions/actions';
class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            authentication:''
        }
    }
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        //console.log(this.state)
    }
    onSave=(event)=>{
        const {history}=this.props;
        //console.log(history);
        event.preventDefault();
        const avaiableduser={
            username:this.state.username,
            password:this.state.password
        }
        axios.post('http://localhost:4000/user/login',avaiableduser).then(res=>{
           // console.log(res.data.data.admin)
           
            if(res.data.message==='ktt'){
                window.alert('Tài khoản không tìm thấy!!!')
            }
            else if(res.data.message==='wp'){
                window.alert('Tài khoản hoặc mật khẩu không đúng!!')
            }
            else if(res.data.data.admin===1 && res.data.message==='sl'){
                this.setState({
                    authentication:res.data.data.admin
                })
             }
            else if(res.data.message==='sl'&&res.data.data.admin===0){
                //console.log(res.data.id)
                this.props.onAdd({id:res.data.id})
                window.alert('Chào mừng đến với hệ thống!')
                history.goBack();
            }          
        })
        if(this.state.authentication===1){
            return <Redirect to="/admin"/>
        }
    }
    render() {
        //console.log(this.state.authentication);
        if(this.state.authentication===1){
            return <Redirect to='/admin'/>
        }
        return (
            <div className="login-form">
                <h5>Thành Viên</h5>
                <hr />
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor>Tài Khoản :</label>
                        <input 
                        type="text" 
                        name="username"
                        className="form-control" 
                        placeholder="Tài Khoản:"
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mật Khẩu :</label>
                        <input 
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Mật Khẩu:"
                        onChange={this.onChange}
                         />
                    </div>
                    <button id="button">Đăng Nhập <i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (id) => {
            dispatch(giveid(id));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(FormLogin);

