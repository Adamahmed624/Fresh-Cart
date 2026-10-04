import { RegisterFormValues } from "@/schema/signupSchema"

export async function userRegister({data}:{data : RegisterFormValues}){
    let res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',
        {
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    res = await res.json()
    return res.ok
}