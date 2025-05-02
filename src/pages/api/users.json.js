import { users } from "../../assets/data/users"
export const GET = async()=>{
    return new Response(JSON.stringify(users),{
        headers:{'Content-Type': 'application/json'}
    })
}