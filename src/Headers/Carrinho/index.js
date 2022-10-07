import carrinho from '../img/carrinho.svg'
import estilo from './style.css'

export default function Carrinho() {
    return (
        <button className='button-carrinho'>
            <img  src={carrinho} style={estilo}/>
        </button>
        
    );
}