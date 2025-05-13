import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar(){
    const {cart}=useSelector((state)=>state);
   return(
    <div>
        <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to="/">
                <div className='ml-5'>
                <img src='../logo.png'
                alt=""
                className='h-14' />
                </div>
            </NavLink>
           <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
           <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="/cart">
                <div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                    {
                        cart.length>0 ? <div className='absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center rounded-full animate-bounce text-white'>{cart.length}</div> : <span></span>
                    }
                </div>
            </NavLink>
           </div>
        </div>
    </div>
   );
}
export default Navbar;