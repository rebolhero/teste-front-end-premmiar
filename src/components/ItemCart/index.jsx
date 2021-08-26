import "./style.css";
import airFryer from "../../images/airfryer.jpg";
import del from "../../images/delete.png";
import {useCart} from '../../hooks/Cart';
import { useCallback} from "react";


const ItemCart = ({item})=>{
    const {updateCart,deleteToCart} = useCart();


    const allQuantity = useCallback(() =>{
        let options = [];
        for(var i = 1; i <= 4; i++){
            options.push(<option value={i} defaultValue={i===item.quantity} key={`${item.sku}-${i}`}>{i}</option>);
        }
        return options;
    },[item])
    return (
        <div className="itemcart">
            <div className="box-itemcart">
                <img className="img-item" src={airFryer} alt="airfryer"/>
                <div className="desc-item">
                    <div>
                        <p className="desc">{item.name}</p>
                        <p className="cod">Código do produto: {item.sku}</p>
                    </div>
                    <p className="vendedor">Vendido e entregue por {item.vendor.name}</p>
                </div>
                <div className="qtd">
                    <label htmlFor="quantidade">Quantidade:</label> 
                    <div className="box-qtd">
                        <select onChange={(e)=>{updateCart(item.sku,e.target.value)}} name="quantidade" value={item.quantity} id="quantidade">
                            {allQuantity()}
                        </select>
                        <button onClick={()=>{deleteToCart(item.sku)}}>
                            <img src={del} alt="delete"/>
                        </button>
                    </div>
                </div>
                <div className="precos">
                    <p>Preço:</p>
                    <div>
                        <p>De R$ 759,90 por</p>
                        <p>R$ 389,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;