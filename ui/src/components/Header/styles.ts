import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledHeader = styled.header`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3.5rem;
  background-color: ${COLORS.light};
  min-height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 5;
`

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${TEXT_SIZE.header};
  font-weight: 500;
  
  & > *:not(:last-child) {
    margin-right: 4rem;
  }
  & > a:hover {
    transition: .5s;
    color: ${COLORS.accent};
  }
`
