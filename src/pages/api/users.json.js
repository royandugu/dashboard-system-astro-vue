import { users } from "../../assets/data/users"

export const GET = async()=>{
    return new Response(JSON.stringify(users),{
        headers:{'Content-Type': 'application/json'}
    })
}

export const POST = async({request})=>{
    try{
        console.log("request is",request);
        console.log("request body is",request.body);
        const data=await request.json();
        console.log("data is",data);
        if(!data.username || !data.rollNumber){
            return new Response("Missing required fields: name, email", { status: 400 });
        }
        const newUser={
            username: data.username,
            password: data.password,
            rollNumber: data.rollNumber
        }
        users.users.push(newUser);
        return new Response("Sucesfully added", { status: 201 });
    }
    catch(err){
        console.log("error is",err);
        return new Response("Internal server error", { status: 500 });
    }
}