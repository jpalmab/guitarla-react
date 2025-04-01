import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"

//se renderiza el componente HEADER=  <Header />  (OBLIGATORIO PARA QUE SE MUESTRE)

function App() {

  //STATE, la convenci[o]n en REACT ME DICE si mi state se llama AUTH y
  //lo que modifica el state se debe empezar en set, en este
  //caso setAuth
  // const [auth, setAuth] = useState(true)
  //const [total, setTotal] = useState(0)
  //const [cart, setCart] = useState([])

  //  const [auth, setAuth] = useState(false)
  //useEffect sirve y se ejecuta dependiendo las dependencias que se le ponga,
  //renderizando as[i] estas, en este caso la variable auth, se modifica el tiempo
  //y estado m[a]s abajo en el c[o]digo, pero se vuelve a ejecutar useEffect
  //useEffect(() => {
  //if (auth) {
  //console.log('Autenticado')
  //}
  //console.log('componente listo o escuchando por Auth')
  //}, [auth])

  //  setTimeout(() => {
  //    setAuth(true)
  //  }, 3000)

  const [data, setData] = useState(db)
  //console.log(data)

  const [cart, setCart] = useState([])



  return (
    <>


      <Header />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (

            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
            />

          ))}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>


    </>
  )
}

export default App
