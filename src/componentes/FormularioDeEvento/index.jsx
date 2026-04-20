import { TituloFormulario } from "../TituloFormulario";
import { CompoDeFormulario } from "../CompoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";


export function FormularioDeEvento () {
  return (
    <form action="" className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CompoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' musica='rock'/>
      </CompoDeFormulario>
    </form>
  )
}