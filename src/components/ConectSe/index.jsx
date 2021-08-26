import "./style.css";

const ConectSe = ()=>{
    return (
        <div className="conectse">
            <div className="text-conectse">
                <h3>Se conecte com a gente!</h3>
                <p>Receba ofertas recomendadas e preços exclusivos!</p>
            </div>
            <form>
                <div>
                    <input type="text" placeholder="Digite o seu nome:" />
                    <input type="email" placeholder="Digite o seu e-mail:"/>
                </div>
                <button>Eu Quero</button>
            </form>
        </div>
    )
}

export default ConectSe;