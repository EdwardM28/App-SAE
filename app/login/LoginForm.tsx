"use client";

import { AiOutlineGoogle } from "react-icons/ai";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { SafeUser } from "../../types";

interface LoginUserProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginUserProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logueado Correctamente");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logueado. Redirigiendo...</p>;
  }

  return (
    <>
      <Heading title="Iniciar sesión en SAE" />
      <Button
        outline
        label="Continuar con Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Correo Electronico"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      ></Input>
      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      ></Input>
      <Button
        label={isLoading ? "Cargando...." : "Iniciar Sección"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        ¿No tienes una cuenta?{" "}
        <Link className="underline" href="/register">
          Registrarme
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
