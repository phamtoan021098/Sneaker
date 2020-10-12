import React,{Component} from 'react';
class BrandLogo extends Component{
    render(){
        return(
            <section class="brand">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/4e24ff1dffc4b9547cc0aa1d931af2db" alt="" />
                </div>
                <div class="col-sm-4">
                  <img src="https://i.pinimg.com/originals/2f/d0/0a/2fd00aacf46d67bf0c1754a305efee20.png" alt="" />
                </div>
                <div class="col-sm-4">
                  <img src="http://www.pecasse.be/upload/catalogimg/product/51aed5f6.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default BrandLogo;