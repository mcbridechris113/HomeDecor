import { ImPriceTag } from 'react-icons/im'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BsBell } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Home(){
  return(
      <nav>
      
        <h2 class="top-navbar-text"> <ImPriceTag/> Home Decor</h2>
        <input type ="text" placeholder="Search"/> <AiOutlineSearch/>
        <h4> <BsPerson/> club O </h4>
        <h4> <BsBell/>  Notifications </h4>
        <h4> <AiOutlineShoppingCart/> Cart </h4>

      </nav>
  )
}