import * as PropTypes from 'prop-types'

function CardTrilha({dadosTrilha}){

    return(
       
        <div>
            <div className="imagemTrilha">
                <img src={dadosTrilha.urlImagem} alt="imagem da trilha" />
            </div>
            <div className="infoTrilha"> 
                <h1>{dadosTrilha.nomeTrilha}</h1>
                <span>{dadosTrilha.cidade}/{dadosTrilha.estado}</span>
                <h3>Por {dadosTrilha.nomeUsuario}</h3>
                <span>Duração: {dadosTrilha.duracao} min</span>
                <span>Trajeto: {dadosTrilha.trajeto} km</span>
                <h6>{dadosTrilha.dificuldade}</h6>
            </div>
        </div>
        
        
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string,
        cidade: PropTypes.string,
        estado: PropTypes.string,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.string,
        nomeUsuario: PropTypes.string,
        urlImagem: PropTypes.string
    })
}

export default CardTrilha;