import styled from "styled-components";

export const mdHeader1 = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.font};
  font-weight: normal;
  margin-bottom: -5px;
  margin-top: 30px;
`;

export const mdHeader2 = styled.h2`
  color: black;
  font-family: ${(props) => props.theme.font};
  font-weight: normal;
  margin-top: 20px;
`;

export const mdHeader3 = styled.h3`
  color: black;
  font-family: ${(props) => props.theme.font};
  font-weight: normal;
  margin-top: 10px;
`;

export const mdParagraph = styled.p`
  color: black;
  font-family: ${(props) => props.theme.font};
  font-size: 1rem;
  line-height: 28px;
`;

export const mdListItem = styled.li`
  color: black;
  font-family: ${(props) => props.theme.font};
  line-height: 30px;
  margin: 5px 0px 5px 0px;
`;

export const mdPre = styled.pre`
  color: black;
  font-family: ${(props) => props.theme.font};
  line-height: 30px;
  margin: 5px 0px 5px 0px;
`;

export const mdImg = styled.img`
  width: auto;
  max-height: 450px;
`;
