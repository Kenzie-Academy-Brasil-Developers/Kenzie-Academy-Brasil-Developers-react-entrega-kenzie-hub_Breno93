import React from "react";

export const SelectRegister = ({ register }) => {
  return (
    <fieldset>
      <select name="" {...register} id="">
        <option value="null">Selecione um módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Módulo 1
        </option>
        <option value="modulo 2">Módulo 2</option>
        <option value="modeulo 3">Módulo 3</option>
        <option value="modeulo 4">Módulo 4</option>
      </select>
    </fieldset>
  );
};
