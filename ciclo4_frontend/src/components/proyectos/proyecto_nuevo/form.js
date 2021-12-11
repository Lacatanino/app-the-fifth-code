
import React from "react";


import {
  gql, useMutation
} from "@apollo/client";

const MUTATION_PROYECTO=gql`
  mutation crearProyecto($name: String,
      $generalObjective: String,
      $specificObjectives: [String],
      $budget: Float,
      $startDate: String,
      $endDate: String,
      $status: String,
      $leader_id: String){
          createProyecto(Proyecto:{name: $name,
              generalObjective: $generalObjective,
              specificObjectives: $specificObjectives,
              budget: $budget,
              startDate: $startDate,
              endDate: $endDate,
              status: $status,
              leader_id: $leader_id})
       }
`;




const FormProyecto =()=>{
  const[creadorDeProyectos] = useMutation(MUTATION_PROYECTO);
  let proyecto ={
    name: " ",
    generalObjective:" ",
    specificObjectives: [],
    budget: 0,
    startDate: " ",
    endDate: " ",
    status: " ",
    leader_id:" "
  }

        return(
          <form onSubmit={e => {
            e.preventDefault();
            creadorDeProyectos({variables:{
              name: proyecto.name.value,
              generalObjective: proyecto.generalObjective.value,
              specificObjectives: proyecto.specificObjectives.value,
              budget: parseInt(proyecto.budget.value),
              startDate: proyecto.startDate.value,
              endDate: proyecto.endDate.value,
              status: proyecto.status.value,
              leader_id: proyecto.leader_id.value
          }})}}>

<div>
                <label>Nombre Proyecto</label>
                <input ref={name => proyecto.name = name} placeholder="Nombre" />
            </div>
            <div>
                <label>Objetivos</label>
                <input ref={generalObjective => proyecto.generalObjective = generalObjective} placeholder="Objetivos" />
            </div>
            <div>
                <label>Objetivos especificos</label>
                <input ref={specificObjectives => proyecto.specificObjectives = specificObjectives} placeholder="Objetivos generales" />
            </div>
            <div>
                <label>fecha inicial</label>
                <input type="date" ref={startDate => proyecto.startDate = startDate} placeholder="fecha inicial" />
            </div>
            <div>
                <label>fecha final</label>
                <input type="date" ref={endDate => proyecto.endDate = endDate} placeholder="fecha final" />
            </div>
            <div>
                <label>Lider</label>
                <input ref={leader_id => proyecto.leader_id = leader_id} placeholder="Lider" />
            </div>
            <div>
                <label>Presupuesto</label>
                <input ref={budget => proyecto.budget = budget} placeholder="Presupuesto" />
            </div>
            <div><button type="submit">Registrar Proyecto</button></div>
        </form>
        )
}
export default FormProyecto;