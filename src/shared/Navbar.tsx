import { Link } from "react-router-dom"
import styled from "styled-components";
import { PageGutter } from "./Styled";

const StyledContainer = styled.div`
  ${PageGutter};
  padding-top: 18px;
  padding-bottom: 18px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
`;

const StyledLink = styled(Link)`
  margin-right: 12px;
  color: black;
  text-decoration: none;
  &:hover {
    opacity: .6;
  }
`;

const Logo = styled.span`
  font-weight: bold;
  margin-right: 12px;
`;

const Navbar = () => (
  <StyledContainer>
    <Logo>GA Real Estate Practice</Logo>
    <StyledLink to="/">Units</StyledLink>
    <StyledLink to="/exam">Practice Exam</StyledLink>
  </StyledContainer>
)
export default Navbar;