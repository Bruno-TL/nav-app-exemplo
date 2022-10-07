import img from './img/imgDC.svg';
import Input from './Input';
import Button from './Button';
import Carrinho from './Carrinho';
import estilo from './style.css'


export default function Headers (){
    return (
        <header className='d-flex justify-content-around mt-4' style={estilo}>
            <img src={img}/>
            <h1 className='h1'>Digital Store</h1>
            <Input/>
            <a className="cadastrar" href='URL do página de cadsatro'>Cadastra-se</a>
            <Button/>
            <Carrinho/>
        </header>
        
    );
}