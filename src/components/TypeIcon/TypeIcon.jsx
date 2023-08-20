import { IconContainer } from './TypeIconStyles'
import '../../styles/icons.css'

const TypeIcon = ({typeImg, type}) => {
    // console.log(test)
  return (
    <IconContainer className={type}>
        <img src={typeImg} alt={type}/>
        <figcaption>{type}</figcaption>
    </IconContainer>
  )
}

export default TypeIcon