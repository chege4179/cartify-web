import {Product,  AllProductsResponse} from "../types/Product"
import axios from "axios";
import {BASE_URL} from "../util/config";



const getAllProducts = async ():Promise<Product[]> => {
    try {
        const res =   await axios.get<AllProductsResponse>(`${BASE_URL}/product/all`)
        return res.data.products

    }catch (e:unknown){
        console.log("Error getting products")
        return []

    }
}

export default getAllProducts
