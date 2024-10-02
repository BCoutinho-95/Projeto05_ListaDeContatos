import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#2471a3 ' : '#1a5276')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fff')};
  color: ${(props) => (props.ativo ? '#2471a3 ' : '#1a5276')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
`
