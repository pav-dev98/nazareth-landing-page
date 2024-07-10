
'use client';
import { useState } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LoginForm = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            return res.json();
        }).then((data)=>{

            if(!data.error){
                Cookies.set('token', data.token);
                Cookies.set('name', data.name);
                router.push('/admin');
            }
            else{
                setError('Invalid credentials');
            }

        }).catch((e)=>{
            console.log(e);
        })
    };
    return (
        <div className="container mx-auto h-screen flex justify-center items-center">
            <div className="">
                <h1 className="text-center text-5xl mb-2">Logeate a tu cuenta</h1>
                <p className="text-center text-white/60">Si no cuentas con una cuenta contactate con el administrador y genera tus credenciales</p>
                <div className="flex mt-16 gap-16 mb-16 justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input type="email" name="" id="" placeholder="Email" className="p-4 bg-trueGray-700 rounded" onChange={(e)=>(setEmail(e.target.value))}/>
                        <input type="password" placeholder="Password" className="p-4 bg-trueGray-700 rounded"onChange={(e)=>(setPassword(e.target.value))} />
                        <button className="p-4 bg-indigo-700 rounded">Login to Your Account</button>
                    </form>
                    <div className="flex items-center">
                        /
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="p-4 border border-indigo-500 rounded">Sing in  with google</button>
                        <button className="p-4  border border-indigo-500 rounded">Sing in with facebook</button>
                        <button className="p-4  border border-indigo-500 rounded">Sing in with apple account</button>
                    </div>
                </div>
                <div className="text-center">
                    <a href="">perdiste tu contraseña ?</a>
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm;