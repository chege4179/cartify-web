import axios from "axios";
import {BASE_URL} from "../util/config";
import {Product} from "../types/Product";


export interface SingleProductResponse  {
    msg:string,
    success:boolean,
    product:Product,
}
const getProductById = async (productId:string) => {
    try {
        const res = await axios.get<SingleProductResponse>(`${BASE_URL}/product/single/${productId}`)

        return res.data.product
    }catch (e:unknown){
        console.log("Error getting product by ID",e)
        return null

    }
}

export default getProductById
