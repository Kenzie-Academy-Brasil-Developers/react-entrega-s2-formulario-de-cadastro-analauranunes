import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { StyleForm } from "./style";
import { motion } from "framer-motion";

export const Register = ({ user, setUser }) => {
  const [passwordType, setPasswordType] = useState("password");

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome precisa ser preenchido")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Nome só pode conter caracteres"
      ),

    email: yup
      .string()
      .required("E-mail precisa ser preenchido")
      .email("E-mail inválido, tente novamente"),

    confirmEmail: yup
      .string()
      .required("Confirmação de e-mail precisa ser preenchida")
      .oneOf([yup.ref("email"), null], "E-mails precisam ser iguais"),

    password: yup
      .string()
      .required("Senha precisa ser preenchida")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
        "Senha precisa conter 8 caracteres, uma maiúscula, uma minúscula, um número e um caractere especial"
      ),

    confirmPassword: yup
      .string()
      .required("Confirmação de senha precisa ser preenchida")
      .oneOf([yup.ref("password"), null], "Senhas precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data.id = (user.length + 1).toString();
    setUser([...user, data]);
    history.push(`/Home/${data.id}`);
  };

  const handleClick = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="App"
    >
      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <img
          className="top-img"
          src="https://i.pinimg.com/originals/5d/d4/96/5dd4967dcb522731a988733e15da01c7.png"
          alt="Lion Steven Universe"
        />
        <input className="inputs" placeholder="Nome" {...register("name")} />
        <span className="error-span">{errors.name?.message}</span>

        <input className="inputs" placeholder="E-mail" {...register("email")} />
        <span className="error-span">{errors.email?.message}</span>

        <input
          className="inputs"
          placeholder="Confirmar e-mail"
          {...register("confirmEmail")}
        />
        <span className="error-span">{errors.confirmEmail?.message}</span>

        <div className="password-div">
          <input
            className="password-input"
            type={passwordType}
            placeholder="Senha"
            {...register("password")}
          />
          <span className="eye-span" onClick={handleClick}>
            {passwordType === "password" ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>
        </div>
        <span className="error-span">{errors.password?.message}</span>

        <input
          type="password"
          className="inputs"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        <span className="error-span">{errors.confirmPassword?.message}</span>

        <button type="submit">Cadastrar</button>
        <img
          className="bottom-img"
          src="https://i.pinimg.com/originals/5d/d4/96/5dd4967dcb522731a988733e15da01c7.png"
          alt="Lion Steven Universe"
        />
      </StyleForm>
    </motion.div>
  );
};
