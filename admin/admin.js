import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const btn = document.getElementById("loginBtn");

btn.onclick = async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(auth,email,password);

        window.location.href="../admin/index.html";

    }catch(e){

        alert("登录失败");

    }

}
