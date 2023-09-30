
export default {
    fetchToken: async () => {
        try {
            const res = await fetch("http://localhost:3000/auth-check",{
                credentials:'include',
            });
            const data = await res.json();
            return data.csrf_auth_token;
        } catch (error){
            console.error(error)
        }
    },

    logOut: async () => {
        try {
            const res = await fetch("http://localhost:3000/logout",{
                method:"DELETE",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token,
                },
                credentials:"include"
            });
            const data = res.json();
            return data;
        } catch(error){
            console.log(error);
        }
    },

    logIn: async (token,username,password) => {
        try{
            const res = await fetch("http://localhost:3000/login",{
                method: "POST",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token,
                },
                body: JSON.stringify({user:{username,password}}),
                credentials: "include",
            });
            const data = await res.json();
            console.log(data);
            if (res.ok){
                console.log(`Logged in as :${data.username}`)
            } else {
                console.log(data.errors)
            }
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}