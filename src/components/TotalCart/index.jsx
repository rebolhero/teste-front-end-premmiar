import "./style.css";
import { Link } from 'react-router-dom';
import {useCart} from '../../hooks/Cart';
import { useEffect, useState, useMemo } from "react";
import formatPrice from "../../utils/formatPrice";


const TotalCart = ()=>{
    const {cart} = useCart();
    const [total,setTotal] = useState(0);
    const [quantity,setQuantity] = useState(0);
    useEffect(()=>{
        const newTotal = cart.reduce((antigo,item)=>{
            const qtd = item.quantity;
            const preco = item.availability.price;

            return qtd * preco + antigo;
        },0)
        const newQuantity = cart.reduce((antigo,item)=>{
            const qtd = item.quantity;

            return qtd + antigo;
        },0)
        setTotal(newTotal);
        setQuantity(newQuantity);
        console.log("rodou",cart);
    },[cart])

    const parsedTotal = useMemo(()=>{
        return  formatPrice(total);
    },[total])

    return (
        <div className="totalcart">
            <div className="box-totalcart">
                <div className="desc-preco">
                    <p>Subtotal ({quantity} itens)</p>
                    <div>
                        <p>{parsedTotal} </p>
                    </div>
                </div>
                <Link className="continue" to="./cart">Continuar</Link>
            </div>
        </div>
    )
}

export default TotalCart;