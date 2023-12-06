import Link from "next/link";
import Container from "./Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categorías de tienda</h3>
            <Link href="#">Telefonos</Link>
            <Link href="#">Computadores</Link>
            <Link href="#">PC</Link>
            <Link href="#">Relojes</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessorios</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Servicio al Cliente</h3>
            <Link href="#">Contactanos</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Sobre nosotros</h3>
            <p className="mb-2">
            En nuestra tienda de electrónica, nos dedicamos a brindar lo último y los mejores dispositivos y accesorios para nuestros clientes. con una amplia selección de teléfonos, televisores, computadoras portátiles, relojes y accesorios.
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SAE. Reservados todos los derechos.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Síganos</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
