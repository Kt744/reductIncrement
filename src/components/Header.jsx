import Cart from "./Cart";
import {useSelector } from "react-redux";
// import Products from "./Products";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Header() {
    const counts=useSelector(state=>state.increment.count)
    return (
        <>
        <div className="header">
            <div className="logo">
            </div>
            <ul className="headerlist">
                <li><Link to="/products">Home</Link></li>
                <li>About</li>
                <li>Products</li>
                <li>Contact us</li>
            </ul>
            <div className="searchbar">
            <svg data-v-3d32c0e0="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class=""><g data-v-3d32c0e0="" clip-path="url(#clip0_463_27405)"><path data-v-3d32c0e0="" d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path></g><defs data-v-3d32c0e0=""><clipPath data-v-3d32c0e0="" id="clip0_463_27405"><path data-v-3d32c0e0="" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                Search Fire Pits, Grills,Camp Stoves
            </div>
            <div className="icons">
            <svg data-v-05740755="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class=""><g data-v-05740755="" clip-path="url(#clip0_463_29561)"><path data-v-05740755="" d="M12 23a7.5 7.5 0 007.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0012 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.76 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.12-.595a5.5 5.5 0 11-9.088-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462h.001z"></path></g><defs data-v-05740755=""><clipPath data-v-05740755="" id="clip0_463_29561"><path data-v-05740755="" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            <svg data-v-05740755="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class=""><g data-v-05740755="" clip-path="url(#clip0_463_28957)"><path data-v-05740755="" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0012 20a7.97 7.97 0 005.167-1.892A6.978 6.978 0 0012.16 16a6.982 6.982 0 00-5.147 2.256zM5.616 16.82A8.975 8.975 0 0112.16 14a8.972 8.972 0 016.362 2.634 8 8 0 10-12.906.187v-.001zM12 13a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path></g><defs data-v-05740755=""><clipPath data-v-05740755="" id="clip0_463_28957"><path data-v-05740755="" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            <svg data-v-05740755="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class=""><g data-v-05740755="" clip-path="url(#clip0_463_24105)"><path data-v-05740755="" d="M14.5 2a3.5 3.5 0 013.163 5.001L21 7a1 1 0 011 1v4a1 1 0 01-1 1h-1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8H3a1 1 0 01-1-1V8a1 1 0 011-1l3.337.001a3.5 3.5 0 015.664-3.95A3.48 3.48 0 0114.5 2zM18 13H6v7h12v-7zm2-4H4v2h16V9zM9.5 4a1.5 1.5 0 00-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 00-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 00-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 000-2.986L14.5 4z"></path></g><defs data-v-05740755=""><clipPath data-v-05740755="" id="clip0_463_24105"><path data-v-05740755="" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            <div><Link to="/cart">Cart</Link></div>
            </div>
            <span></span>
        </div>
        {/* <Products /> */}
        <Outlet />
        </>
    )
}
export default Header;
