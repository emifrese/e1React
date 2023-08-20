const Contact = () => {
  return (
    <div>
      <h2>Dejanos tus datos para que te contactemos</h2>
    <form>
      <label>
        Nombre
        <input/>
      </label>

      <label>
        Apellido
        <input/>
      </label>
      
      <label>
        Email
        <input type="email"/>
      </label>
      
      <label>
        Asunto
        <textarea/>
      </label>

      <button type="button">Enviar</button>
    </form>
    </div>
  )
}

export default Contact