import { ImgHTMLAttributes } from "react";
import { styled } from "styled-components"


const AvatarStyle = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border: 2px solid var(--gray-600); 
  outline: 2px solid var(--green-light);
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
`;

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}


export function Avatar({...props}: AvatarProps) {
  return (
    <AvatarStyle {...props} />
  )
}