'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState , useEffect} from 'react';

const Table = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const getData = async()=>{
        const res = await fetch('/api/listcontacts');
        const data = await res.json();
        setContacts(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getData();
        setIsMounted(true);      
    }, []);
    if(loading){
        return <div>cargando...{isMounted && <FontAwesomeIcon icon="coffee" className='ml-2'/> }</div>
    }
    return(
        <div className='border border-trueGray-900 dark:border-trueGray-600/50 rounded-xl min-w-[600px] min-h-[400px]'>
            {contacts.length !== 0 ?  <div className='rounded-md my-8'>
                <table className='table-auto border-collapse'>
                        <thead>
                            <tr>
                                <th className='border-b dark:border-trueGray-600/50 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Nombre</th>
                                <th className='border-b dark:border-trueGray-600/50 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Email</th>
                                <th className='border-b dark:border-trueGray-600/50 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Leido</th>
                                <th className='border-b dark:border-trueGray-600/50 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-white/70'>
                            {contacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td className='border-b border-trueGray-100 dark:border-trueGray-600/50 p-4 pr-8 '>{contact.fullName}</td>
                                    <td className='border-b border-trueGray-100 dark:border-trueGray-600/50 p-4 pr-8'>{contact.email}</td>
                                    <td className='border-b border-trueGray-100 dark:border-trueGray-600/50 p-4 pr-8'>{contact.read ? 'si': 'No'}</td>
                                    <td className='border-b border-trueGray-100 dark:border-trueGray-600/50 p-4 pr-8'>
                                        <button className='border py-1 px-4 rounded-md border'><FontAwesomeIcon icon={'fa-reply'}/></button>
                                        <button className='border py-1 px-4 ml-4 rounded-md border'><FontAwesomeIcon icon={'trash-alt'}/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>   
            </div>:<div className='w-full h-full flex justify-center items-center'>
                No hay mensajes
                
            </div>}
        </div>
    )
};

export default Table;