import { useContext } from "react";

import { myContext } from '../App.jsx';

function Cart() {
    let items=useContext(myContext);
    let sum=0;
    items.forEach(element=>{
      sum=sum+element.quantity
    })
    return (
        <div className="cart">
            Cart {sum}
        </div>
    )
}
export default Cart;
