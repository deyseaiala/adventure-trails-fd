import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {Button} from "@mui/material"
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";
import styles from '../pages/cadastro.module.css'


function Cadastro() {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const navigate = useNavigate();
  const {cadastrarNovaTrilha} = useContext(TrilhasContext)

  function enviarFormulario(valueForm){

    cadastrarNovaTrilha({...valueForm})

    navigate("/listaTrilhas")
  }


    return (
      
      <div className={styles.conteiner}> 
      
      <form onSubmit = {handleSubmit(enviarFormulario)} >
        <h1>Cadastro de nova trilha</h1>
      
          <label htmlFor="nomeTrilha"> Nome da trilha</label>
          <input type="text" {...register("nomeTrilha", {
            required: "Campo obrigatório",
            maxLength: {value: 100, message: "Máximo de 100 caracteres neste campo."}
          })} />
          {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
         
        

        
          <label htmlFor="duracao"> Duração estimada (min)</label>
          <input type="number" {...register("duracao", {
            required: "Campo obrigatório"})} />
             {errors?.duracao && <p>{errors.duracao?.message}</p>}
        

        
          <label htmlFor="trajeto"> Trajeto (km)</label>
          <input  type="number" {...register("trajeto", {
            required: "Campo obrigatório",
            maxLength: {value: 4, message: "Máximo de 4 caracteres neste campo."}
          })}/>
           {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
        

        
          <label htmlFor="cidade"> Cidade </label>
          <input  type="text" {...register("cidade", {
            required: "Campo obrigatório",
            maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
          })} />
           {errors?.cidade && <p>{errors.cidade?.message}</p>}
        

        
          <label htmlFor="estado"> Estado </label>
          <input  type="text" {...register("estado", {
            required: "Campo obrigatório",
            maxLength: {value: 2, message: "Máximo de 2 caracteres neste campo."}
          })} />
           {errors?.estado && <p>{errors.estado?.message}</p>}
        

        
          <label htmlFor="nomeUsuario"> Nome completo usuário</label>
          <input  type="text" {...register("nomeUsuario", {
            maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
          })} />
           {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}
        

        
          <label htmlFor="dificuldade">Dificuldade</label>
          <select  {...register("dificuldade", {required: "Campo obrigatório"})}>
          <option value="Iniciante"> Iniciante</option>
          <option value="Intermediário"> Intermediário</option>
          <option value="Difícil"> Difícil</option>
          </select>
          {errors?.dificuldade && <p>{errors.dificuldade?.message}</p>}
        

        
          <label htmlFor="tipo"> Tipo de trilha</label>
          <select  {...register("tipo", {required: "Campo obrigatório"})}>
          <option value="Caminhada / Trekking"> Caminhada / Trekking</option>
          <option value="Ciclismo"> Ciclismo</option>
          </select>
          {errors?.tipo && <p>{errors.tipo?.message}</p>}
        

        
          <label htmlFor="urlImagem"> URL imagem da trilha</label>
          <input  type="text" {...register("urlImagem", {
            maxLength: {value: 300, message: "Máximo de 300 caracteres neste campo."}
          })} />
           {errors?.urlImagem && <p>{errors.urlImagem?.message}</p>}
      <div className={styles.btn}>
        <Button className={styles.margin30} variant="contained" color="success" type="button" onClick= {handleSubmit(enviarFormulario)}>Cadastrar </Button> 
        <div></div>
        <Link to="/" className={styles.margin30}><Button variant="contained" color="success">Voltar</Button></Link>
      </div>
      </form>

      
       
      </div>
    )
  }
  
  export default Cadastro;