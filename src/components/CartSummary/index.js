// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let tPrice = 0
      cartList.forEach(each => {
        tPrice += each.price * each.quantity
      })
      return (
        <div className="price-container">
          <div>
            <div className="container">
              <h1 className="price-heading">Order Total:</h1>
              <h1 className="price-value">Rs {tPrice}/-</h1>
            </div>
            <p className="count-cart-items">{cartList.length} items in cart</p>
            <button type="button" className="check-out">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
