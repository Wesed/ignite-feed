import { styled } from "styled-components"
import { Avatar } from "./Avatar";
import {Trash } from "@phosphor-icons/react"


const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentContent = styled.div`
  background: var(--gray-550);
  border-radius: 8px;
  padding: 1rem;
  font-size: .875rem;
  color: var(--gray-100);

  > div {
    display: flex;
    justify-content: space-between;

    svg {
      color: var(--gray-300);
    }
  }

  div > p {
    font-size: .75rem;
    color: var(--gray-300);
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray-200);
  }
`;

const Aplaudir = styled.div`

`;



export function Comment() {
  return (
    <Container> 
      <Avatar src="https://avatars.githubusercontent.com/u/52588477?v=4" />

      <CommentContainer>
        <CommentContent>
          <div>
            <div>
              <h3>Devon Lane</h3>
              <p>Cerca de 2h</p>
            </div>
              <Trash size={24} />
          </div>
          <p>Muito bom Devon, parabéns!!</p>
        </CommentContent>
        <Aplaudir></Aplaudir>
      </CommentContainer>
    </Container>
  )
}