import Questao01B from "./Questao01B"

let nome = "Luiz"
let sobrenome = "Eduardo"
let curso = "Engenharia de Software"

const Questao01A = ({disciplinas}) => {
  return(
    <div className="questao01A">
      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobrenome}</p>
      <p>Curso: {curso}</p>

    </div>
  )
}

export default Questao01A