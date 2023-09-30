function getBmiValue() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  height = height * 12;
  height = height * 0.025; //now height in meter

  var newbmiValue = weight / (Math.pow(height,2));
  var newbmiValue1 = Math.round(newbmiValue);
  document.getElementById("bmi").value = newbmiValue1;
}
