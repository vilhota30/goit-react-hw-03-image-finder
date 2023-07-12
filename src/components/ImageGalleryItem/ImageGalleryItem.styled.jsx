import styled from "@emotion/styled";

export const Li = styled.li`
border-radius: 3px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
width: 100%;
height: 280px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&&:hover{
    transform: scale(1.10);
    cursor: pointer;
}
`;