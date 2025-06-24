import conf from '../config.js';
import { Client, Account ,ID} from 'appwrite';

export class AuthService{
    clint  = new Client();
    account ;

    constructor() {
        this.clint
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.clint);
    }

    async createAccount({email, password, name}) {
        try{
            await this.account.create(
                ID.unique(),email,password,name);
                if(userAccount){
                    return this.login({email, password});

                }
                else{
                    return userAccount;
                }
        }catch (error) {
            throw error;
        }
}


async login({email, password}) {
    try{
        return await this.account.createEmailSession(email, password);
        
    }catch (error) {
        throw error;
    }
}

async getCurrentUser() {
    try{
        return await this.account.get();
    } catch (error) {
        throw error;
    }
    return null;
    }

async logout() {
    try{
        return await this.account.deleteSession();
    } catch (error) {
        throw error;

         }
    }
}


const authService = new AuthService();
export default AuthService
 