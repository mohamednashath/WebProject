let saveEmployeeButton = document.querySelector(".add-student-button");

saveEmployeeButton.addEventListener("click", () => {
  userInput();
});

function userInput() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let phoneNumber = document.getElementById("phone-no").value;
  let address = document.getElementById("address").value;
  let birthday = document.getElementById("birth-day").value;
  let age = document.getElementById("age").value;
  let idNumber = document.getElementById("id-no").value;
  let gender = document.getElementById("gender").value;
  let degree = document.getElementById("degree").value;
  let intake = document.getElementById("intake").value;
  let semester = document.getElementById("semester").value;
  let courseOne = document.getElementById("course-list-one").value;
  let courseTwo = document.getElementById("course-list-two").value;
  let courseThree = document.getElementById("course-list-three").value;

  if (
    ValidityState(
      firstName,
      lastName,
      phoneNumber,
      address,
      birthday,
      age,
      idNumber,
      courseOne,
      courseTwo,
      courseThree
    )
  ) {
    sendDataToServer(
      firstName,
      lastName,
      phoneNumber,
      address,
      birthday,
      age,
      idNumber,
      gender,
      degree,
      intake,
      semester,
      courseOne,
      courseTwo,
      courseThree
    );
  }

  clearInputFields();
}

function clearInputFields() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("phone-no").value = "";
  document.getElementById("address").value = "";
  document.getElementById("birth-day").value = "";
  document.getElementById("age").value = "";
  document.getElementById("id-no").value = "";
}

function ValidityState(
  firstName,
  lastName,
  phoneNumber,
  address,
  birthday,
  age,
  idNumber
) {
  if (firstName === "") {
    alert("First Name is required");
    return false;
  } else if (lastName === "") {
    alert("Last Name is required");
    return false;
  } else if (phoneNumber === "") {
    alert("Phone Number is required");
    return false;
  } else if (phoneNumber.length > 10 || phoneNumber.length < 9) {
    alert("Phone Number is invalid (Should be 10 digits)");
    return false;
  } else if (address === "") {
    alert("Address is required");
    return false;
  } else if (birthday === "") {
    alert("Birthday is required");
    return false;
  } else if (age === "") {
    alert("Age is required");
    return false;
  } else if (age < 18 || age > 30) {
    alert("Age is invalid (Should be between 18 and 30)");
    return false;
  } else if (idNumber === "") {
    alert("ID Number is required");
    return false;
  } else if (idNumber.length !== 12) {
    alert("ID Number is invalid (Should be 12 digits)");
    return false;
  }
  return true;
}

function sendDataToServer(
  firstName,
  lastName,
  phoneNumber,
  address,
  birthday,
  age,
  idNumber,
  gender,
  degree,
  intake,
  semester,
  courseOne,
  courseTwo,
  courseThree
) {
  {
    console.log("sendind date" + birthday);
    console.log("sendind nic" + idNumber);
    console.log("sendind phone" + phoneNumber);
    console.log(typeof phoneNumber);
    console.log(typeof idNumber);
    console.log(typeof birthday);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNumber,
        address: address,
        dob: birthday,
        age: age,
        nicNo: idNumber,
        gender: gender,
        degree: degree,
        intake: intake,
        semester: semester,
        courseOne: courseOne,
        courseTwo: courseTwo,
        courseThree: courseThree,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Student added successfully");
        } else {
          alert("An error occurred");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred");
      });
  }
}
