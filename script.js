calbtn.addEventListener("click", () => {
  let height = parseInt(document.getElementById("input1").value);
  let weight = parseInt(document.getElementById("input2").value);
  let ot = document.getElementById("cal");
  let calbtn = document.getElementById("calbtn");
  if (height === "" || height <= 0 || isNaN(height)) {
    ot.innerHTML = `Enter value is not valid ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    ot.innerHTML = `Enter value is not number ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI <= 18.5) {
      ot.innerHTML = `<span>You are Under Weight Based on BMI :${BMI}</span>`;
    } else if (BMI > 18.5 && BMI <=24.9) {
      ot.innerHTML = `<span>You are Normal Weight Based on BMI :${BMI}</span>`;
    } else {
      ot.innerHTML = `<span>You are Over Weight Based on BMI :${BMI}</span>`;
    }
  }
});
