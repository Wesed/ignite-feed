import { styled } from "styled-components"
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

const Container = styled.article`
  background: var(--gray-600);
  padding: 2.5rem;
  border-radius: 8px;
  grid-column: 2;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: bold;
    color: var(--gray-100);
  }

  p {
    color: var(--gray-300);
    font-size: .875rem;
  }

  div:nth-child(1) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const ContainerPost = styled.div`
  margin-top: 1.5rem;
  color: var(--gray-100);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--green);
    font-weight: bold;

    &:hover {
      color: var(--green-light);
    }
  }

  span > a {
    margin-right: .5rem;
  }
`;

const ContainerFeedback = styled.form`
  border-top: 1px solid var(--gray-500);
  margin-top: 1.5rem;

  h3 {
    margin-top: 1.5rem;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    height: 6rem;
    resize: none;
    border: 1px solid transparent;
    background: var(--gray-700);
    color: var(--gray-100);
    border-radius: 8px;
    margin-top: 1rem;
    padding: 1rem;
    transition: .1s;

    &::placeholder {
      color: var(--gray-300);
    }

    &:hover {
      border: 1px solid var(--green);
    }
  }

  div {
    visibility: hidden;
    max-height: 0;
  }

  button {
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    color: var(--gray-100);
    background: var(--green);
    border: 1px solid transparent;
    margin-top: 1rem;
    cursor: pointer;
    transition: .1s;


    &:hover {
      background: var(--green-light);
    }
  }

  &:focus-within {
    div {
      visibility: visible;
      max-height: none;
    }
  }
`;

export function Post() {
  return (
    <Container>
      <ContainerHeader>
          <div>
            <Avatar src="https://avatars.githubusercontent.com/u/52588477?v=4"  />
            <div>
              <h3>Wes Eduardo</h3>
              <p>Dev React</p>
            </div>
          </div>

          <p>Publicado há 1h</p>
      </ContainerHeader>

      <ContainerPost>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. 
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p> 👉<a href="#">jane.design/doctorcare</a></p>
        <span>
          <a href="#">#novoprojeto</a>
          <a href="#">#novoprojeto</a>
          <a href="#">#novoprojeto</a>
        </span>
      </ContainerPost>

      <ContainerFeedback>
        <h3>Deixe seu feedback</h3>
        <textarea name="textarea" placeholder="Escreva um comentário..." />
        <div>
          <button>Publicar</button>
        </div>
      </ContainerFeedback>

      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}