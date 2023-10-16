import { GenerationContainer } from './GenerationStyles'
import '../../styles/icons.css'

const GenerationIcon = ({generationNumber, onClick, selected}) => {
    // console.log(test)
  return (
    <GenerationContainer className={generationNumber} onClick={onClick} selected={selected}>
        {generationNumber}
    </GenerationContainer>
  )
}

export default GenerationIcon