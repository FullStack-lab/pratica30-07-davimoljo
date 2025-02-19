// Importa o componente LoginSignup, que será usado na aplicação principal
import LoginSignup from "./Components/LoginSignup/LoginSignup";


// Componente principal da aplicação
const App = () => {
  return (
    <div>
      {/* Renderiza o componente LoginSignup */}
      <LoginSignup />
    </div>
  )
}

// Exporta o componente App para uso em outras partes da aplicação
export default App;

