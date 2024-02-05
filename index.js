// Declaration
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("calculate");
const total = document.getElementById("total");



function calculateTotal() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  console.log(totalValue)
  total.innerText = `Amount Including GST: ${totalValue}`;
}


btn.addEventListener("click", calculateTotal);