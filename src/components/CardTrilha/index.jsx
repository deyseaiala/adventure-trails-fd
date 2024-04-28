//import * as PropTypes from 'prop-types'
import styles from "./CardTrilha.module.css"

function CardTrilha({dadosTrilha}){

    return(
       
        <div className={styles.conteiner}>
            <div className="imagemTrilha">
                <img src={dadosTrilha.urlImagem} alt="imagem da trilha" width={400} height={351}/>
            </div>
            <div className={styles.infoTrilha}>
             
                <h1>{dadosTrilha.nomeTrilha}</h1>
                <h3>Por {dadosTrilha.nomeUsuario}</h3>
                    <span>{dadosTrilha.cidade}/{dadosTrilha.estado}</span>
                    <span>Duração: {dadosTrilha.duracao} min</span>
                    <span>Trajeto: {dadosTrilha.trajeto} km</span>
                    <h5> {dadosTrilha.dificuldade}! </h5>
                
            </div>
        </div>
        
        
    )
}

//CardTrilha.propTypes = {
//    dadosTrilha: PropTypes.exact({
//        nomeTrilha: PropTypes.string,
//        cidade: PropTypes.string,
//        estado: PropTypes.string,
//        duracao: PropTypes.number,
//        trajeto: PropTypes.number,
//        dificuldade: PropTypes.string,
//        tipo: PropTypes.string,
//        nomeUsuario: PropTypes.string,
//        urlImagem: PropTypes.string
//    })
//}

export default CardTrilha;

