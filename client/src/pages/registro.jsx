import * as React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import { InsertarUsuario } from '../api/registrados.api'
import { useNavigate } from 'react-router-dom'
import { dataEncrypt } from "../utils/data-encrypt"

 
export function RegistroUsuario() {
    const {register, handleSubmit, formState: {
        errors
    }, } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
            if (data.contraseña_actual == data.pass2){
                // delete pass2 para procesar datos
                delete data.pass2
                //aqui se llaman las funciones de la carpeta utils para encrytar
                const pass_encrypt = dataEncrypt(data.contraseña_actual)
                const res = await InsertarUsuario({ ...data, contraseña_actual: pass_encrypt });
                navigate('/login-users');
            }else{
                alert("Las contraseñas no coinciden");
            }
        })

    return(
        <div className='bg-black px-10 py-20 rounded-3xl border-2 border-black text-white' >
            <h1 className='text-5xl font-semibold text-purple-700'>Bienvenido</h1>
            <p className='font-medium text-lg text-white mt-4'>Porfavor ingresa tus datos.</p>
            <form onSubmit={onSubmit} className='mt-8 text-white'>
                <div>
                    <label className='text-lg font-medium'>Nombre</label>
                    <input {...register("nombre", {required: true})} className='w-full border-2 border-purple-700 rounded-xl p-5 mt-2 bg-transparent text-white' type="text" placeholder='Ingresa tu Nombre' name='nombre' id='nombre'/>
                </div>
                {errors.nombre && <span>Este campo es requerido</span>}
                <div>
                    <label className='text-lg font-medium'>Correo</label>
                    <input {...register("email", {required: true})} className='w-full border-2 border-purple-700 rounded-xl p-5 mt-2 bg-transparent text-white' type="text" placeholder='Ingresa tu correo' name='email' id='email'/>
                    {errors.correo && <span>Este campo es requerido</span>}
                </div>
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input {...register("contraseña_actual", {required: true})} className='w-full border-2 border-purple-700 rounded-xl p-5 mt-2 bg-transparent' type="password" placeholder='Ingresa tu contraseña' name='contraseña_actual' id='contraseña_actual'/>
                </div>
                <div>
                    <label className='text-lg font-medium'>Confirmar Contraseña</label>
                    <input {...register("pass2", {required: true})} className='w-full border-2 border-purple-700 rounded-xl p-5 mt-2 bg-transparent' type="password" placeholder='Ingresa tu contraseña' name='pass2' id='pass2'/>
                </div>
                
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input  
                            type='checkbox'
                            id='recuerdame'
                        />
                        <label className='ml-2 font-medium text-base' htmlFor="recuerdame">Recuerdame</label>
                    </div>
                    <button className='font-medium text-base text-purple-700'>Olvide mi contraseña</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-purple-700 text-black text-lg font-bold'>Ingresar</button>
                </div>
            </form>
        
        </div>
    )

}