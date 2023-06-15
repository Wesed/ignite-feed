import { styled } from "styled-components"
import {ReactComponent as Logo} from './../assets/logo.svg'

const Container = styled.header`
  background: var(--gray-600);
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export function Header() {
  return (
    <Container> 
      <Logo />
    </Container>
  )
}