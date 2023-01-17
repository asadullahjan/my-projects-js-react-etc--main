import '../button/button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google : 'google-sign-in',
  inverted : 'inverted'
}

const Button = ({buttonType,...otherPops}) => {
  return (
      <button className={` button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}  {...otherPops} ></button>
  )
  
}

export default Button;