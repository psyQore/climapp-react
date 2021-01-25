import React, { useState } from "react";

const Formulario = () => {
  // State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

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

  return (
    <form>
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="CL">Chile</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>
    </form>
  );
};

export default Formulario;