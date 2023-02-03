import { Link } from "react-router-dom";


const Categoria = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categorias</a>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={"/category/1"}>Vino Tinto</Link></li>
        <li><Link className="dropdown-item" to={"/category/2"}>Vino Blanco</Link></li>
        <li><Link className="dropdown-item" to={"/category/3"}>Vino Blend</Link></li>
      </ul>
    </li>

  );
}

export default Categoria;
