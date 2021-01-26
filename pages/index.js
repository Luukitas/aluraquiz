import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/questoesQuiz"
import LogoAlura from "../src/components/logoAlura"
import Link from "next/link"

const Title = styled.title`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const BgFundo = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  flex: 1;
  height: 100vh;
  max-height: 100vh;
`

export default function Home() {
  return (
      <BgFundo backgroundImage={db.bg}>
        <Title>{db.title}</Title>
        <LogoAlura><img></img></LogoAlura>
        <Widget>
          <Widget.components>
            <Widget.parts>
            <Widget.header><h1>Iniciar Quiz</h1></Widget.header>
            <Widget.main>
              <p>Teste os seus conhecimentos sobre o universodo Chaves e divirta-se criando o seu AluraQuiz!</p>
              <input type="text" placeholder="Digite seu e-mail"></input>
              <Link href="/questionOne">
                <a>Começar</a>
              </Link>
            </Widget.main>
            </Widget.parts>
            <Widget.parts>
            <Widget.header>adoffisdof</Widget.header>
            <Widget.main>
              <p>Alguns dos quizes (?) que mais gostei:</p>
              <a href="https://www.alura.com.br/">Link 1</a>
              <a href="https://pt-br.reactjs.org/">Link 2</a>
              <a href="https://nextjs.org/">Link 3</a>
            </Widget.main>
            </Widget.parts>
          </Widget.components>
        </Widget>
      </BgFundo>
    )
    
}
