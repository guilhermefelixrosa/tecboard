import { useState } from 'react'
import './App.css'

// No react, componentes são funções que retornam um pedaço de código HTML, que é o que chamamos de JSX. O JSX é uma extensão de sintaxe do JavaScript que permite escrever código HTML dentro do JavaScript.
function FormularioDeEvento () {
  return (
    <form action="" className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evento?
        </label>
        <input type="text" id='nome'/>
      </fieldset>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <img src="\logo.png" alt="" />
      </header>
      <section>
        <img src="\banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
