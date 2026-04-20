import { useState } from 'react'
import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'


//props é um OBJETO
//props.children
// function TituloFormulario (props) {
//   return (
//     <h2>{props.children}</h2>
//   )
// }

// function CompoDeFormulario ({ children }) {
//   return (
//     <fieldset>
//       {children}
//     </fieldset>
//   )
// }

// function Label ({ children, htmlFor }) {
//   return(
//     <label htmlFor={htmlFor}>
//       {children}
//     </label>
//   )
// }

// function CampoDeEntrada (props){
//   return (
//     <input {...props}/>
//   )
// }

// No react, componentes são funções que retornam um pedaço de código HTML, que é o que chamamos de JSX. O JSX é uma extensão de sintaxe do JavaScript que permite escrever código HTML dentro do JavaScript.
// function FormularioDeEvento () {
//   return (
//     <form action="" className="form-evento">
//       <TituloFormulario>
//         Preencha para criar um evento:
//       </TituloFormulario>
//       <CompoDeFormulario>
//         <Label htmlFor="nome">
//           Qual o nome do evento?
//         </Label>
//         <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' musica='rock'/>
//       </CompoDeFormulario>
//     </form>
//   )
// }

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
