import CartWidget from './CartWidget.jsx';

function NavBar() {

    let counter = 0;

    return (
        <nav>
            <div>AppleFix</div>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Categorias</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div>
                <CartWidget />
                <p>Items en carrito: {counter}</p>
            </div>
        </nav>
    );
}

export default NavBar;
