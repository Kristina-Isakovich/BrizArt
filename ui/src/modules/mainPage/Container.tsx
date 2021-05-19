import React from 'react'
import { StylesContainer, StylesH1, StylesH2, StylesSection } from './styles'
import { content } from './content.service'

export const MainPage: React.FC = () => {
  return (
    <div>
      <StylesSection>
        <StylesH1>ДИЗАЙНЕРСКИЕ ВЕНТИЛЯЦИОННЫЕ РЕШЕТКИ</StylesH1>
      </StylesSection>

      {content.map(({title, component, id}) => (
        <StylesContainer key={title} id={id}>
          <StylesH2>{title}</StylesH2>
          {component}
        </StylesContainer>
      ))}
    </div>
  )
}
