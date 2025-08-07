import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from '../assets/entre-dg.png';
import fondo from '../assets/fondo-laplata.png';
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const frases = [
  "DESCUBRÍ LA CIUDAD",
  "Acá vas a encontrar todo lo que podés descubrir en la ciudad.",
  "Si nunca viste estos lugares, estás a punto de descubrir algo distinto.",
  "Hay más rincones ocultos en la ciudad de los que pensás, y acá te los mostramos.",
  "Esta no es una guía cualquiera, es para los que quieren patear la ciudad de verdad.",
  "Cuando no sabés qué hacer, acá hay opciones que no vas a encontrar en ningún lado.",
  "Descubrir la ciudad es salir de la rutina y abrir los ojos a lo nuevo y lo escondido."
];

export const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(intervalo);
  }, []);


  return (
    <div className="flex h-screen">
      <section
        className="relative flex items-center justify-center w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <motion.img
      src={logo}
      alt="Logo"
      className="z-10 max-w-[500px] w-full object-contain drop-shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    />
        <div className="absolute inset-0 bg-black/60 z-0" />
      </section>

      {/* Columna derecha con Navbar, texto y botón */}
    <section className="flex flex-col justify-start w-1/2 bg-green-700 p-5 gap-6 text-white">
    <Navbar />
    <div className=" flex flex-col pl-10 gap-10">
      <div className="text-start mt-10">
      <AnimatePresence mode="wait">
        <motion.h1
          key={frases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl  permanent-marker-regular text-white mb-4 min-h-20 "
        >
          {frases[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  <p className="max-w-[600px] text-lg leading-relaxed font-semibold">
    La Plata es una ciudad chica, pero tiene mucho para ofrecer que a veces pasa desapercibido. Esta plataforma nace para que, tanto turistas como gente que recién se muda, curiosos, jóvenes o familias, puedan encontrar fácil qué hacer y dónde ir. No se trata solo de los clásicos lugares que todos conocen, sino de esos rincones y espacios poco visibles que valen la pena descubrir. Aquí vas a encontrar opciones directas, casuales y variadas para salir, explorar y sorprenderte sin vueltas ni complicaciones.
  </p>
  <button
    onClick={() => navigate("/lugares")}
    className="cursor-pointer px-6 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300 max-w-max"
  >
    Explorar Lugares
  </button>
    </div>
</section>
    </div>
  );
};
