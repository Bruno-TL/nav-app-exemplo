import estilo from './style.css'
export default function Input (){
    return (
        <div className="" style={estilo}>
        <button className='button-input'>
            <input  type="text"  className="input-Input" placeholder="Pesquisar produto"/>
            <span className="material-icons">search</span>
        </button>
        </div>
    );
}