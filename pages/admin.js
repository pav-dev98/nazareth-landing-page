import { PrismaClient } from '@prisma/client'
import LogoutButton from '../components/LogoutButton';

const prisma = new PrismaClient()

const Admin = ({contacts,name}) => {
    return (
        <>
        <div className="w-full">
            <nav className="container mx-auto py-9 flex">
                <h1>Academia Nazareth</h1>
                <ul className="flex ml-auto gap-3 items-center">
                    <li className='text-indigo-600'>Dashboard</li>
                    <li>Estudiantes</li>
                    <li>Profesores</li>
                    <li>Clases</li>
                    <li>Calificaciones</li>
                    <li><LogoutButton/></li>
                </ul>
            </nav>
        </div>
        <div className="container mx-auto">
            <div className='mb-8'>
                <h2 className="text-4xl">Bienvenido {name} 😎</h2>
                <p className='text-xs'>Rol : Admin</p>
            </div> 
            <div>
                <h3 className='mb-2 text-white/70 ml-1'>Tu lista de mensajes</h3>
                <div className='shadow-sm overflow-hidden flex'>
                    <div className='border border-trueGray-900 dark:border-trueGray-600/50 rounded-xl '>
                        <div className='rounded-md my-8'>
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
                                        <button className='border py-1 px-4 rounded-md border-green-500'>responder</button>
                                        <button className='border py-1 px-4 ml-4 rounded-md border-red-500'>eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>   
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
  };

  export const getServerSideProps = async (context) => {
    const {req, res} = context;
    const name = req.cookies.name;
    
    ///
    ///
    const contacts = await prisma.contactUs.findMany();
    return {
      props: {
        contacts,
        name
      },
    };
  };

  export default Admin;