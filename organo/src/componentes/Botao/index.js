import './Botao.css'

const Botao = (prosp) =>{
   return (
      <button className='botao'>
         {prosp.children}
      </button>
   )
}

export default Botao