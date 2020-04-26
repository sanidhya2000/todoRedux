/* eslint no-restricted-globals:0 */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode'

export default class Auth{
    auth0 = new auth0.WebAuth({
        domain:"dev-zktpn9re.auth0.com",
        clientID:"TJ1VKg3FVRqTKZC1h1cwBHwUEavN608m",
        redirectUri:"http://localhost:3000/callback",
        audience:"https://dev-zktpn9re.auth0.com/userinfo",
        responseType:"token id_token",
        scope:"openid profile"
    });

    constructor(){
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err,authResults)=>{
            console.log(authResults,err)
            if(authResults && authResults.accessToken && authResults.idToken){
                let expiresAt = JSON.stringify((authResults.expiresIn)*1000 + new Date().getTime());
                localStorage.setItem("access-token",authResults.accessToken);
                localStorage.setItem("id_token",authResults.idToken);
                localStorage.setItem("expires_at",expiresAt);
                if(localStorage.getItem("todoList") == null){
                    localStorage.setItem("todoList",JSON.stringify([]));
                }
                location.hash = "";
                location.pathname = "/todo";
            }
            else if(err){
                console.log(err);
                location.pathname = "/error";
            }
        })
    }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout(){
        localStorage.setItem("access-token",null);
        localStorage.setItem("id_token",null);
        localStorage.setItem("expires_at",null);
        localStorage.setItem("todoList",JSON.stringify([]));
        this.auth0.logout({
            returnTo:'http://localhost:3000/'
        })
        
    }

    getProfile(){
        if(localStorage.getItem("id_token")){
            return jwtDecode(localStorage.getItem("id_token"))
        }
        else{
            return {};
        }
    }

}