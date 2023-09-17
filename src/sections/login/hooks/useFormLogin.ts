import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { User } from "@/modules/person/domain/entities/user.entity";
import { useLoginContext } from "../context/loginContext";

const schema = yup.object().shape({
    email: yup.string().email("El campo debe ser un correo valido").required("El campo es requerido"),
    password: yup.string().required("El campo es requerido"),
});

export const useFormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<User>({
        resolver: yupResolver(schema),
    });
    const { login } = useLoginContext();

    return {
        register,
        handleSubmit,
        errors,
        reset,
        login
    }
};
