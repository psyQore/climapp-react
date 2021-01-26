import React, { useState } from 'react';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
  // State del formulario
  
  const [error, setError] = useState(false);

  // Extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // Funcion que coloca los elementos en el state
  const handleChange = (e) => {
    // Actualizar el state
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    
    // Pasarlo al componente principal
    setConsultar(true);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className='red darken-4 error'>Todos los campos son obligatorios</p>
      ) : null}
      <div className='input-field col s12'>
        <input
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor='ciudad'>Ciudad: </label>
      </div>
      <div className='input-field col s12'>
        <select name='pais' id='pais' value={pais} onChange={handleChange}>
          <option value=''>-- Seleccione un país --</option>
          <option value='US'>Estados Unidos</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='CL'>Chile</option>
        </select>
        <label htmlFor='pais'>Pais: </label>
      </div>

      <div className='input-field col s12'>
        <input 
          type='submit'
          value='Buscar Clima'
          className='waves-effect waves-light btn-large btn-block yellow accent-4' 
        
        />
      </div>
    </form>
  );
};

export default Formulario;
