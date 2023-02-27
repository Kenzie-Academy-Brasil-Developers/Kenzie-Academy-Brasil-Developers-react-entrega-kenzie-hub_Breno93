import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { Input } from "../Input";
import * as yup from "yup";
import {
  ButtonCadastrarTech,
  ButtonExcluir,
  ButtonSalvar,
  DivButtonsSalvarExcluir,
  DivInput,
  DivTitleModal,
  FormModal,
  SelectStyled,
} from "./style";

const schema = yup.object({
  title: yup.string().required("Nome obigatório!"),
});

export const ModalTecnologias = ({ selectedTech, onClose }) => {
  const { createTech, techRemove, updateTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: selectedTech ? selectedTech.title : "",
      status: selectedTech ? selectedTech.status : "",
    },
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    if (selectedTech) {
      updateTech(selectedTech.id, data);
    } else {
      console.log(data);
      createTech(data);
      reset();
      onClose();
    }
  };

  const remove = (id) => {
    techRemove(id);
    reset();
    onClose();
  };

  return (
    <FormModal onSubmit={handleSubmit(submit)}>
      <DivTitleModal>
        <p>{selectedTech ? `Tecnologia Detalhes` : `Cadastrar Tecnologia`}</p>
        <button onClick={onClose}>X</button>
      </DivTitleModal>

      <DivInput>
        <Input
          type="text"
          label="Nome"
          register={register("title")}
          placeholder="Qual a tecnologia?"
          error={errors.title}
        ></Input>
        <label htmlFor="select">Selecionar Status</label>
        <SelectStyled name="" id="select" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </SelectStyled>
      </DivInput>

      {selectedTech ? (
        <DivButtonsSalvarExcluir>
          <ButtonSalvar type="submit">Salvar alterações</ButtonSalvar>
          <ButtonExcluir onClick={() => remove(selectedTech.id)} type="button">
            Excluir
          </ButtonExcluir>
        </DivButtonsSalvarExcluir>
      ) : (
        <ButtonCadastrarTech type="submit">
          Cadastrar Tecnologia
        </ButtonCadastrarTech>
      )}
    </FormModal>
  );
};
