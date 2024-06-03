import { IoMdCloseCircle } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import './colaborador.css';


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size:25,
        onClick: favoritar
    }
    
    return (<div className="colaborador">
        <IoMdCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)} /*para o react entender que tem que apagar o card so depois do click*/ 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favorito">
                {colaborador.favorito 
                    ? <FaHeart {...propsfavorito} color='#FF0000'/> 
                    : <CiHeart {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador

