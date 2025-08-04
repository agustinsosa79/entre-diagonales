import { useEffect, useState } from "react"
import { getLugares } from "../services/lugaresServices"
import { Navbar } from "../components/Navbar"

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
        <div className="p-4">
  <ul className="space-y-4">
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
        </>
    )
}