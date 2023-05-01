import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from '../redux/incrementSlice'

function Products({item,setItem}) {

    const dispatch=useDispatch();

    const value=useSelector((state)=>state.increment.products)
    // console.log(value)

    return (
        <div>
        { 
            value.map((val,index)=>{
                return (
                    <>
                    <div key={index}>{val.title}</div>
                    <button onClick={()=>dispatch(Increment(val))}>+</button>
                    <span>{val.quantity}</span>
                    <button onClick={()=>dispatch(Decrement(val))}>-</button>
                    </>
                )
            })
        }
        <div>{}</div>
        </div>

    )
}
export default Products;
