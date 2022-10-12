let disciplinas = ['Web', 'APS', 'Logica']

function mapeamento (disciplina) {
 let stringDisciplina = ''
 for (let i = 0; i < disciplinas.length; i++) {
  stringDisciplina += disciplinas[i] 
  if (i < disciplinas.length - 1) {
    stringDisciplina += ', '
    }
 }
  return stringDisciplina
}

const Questao01B = () => {
  return (
    //retornar as disciplinas 
    <div className="questao01B">
      <p>Disciplinas: {mapeamento(disciplinas)}</p>
    </div>
  ) 
}

export default Questao01B