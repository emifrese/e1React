import { IconContainer } from './TypeIconStyles'
import '../../styles/icons.css'

const TypeIcon = ({typeImg, type, onClick}) => {
    // console.log(test)
  return (
    <IconContainer className={type} onClick={onClick}>
        <img src={typeImg} alt={type}/>
        <figcaption>{type}</figcaption>
    </IconContainer>
  )
}

export default TypeIcon