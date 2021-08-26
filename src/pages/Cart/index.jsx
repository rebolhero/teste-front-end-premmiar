import ItemCart from '../../components/ItemCart';
import "./style.css";
import Header from '../../components/Header';
import TotalCart from '../../components/TotalCart';
import { useCart } from '../../hooks/Cart';



const Cart = () => {
    const { cart } = useCart();

    return (
        <div className="cart">
            <Header />
            <div className="body-cart">
                <h1>Sacola</h1>
                <div>
                    {cart.length 
                        ?cart.map((cartItem) => {
                            return <ItemCart item={cartItem} key={cartItem.sku} />
                        }) 
                        :<div>Sacola Vazia :(</div>
                    }

                </div>

                <TotalCart />
            </div>
        </div>
    )
}

export default Cart;