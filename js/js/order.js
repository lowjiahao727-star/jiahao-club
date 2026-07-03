const orderNo = document.getElementById("orderNo");

orderNo.innerText =
"JH" + Date.now();

document.getElementById("submitOrder")
.onclick=()=>{

alert("订单已提交，等待管理员审核。");

}
