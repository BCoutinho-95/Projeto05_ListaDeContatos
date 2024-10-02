import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao, Etiquetas } from './styles'
import * as enums from '../../utils/enums/Lista'
import { cadastrar } from '../../store/reducers/tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    // const contatoParaAdicionar = new Tarefa(
    //   titulo,
    //   prioridade,
    //   enums.Status.PENDENTE,
    //   telefone,
    //   1,
    //   email
    // )
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        email,
        telefone,
        status: enums.Status.PENDENTE
      })
    )
    navigate('')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Etiquetas>Nome Completo :</Etiquetas>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
        />
        <Etiquetas>E-mail :</Etiquetas>
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
        />
        <Etiquetas>Telefone :</Etiquetas>
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="number"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
