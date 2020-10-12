import React, { Component } from 'react';
import axios, { post } from 'axios';
import { connect } from 'react-redux';
import { addsneakerequest,updatesneakerrequest } from '../../actions/actions';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            brand: '',
            nameupdate: '',
            priceupdate: 0,
            brandupdate: '',
            img: '',
            img1: '',
            img2: '',
            quantity: 0,
            code: '',
            material: '',
            color: '',
            discount: 0,
            quantityupdate: 0,
            codeupdate: '',
            materialupdate: '',
            colorupdate: '',
            discountupdate: 0
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }
    onSubmitUpdate = (event) => {
        event.preventDefault();
        const update = {
            _id: this.props.editing._id,
            name: this.state.nameupdate,
            price: parseInt(this.state.priceupdate),
            quantity: parseInt(this.state.quantityupdate),
            code: this.state.codeupdate,
            color: this.state.colorupdate,
            material: this.state.materialupdate,
            discount:parseInt(this.state.discountupdate),
            brand: this.state.brandupdate,
            img: this.props.editing.img
        }
        console.log(update)
        this.props.onUpdate(update);
        //this.onClearAfterUpdate();
    }
    onClearAfterUpdate = () => {
        this.setState({
            quantityupdate: 0,
            codeupdate: '',
            materialupdate: '',
            colorupdate: '',
            discountupdate: 0,
            nameupdate: '',
            priceupdate: 0,
            brandupdate: ''
        });
    }
    onSave = (event) => {
        event.preventDefault();
        var newimg = `img/${this.state.img.substring(12)}`;
        var newimgsub1 = `img/${this.state.img1.substring(12)}`;
        var newimgsub2 = `img/${this.state.img2.substring(12)}`;
        const newsneaker = {
            name: this.state.name,
            price: this.state.price,
            brand: this.state.brand,
            img: newimg,
            img1: newimgsub1,
            img2: newimgsub2,
            quantity: this.state.quantity,
            code: this.state.code,
            material: this.state.material,
            color: this.state.color,
            discount: this.state.discount
        }
        if(newsneaker.name===''||newsneaker.price===0||newsneaker.brand===''||newsneaker.img===""||newsneaker.img1===''||
        newsneaker.img2===''||newsneaker.quantity===0||newsneaker.code===''||newsneaker.material===''||newsneaker.color===''||newsneaker.discount===""){
            window.alert("Nhập thiếu thông tin!Vui Lòng Kiểm Tra Lại!");
        }
        else{
            this.props.onAdd(newsneaker);
            window.alert('Đã Thêm Sản Phẩm Thành Công!Vui Lòng Kiểm Tra Lại!');
            this.onClear();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editing) {
            this.setState({
                nameupdate: nextProps.editing.name,
                priceupdate: nextProps.editing.price,
                brandupdate: nextProps.editing.brand,
                quantityupdate: nextProps.editing.quantity,
                codeupdate: nextProps.editing.code,
                materialupdate: nextProps.editing.material,
                colorupdate: nextProps.editing.color,
                discountupdate: nextProps.editing.discount
            })
        }
    }
    componentWillMount(){
        if(this.props.editing){
            this.setState({
                nameupdate: this.props.editing.name,
                priceupdate: this.props.editing.price,
                brandupdate: this.props.editing.brand,
                quantityupdate: this.props.editing.quantity,
                codeupdate: this.props.editing.code,
                materialupdate: this.props.editing.material,
                colorupdate: this.props.editing.color,
                discountupdate: this.props.editing.discount
            })
        }
    }
    onClear = () => {
        this.setState({
            name: '',
            price: 0,
            brand: '',
            img: '',
            img1: '',
            img2: '',
            quantity: 0,
            code: '',
            material: '',
            color: '',
            discount: 0
        });
    }
    render() {
        console.log(this.props.editing)
        //console.log(this.state)
        return (
            <div class="add-edit">
                <h5>Thêm Sản Phẩm</h5>
                <hr></hr>
                <form onSubmit={this.onSave}>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Sản Phẩm:"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            class="form-control"
                            name="price"
                            placeholder="Giá:"
                            value={this.state.price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Loại:"
                            name="brand"
                            value={this.state.brand}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            class="form-control"
                            name="quantity"
                            placeholder="Số Lượng:"
                            value={this.state.quantity}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="code"
                            placeholder="Mã Code:"
                            value={this.state.code}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="material"
                            placeholder="Chất Liệu:"
                            value={this.state.material}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            name="color"
                            placeholder="Màu Sắc:"
                            value={this.state.color}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="number"
                            class="form-control"
                            name="discount"
                            placeholder="Giảm Giá:"
                            value={this.state.discount}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="file"
                            name="img"
                            value={this.state.img}
                            onChange={this.onChange}

                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="file"
                            name="img1"
                            value={this.state.imgsub1}
                            onChange={this.onChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="file"
                            name="img2"
                            value={this.state.imgsub2}
                            onChange={this.onChange}
                        />
                    </div>
                    <button id="button" type="submit">Thêm</button>
                    <button id="button" onClick={this.onClear}>Hủy</button>
                </form>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmitUpdate}>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="nameupdate"
                                            placeholder="Sản Phẩm:"
                                            value={this.state.nameupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="number"
                                            class="form-control"
                                            name="priceupdate"
                                            placeholder="Giá:"
                                            value={this.state.priceupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Loại:"
                                            name="brandupdate"
                                            value={this.state.brandupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="number"
                                            class="form-control"
                                            name="quantityupdate"
                                            placeholder="Số Lượng:"
                                            value={this.state.quantityupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="codeupdate"
                                            placeholder="Mã Code:"
                                            value={this.state.codeupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="materialupdate"
                                            placeholder="Chất Liệu:"
                                            value={this.state.materialupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="colorupdate"
                                            placeholder="Màu Sắc:"
                                            value={this.state.colorupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="number"
                                            class="form-control"
                                            name="discountupdate"
                                            placeholder="Giảm Giá:"
                                            value={this.state.discountupdate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button id="button" onClick={this.onSubmitUpdate} type="submit">Cập Nhật</button>
                                    <button id="button" data-dismiss="modal">Hủy</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        editing: state.editing
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd: (sneaker) => {
            dispatch(addsneakerequest(sneaker));
        },
        onUpdate:(sneaker)=>{
            dispatch(updatesneakerrequest(sneaker));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);