
const classifications = [
  {
    classification: "UNDER WEIGHT",
    minBmi: 0,
    maxBmi: 18.5,
    color: "#08F7FE",
    message: "You are underweight for your height. It's important to aim to keep within your healthy\
     weight range. Being in the healthy weight range will improve your body's ability to fight\
      off infection or illness."
  },
  {
    classification: "NORMAL WEIGHT",
    minBmi: 18.5,
    maxBmi: 25.0,
    color: "#00ff44",
    message: "You have a normal body weight. Aim to keep within the healthy weight range by enjoying a \
    healthy, well-balanced diet and exercising regularly. Good job!"
  },
  {
    classification: "OVER WEIGHT",
    minBmi: 25.0,
    maxBmi: 30.0,
    color: "#FFFA8D",
    message: "Being overweight increases your risk of developing coronary heart disease, as \
    well as other health conditions. To achieve and maintain a healthy weight, be physically active\
      every day and enjoy a healthy, well-balanced diet."
  },
  {
    classification: "OBESE I",
    minBmi: 30.0,
    maxBmi: 35.0,
    color: "#FFD900",
    message: "As your BMI increases so does your risk of developing coronary heart disease, as well \
    as other heath conditions. It is important that you take steps to reduce your weight. \
    To achieve and maintain a healthy weight be physically active every day and eat a healthy, \
    well-balanced diet that meets your energy needs."
  },
  {
    classification: "OBESE II",
    minBmi: 35.0,
    maxBmi: 40.0,
    color: "#FF4500",
    message: "As your BMI increases so does your risk of developing coronary heart disease, as well \
    as other heath conditions. It is important that you take steps to reduce your weight. \
    To achieve and maintain a healthy weight be physically active every day and eat a healthy, \
    well-balanced diet that meets your energy needs."
  },
  {
    classification: "OBESE III",
    minBmi: 40.0,
    maxBmi: 1000000,
    color: "#FC0901",
    message: "As your BMI increases so does your risk of developing coronary heart disease, as well \
    as other heath conditions. It is important that you take steps to reduce your weight. \
    To achieve and maintain a healthy weight be physically active every day and eat a healthy, \
    well-balanced diet that meets your energy needs."
  }
];


const inputHeight = document.getElementById("height-range");
const inputWeight = document.getElementById("weight-range");
const modal = document.getElementById('my-modal');

function changeHeight() {
  const currentValue = inputHeight.value;
  document.getElementById("height").textContent = currentValue;
}

function changeWeight() {
  const currentValue = inputWeight.value;
  document.getElementById("weight").textContent = currentValue;
}

function calculateBMI() {
  const currentWeight = inputWeight.value;
  const currentHeight = inputHeight.value / 100;

  let bmi = currentWeight / (currentHeight * currentHeight);

  if (bmi === Infinity) {
    bmi = 0;
  }
  bmi = bmi || 0;

  return bmi;
}


function changeModal() {
  const bmi = calculateBMI().toFixed(1);
  document.getElementById("user-bmi").textContent = bmi;

  for (var i = 0; i < classifications.length; i++) {

    if (bmi >= classifications[i].minBmi && bmi < classifications[i].maxBmi) {

      const classification = classifications[i];
      const bmiModalClass = document.getElementById("bmi-class");
      const bmiMsgClass = document.getElementById("bmi-msg");
      const wppButton = document.getElementById("wpp-share");

      bmiModalClass.style.color = classification.color;
      bmiModalClass.textContent = classification.classification;
      bmiMsgClass.textContent = classification.message;
      wppButton.href = "whatsapp://send?text=" + "I'm " + classification.classification + " and my BMI is " + bmi + ". To check your BMI, access: https://bmi-healthy-foundation.netlify.app/";

      break;
    }

  }

}


function openModal() {
  changeModal();
  console.log("asd");
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}