document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = [
    { id: "firstName", required: true },
    { id: "lastName", required: true },
    { id: "email", required: true },
    { id: "password", required: true },
    { id: "supportReason", required: true }
  ];

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.id + "Error");
    if (field.required && input.value.trim() === "") {
      error.textContent = "required";
      isValid = false;
    } else {
      error.textContent = "";
    }
  });

  // Sex validation
  const sexOptions = document.getElementsByName("sex");
  const sexError = document.getElementById("sexError");
  let selectedSex = "";
  for (let option of sexOptions) {
    if (option.checked) {
      selectedSex = option.value;
      break;
    }
  }

  if (!selectedSex) {
    sexError.textContent = "required";
    isValid = false;
  } else {
    sexError.textContent = "";
  }

  if (isValid) {
    localStorage.setItem("firstName", document.getElementById("firstName").value.trim());
    localStorage.setItem("lastName", document.getElementById("lastName").value.trim());
    localStorage.setItem("email", document.getElementById("email").value.trim());
    localStorage.setItem("sex", selectedSex);
    localStorage.setItem("supportReason", document.getElementById("supportReason").value.trim());

    window.location.href = "proj_profile_dumogho.html";
  }
});
