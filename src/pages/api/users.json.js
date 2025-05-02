import { users } from "../../assets/data/users"

export const GET = async()=>{
    return new Response(JSON.stringify(users),{
        headers:{'Content-Type': 'application/json'}
    })
}

export const POST = async(request)=>{
    try{
        const data=await request.json();
        if(!data.username || !data.rollNumber){
            return new Response("Missing required fields: name, email", { status: 400 });
        }
        const newUser={
            username: data.username,
            password: data.password,
            rollNumber: data.rollNumber
        }
        users.users.push(newUser);
    }
    catch(err){
        console.log("error is",err);
    }
}