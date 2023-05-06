import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement, AddToCart } from '../redux/incrementSlice'

function Products() {

    const dispatch=useDispatch();

    const value=useSelector((state)=>state.increment.products)
    // console.log(value)

    return (
        <div className='product-container'>
        { 
            value.map((val,index)=>{
                return (
                    <div className='product-section'>
                        <div className='product-sectionA'>
                            <img src={val.thumbnail} className='product-section-img' />
                        </div>
                        <div className='product-sectionB'>
                            <div key={index}>{val.title}</div>
                            <div className='product-sectionB-btn'>
                            <span onClick={()=>dispatch(Increment(index,val.quantity))} className='product-sectionB-btn1'>+</span>
                            <span>{val.quantity}</span>
                            <span onClick={()=>dispatch(Decrement(index,val.quantity))} className='product-sectionB-btn2'>-</span>
                            </div>
                        </div>
                        <div className='product-sectionC'>
                            <div>₹{val.price}</div>
                            <div className='product-sectionC-btn'>
                            <span onClick={()=>dispatch(AddToCart(val))} className='product-sectionC-btn1'>AddToCart</span>
                            </div>
                        </div>
                    </div>    
                )
            })
        }
        </div>

    )
}
export default Products;
