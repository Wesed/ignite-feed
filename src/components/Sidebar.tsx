import { styled } from "styled-components"
import {PencilSimpleLine } from "@phosphor-icons/react"
import { Avatar } from "./Avatar";

const Aside = styled.aside`
  border-radius: 8px;
  background: var(--gray-600);
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  img:first-child {
    width: 100%;
    height: 4.5rem;
    object-fit: cover;
  }

  img:nth-child(2) {
    margin-top: -2rem;
  }

  h3 {
    color: var(--gray-100);
    font-weight: bold;
    font-size: 1rem;
    margin-top: 1rem;
  }

  p {
    color: var(--gray-300);
    font-size: .875rem;
  }
`;

const EditProfile = styled.div`
  border-top: 1px solid var(--gray-500);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    padding: 1rem 1.5rem;
    background: transparent;
    color: var(--green);
    border: 1px solid var(--green);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    gap: .2rem;
    transition: .1s;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: var(--green-light);
      color: var(--white);
    }
    
  }
`;

export function Sidebar() {
  return (
  <Aside> 
    <ProfileInfo>
      <img 
        src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg" 
        alt="" 
      />
      <Avatar src="https://avatars.githubusercontent.com/u/52588477?v=4"/>
      <h3> Wes Eduardo </h3>
      <p> Dev React</p>
    </ProfileInfo>

    <EditProfile>
      <button>
        <PencilSimpleLine size={20} />
        Editar seu perfil
      </button>
    </EditProfile>

  </Aside>
  )
}