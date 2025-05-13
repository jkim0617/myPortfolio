const card = document.getElementsByClassName("project-box")
const cardImg = document.getElementsByClassName("card-image");

const slotCard = document.querySelector("#slot-card");
const attendanceCard = document.querySelector("#attendance-card");
const lfrCard = document.querySelector("#lfr-card");
const irrigationSysCard = document.querySelector("#irrigation-system-card");

slotCard.addEventListener('mouseenter', () => {
  slotCard.style.backgroundColor = 'red';
})
attendanceCard.addEventListener('mouseenter', () => {
  attendanceCard.style.backgroundColor = '#D2996C';
})
lfrCard.addEventListener('mouseenter', () => {
  lfrCard.style.backgroundColor = 'darkblue';
})
irrigationSysCard.addEventListener('mouseenter', () => {
  irrigationSysCard.style.backgroundColor = 'darkgreen';
})
// -------------------------------
slotCard.addEventListener('mouseout', () => {
  slotCard.style.backgroundColor = '#de6262';
})
attendanceCard.addEventListener('mouseout', () => {
  attendanceCard.style.backgroundColor = '#f3dbbc';
})
lfrCard.addEventListener('mouseout', () => {
  lfrCard.style.backgroundColor = '#1370fb';
})
irrigationSysCard.addEventListener('mouseout', () => {
  irrigationSysCard.style.backgroundColor = '#6ab100';
})

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseenter", () => {
    cardImg[i].style.display = "none"
  })
  card[i].addEventListener("mouseout", () => {
    cardImg[i].style.display = ""
  })
}

console.log(card);
console.log(cardImg)