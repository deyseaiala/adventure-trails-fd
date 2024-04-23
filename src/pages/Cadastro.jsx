import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {Button} from "@mui/material"
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";


function Cadastro() {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const navigate = useNavigate();
  const {cadastrarNovaTrilha} = useContext(TrilhasContext)

  function enviarFormulario(valueForm){

    cadastrarNovaTrilha({...valueForm})

    navigate("/listaTrilhas")
  }


    return (
      <div> 
      <h1>Cadastro de nova trilha</h1>
      <form onSubmit = {handleSubmit(enviarFormulario)} >

        <div>
          <label htmlFor="nomeTrilha"> Nome da trilha</label>
          <input type="text" {...register("nomeTrilha", {
            required: "Campo obrigatório",
            maxLength: {value: 100, message: "Máximo de 100 caracteres neste campo."}
          })} />
          {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
         
        </div>

        <div>
          <label htmlFor="duracao"> Duração estimada (min)</label>
          <input type="number" {...register("duracao", {
            required: "Campo obrigatório"})} />
             {errors?.duracao && <p>{errors.duracao?.message}</p>}
        </div>

        <div>
          <label htmlFor="trajeto"> Trajeto (km)</label>
          <input type="number" {...register("trajeto", {
            required: "Campo obrigatório",
            maxLength: {value: 4, message: "Máximo de 4 caracteres neste campo."}
          })}/>
           {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
        </div>

        <div>
          <label htmlFor="cidade"> Cidade </label>
          <input type="text" {...register("cidade", {
            required: "Campo obrigatório",
            maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
          })} />
           {errors?.cidade && <p>{errors.cidade?.message}</p>}
        </div>

        <div>
          <label htmlFor="estado"> Estado </label>
          <input type="text" {...register("estado", {
            required: "Campo obrigatório",
            maxLength: {value: 2, message: "Máximo de 2 caracteres neste campo."}
          })} />
           {errors?.estado && <p>{errors.estado?.message}</p>}
        </div>

        <div>
          <label htmlFor="nomeUsuario"> Nome completo usuário</label>
          <input type="text" {...register("nomeUsuario", {
            maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
          })} />
           {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}
        </div>

        <div>
          <label htmlFor="dificuldade">Dificuldade</label>
          <select {...register("dificuldade", {required: "Campo obrigatório"})}>
          <option value="Iniciante"> Iniciante</option>
          <option value="Intermediário"> Intermediário</option>
          <option value="Difícil"> Difícil</option>
          </select>
          {errors?.dificuldade && <p>{errors.dificuldade?.message}</p>}
        </div>

        <div>
          <label htmlFor="tipo"> Tipo de trilha</label>
          <select {...register("tipo", {required: "Campo obrigatório"})}>
          <option value="Caminhada / Trekking"> Caminhada / Trekking</option>
          <option value="Ciclismo"> Ciclismo</option>
          </select>
          {errors?.tipo && <p>{errors.tipo?.message}</p>}
        </div> 

        <div>
          <label htmlFor="urlImagem"> URL imagem da trilha</label>
          <input type="text" {...register("urlImagem", {
            maxLength: {value: 300, message: "Máximo de 300 caracteres neste campo."}
          })} />
           {errors?.urlImagem && <p>{errors.urlImagem?.message}</p>}
        </div>
        <Button variant="contained" type="button" onClick= {handleSubmit(enviarFormulario)}>Cadastrar </Button>
        <Link to="/"><Button variant="contained">Voltar</Button></Link>

      </form>

      
       
      </div>
    )
  }
  
  export default Cadastro;