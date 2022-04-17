import {LoginInterface} from "../interface/login.interface";
import {axios} from "../../../common/default-api/defaultApi";


export const AuthApi = async (payload:LoginInterface ) => {
    await axios.post('/user/auth/login', payload)
}
