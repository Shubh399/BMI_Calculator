calbtn.addEventListener("click", () => {
  let height = parseInt(document.getElementById("input1").value);
  let weight = parseInt(document.getElementById("input2").value);
  let ot = document.getElementById("cal");
  let calbtn = document.getElementById("calbtn");

  if (height <= 0 || isNaN(height)) {
    ot.innerHTML = `Enter height is not valid `;
    ot.style.color = "black";
  } else if (weight <= 0 || isNaN(weight)) {
    ot.innerHTML = `Enter weight is not valid `;
    ot.style.color = "black";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI <= 18.5) {
      ot.innerHTML = `You are Under Weight Based on BMI :${BMI}`;
      ot.style.color = "orange";

    } else if (BMI > 18.5 && BMI <= 24.9) {
      ot.innerHTML = `You are Normal Weight Based on BMI : ${BMI}`;
      ot.style.color = "green";


    } else {
      ot.innerHTML = `You are Over Weight Based on BMI :${BMI}`;
      ot.style.color = "red";
    }
  }
});
