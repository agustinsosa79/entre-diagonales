import { useNavigate } from "react-router-dom";
import logo from '../assets/entre-dg.png';
import fondo from '../assets/fondo-laplata.png';
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Logo sobre fondo de La Plata */}
      <section
        className="relative flex items-center justify-center w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <img
          src={logo}
          alt="Logo"
          className="z-10 max-w-[300px] w-full object-contain drop-shadow-lg"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
      </section>

      {/* Columna derecha con Navbar, texto y botón */}
     <section className="flex flex-col justify-start w-1/2 bg-green-700 p-5 gap-6 text-white">
    <Navbar />
    <div className=" flex flex-col pl-10 gap-10">
  <p className="max-w-[600px] text-lg leading-relaxed">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium vero numquam soluta ipsam, consequatur necessitatibus sint repudiandae quibusdam officiis debitis voluptates quisquam saepe, aperiam libero dolor porro assumenda amet? Ipsam, iusto. Reiciendis, qui perspiciatis voluptatem natus consectetur quod magni esse beatae ea assumenda fugit, reprehenderit aperiam?
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
