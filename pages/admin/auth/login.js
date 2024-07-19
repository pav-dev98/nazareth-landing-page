import LoginForm from "../../../components/LoginForm";

const Login = () => {
    return (
        <LoginForm />
    );
};
export default Login;

export const getServerSideProps = async (context) => {
    const { req, res } = context;
    const token = req.cookies.token;
    if (token) {
        return {
            redirect: {
                destination: '/admin/dashboard',
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
};