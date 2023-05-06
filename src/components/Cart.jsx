import { useDispatch, useSelector } from "react-redux";
import '../Style/style.css'
import Shiping from '../assets/shippingIcon.png'

function Cart() {

    const dispatch=useDispatch();
    const newValue=useSelector(state=>state.increment.newProducts)
    // console.log(newValue);
    return (
        <div className="cart"> 
        <div className="cart-section1">Your Cart (4 items)</div>
            <div className="cart-section2">
                <div className="cart-section2-items1">Item</div>
                <div className="cart-section2-items2">Price</div>
                <div className="cart-section2-items3">Quantity</div>
                <div className="cart-section2-items4">Total</div>
            </div>
            {
            newValue.map((element,index)=>{
                return (
                    <div className="cart-section3">
                        
                        <div className="cart-section3A">
                            <img src={element.thumbnail}></img>
                            <div>{element.title}</div>
                        </div>
                     
                        <div className="cart-section3B">{element.price}</div>
                        
                        <div className="cart-section3C">
                            <button>+</button>
                            <span>{element.quantity}</span>
                            <button>-</button>
                        </div>
                       
                        <div className="cart-section3D">{element.price*element.quantity}</div>
                        
                    </div>
                    )
                })
            }
            <div className="cart-section4">
                <div className="cart-section4A">
                    <div>Subtotal:</div>
                    <div>$1019.98</div>
                </div>
                <div className="cart-section4B">
                    <div>Sales Tax:</div>
                    <div>$102</div>
                </div>
                <div className="cart-section4C">
                    <div>Coupon Code:</div>
                    <div>Add Coupon</div>
                </div>
                <div className="cart-section4D">
                    <div>Grand total:</div>
                    <div>$1121.98</div>
                </div>
                <div className="cart-section5D">
                    <div>congrats, you're eligible for Free Shipping</div>
                    <img src={Shiping} alt="shipping icon" />
                </div>
                <div className="cart-section6D">
                    <button>Check out</button>
                </div>
            </div>        
        </div>
    )
}
export default Cart;
