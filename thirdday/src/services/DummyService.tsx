import {client} from "../configs/Api"
import {Jwt} from "../models/Jwt"
import { Products } from "../models/Products"

export const login = (jwt : Jwt) =>{
    return client.post<Jwt>("auth/login",jwt)
}

export const productSave = (product : Products) =>{
    return client.post<Products>("product/add",product)
}

export const allProducts = () =>{
    return client.get<Products>("product")
}