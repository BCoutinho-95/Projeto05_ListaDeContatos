import * as enums from '../utils/enums/Lista'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  telefone: string
  id: number
  email: string
  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    telefone: string,
    id: number,
    email: string
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.telefone = telefone
    this.id = id
    this.email = email
  }
}

export default Tarefa
