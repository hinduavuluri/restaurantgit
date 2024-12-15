import './index.css'

const Header = ({cartItems}) => {
  const getCartCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <nav className="nav-container">
      <h1 className="header-heading">UNI Resto Cafe</h1>
      <div className="cart-container">
        <h2 className="orders-head">My Orders</h2>

        <div className="cart-count-container">
          <p className="cart-count">{getCartCount()}</p>
        </div>
      </div>
    </nav>
  )
}
export default Header
