
export default interface User {
    preventDefault(): unknown;
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}