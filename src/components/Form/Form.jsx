import { ContactForm, ContactInputs, ContactLabels, ContactTextArea, FormButton, FormContainer } from "./FormStyles"

const Form = () => {
  return (
    <FormContainer>
        <h2>Dejanos tus datos para que te contactemos</h2>
        <ContactForm>
            <ContactLabels>
                Nombre
                <ContactInputs/>
            </ContactLabels>
            <ContactLabels>
                Apellido
                <ContactInputs/>
            </ContactLabels>
            <ContactLabels>
                Email
                <ContactInputs/>
            </ContactLabels>
            <ContactLabels>
                Asunto
                <ContactTextArea rows={8} cols={40}/>
            </ContactLabels>
            <FormButton>ENVIAR</FormButton>
        </ContactForm>
    </FormContainer>
  )
}

export default Form