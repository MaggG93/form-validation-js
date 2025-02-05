"use strict";

const formulario = document.getElementById("container-form");

// Declaración de errores:
const error_user = document.getElementById("error_user");
const error_email = document.getElementById("error_email");
const error_password = document.getElementById("error_password");
const error_password_confirmed = document.getElementById(
  "error_password_confirmed"
);

// Expresiones regulares
const exReg_user = /^[a-zA-Z0-9]{4,12}$/;
const exReg_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const exReg_password = /^[A-Z][a-zA-Z0-9]{8,16}$/;

formulario.addEventListener("submit", (event) => {
  let esValido = true;

  // Obtener valores del formulario
  const nombre = formulario.elements["name"].value.trim();
  const email = formulario.elements["email"].value.trim();
  const password = formulario.elements["password"].value.trim();
  const password_confirmed =
    formulario.elements["password_confirmed"].value.trim();

  // Validar campo de nombre:
  if (!exReg_user.test(nombre)) {
    error_user.textContent =
      "Por favor, introduce un nombre de usuario válido.";
    esValido = false;
  } else {
    error_user.textContent = "";
  }

  // Validar campo email:
  if (!exReg_email.test(email)) {
    error_email.textContent = "Por favor, introduce un email válido.";
    esValido = false;
  } else {
    error_email.textContent = "";
  }

  // Validar campo password:
  if (!exReg_password.test(password)) {
    error_password.textContent = "Por favor, introduce una contraseña válida.";
    esValido = false;
  } else {
    error_password.textContent = "";
  }

  // Validar confirmación de contraseña:
  if (password_confirmed !== password) {
    error_password_confirmed.textContent =
      "Las contraseñas no coinciden. Vuelve a intentarlo.";
    esValido = false;
  } else {
    error_password_confirmed.textContent = "";
  }

  // Evitar el envío si hay errores
  if (!esValido) {
    event.preventDefault();
  } else {
    alert("Formulario Enviado con éxito.");
  }
});
