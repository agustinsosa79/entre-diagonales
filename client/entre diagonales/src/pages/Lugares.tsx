import { useEffect, useState } from "react"
import { getLugares } from "../services/lugaresServices"
import { Navbar } from "../components/Navbar"
import { Eventos } from "../components/Eventos"

interface Lugar {
    id: number,
    nombre: string,
    direccion: string,
    descripcion:string,
    horario: string
}

export const Lugares = () => {
    const [lugares, setLugares] = useState<Lugar[]>()

    useEffect(() => {
        getLugares()
        .then(setLugares)
        .catch(err => console.error(err))
    }, [])

    return(
        <>
        <Navbar />
        <div className="flex flex-1/2 items-center justify-center min-h-screen bg-gray-200 text-white p-5">
        <section>
          <Eventos />
        </section>
        <section>

      <div className="p-4">
  <ul className=" space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 rounded-2xl bg-gray-100 dark:bg-gray-300 p-6">
    {lugares?.map((lugar) => (
      <li
      key={lugar.id}
      className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{lugar.nombre}</h3>
        <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Descripción:</span> {lugar.descripcion}</p>
        <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Dirección:</span> {lugar.direccion}</p>
        {lugar.horario.length === 0 ? null : <p>horario {lugar.horario}</p>}
      </li>
    ))}
  </ul>
</div>
    </section>
    </div>
        </>
    )
}