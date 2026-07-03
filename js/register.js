import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("请填写完整信息");
        return;
    }

    if (password !== confirmPassword) {
        alert("两次输入的密码不一致");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", userCredential.user.uid), {
            username: username,
            email: email,
            balance: 0,
            avatar: "",
            createdAt: new Date()
        });

        alert("注册成功！");
        window.location.href = "login.html";

    } catch (error) {
        alert(error.message);
    }

});
