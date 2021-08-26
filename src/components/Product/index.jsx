import "./style.css";
import coracao from "../../images/heart-gray.png";
import coracaoPink from "../../images/heart-pink.png";
import {useCart} from '../../hooks/Cart';
import { useEffect, useState, useMemo } from "react";
import formatPrice from "../../utils/formatPrice";


const Product = ({prod})=>{
    const {addToCart, cart, deleteToCart} = useCart();
    const parcela = prod.availability.price/8;

    const [isInCart,setIsInCart] = useState(false);
    useEffect(()=>{
        const isInCartFilter = cart.filter((cartItem)=>{
            return cartItem.sku === prod.sku;
        })
        setIsInCart(!!isInCartFilter.length);
    },[cart,prod])

    const parsedTotal = useMemo(()=>{
        return  formatPrice(prod.availability.price);
    },[prod.availability.price])

    return (
        <div className='product'>
            <div className="img-like">
                <img src={coracao} alt="like"/>
                <img src={coracaoPink} alt="like"/>
            </div>
            <div className="box-product">
                <div className="img-product">
                    <img src={prod.imageUrl} alt="like"/>
                </div>
                <div className="name-product">
                    <p>{prod.name}</p>
                </div>
                <div className="preco-product">
                    <h4>{parsedTotal}</h4>
                    <p>8x de R$ {parcela} sem juros</p>
                </div>
                <div className="comprar">
                   
                   {
                    isInCart
                    ?<button onClick={()=>{deleteToCart(prod.sku)}} className="remover">Remover da Sacola</button>
                    :<button onClick={()=>{addToCart(prod)}} className="adicionar">Adicionar à sacola</button>
                   }
                </div>
            </div>
        </div>
    )
}

export default Product;