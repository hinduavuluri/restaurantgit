import './index.css'

const DishItem = ({
  cartItems,
  dishDetails,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)
  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }
  const renderControllerButton = () => (
    <div className="controller-container">
      <button type="button" onClick={onDecreaseQuantity} className="button">
        -
      </button>
      <p>{getQuantity()}</p>
      <button type="button" className="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )
  return (
    <li className="dish-item-container">
      <div className="dish-details-container">
        <h1>{dishName}</h1>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && (
          <p className="not-available-text">Not Available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="text">Customizations available</p>
        )}
      </div>
      <p className="text-warning">{dishCalories}</p>
      <img src={dishImage} alt={dishName} className="image" />
    </li>
  )
}
export default DishItem
