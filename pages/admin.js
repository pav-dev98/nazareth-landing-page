import { PrismaClient } from '@prisma/client'
import LogoutButton from '../components/LogoutButton';
import Table from '../components/Table';

const prisma = new PrismaClient()

const Admin = ({contacts,user}) => {
    return (
        <>
            <div className="w-full">
            <nav className="container mx-auto py-9 flex">
                <h1>Academia Nazareth</h1>
                <ul className="flex ml-auto gap-3 items-center">
                    <li className='text-primColor'>Dashboard</li>
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
                <h2 className="text-4xl">Bienvenido <span className='capitalize'>{user.name}</span> 😎</h2>
                <p className='text-xs'>Rol : <span className='capitalize'>{user.role}</span></p>
            </div> 
            <div>
                <h3 className='mb-2 text-white/70 ml-1'>Tu lista de mensajes</h3>
                <div className='shadow-sm overflow-hidden flex'>
                    <Table data={contacts}/>
                </div>
            </div>
            </div>
        </>
    );
  };

  export const getServerSideProps = async (context) => {
    console.log("getserversideprops admin");
    const payloadHeader = context.req.headers['x-user-payload'];
    const userPayload = payloadHeader ? JSON.parse(payloadHeader) : null;
    
    return {
      props: {
        user: userPayload,
      },
    };
  };

  export default Admin;