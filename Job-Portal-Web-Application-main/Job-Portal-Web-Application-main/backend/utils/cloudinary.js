import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:'dkbzasxal',
    api_key:'767296491471398',
    api_secret: 'lRANyG82ohR8PsVC3Z255lt3YE0'
});
export default cloudinary;