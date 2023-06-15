import './global.css'
import { Header } from "./components/Header"
import { styled } from "styled-components"
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 256px minmax(1fr, 52rem);
  justify-content: center;
  align-items: start;
  color: white;
  padding: 2rem 10rem 0;
  gap: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Post />
        <Post />
      </Container>
    </>
  )
}

export default App
