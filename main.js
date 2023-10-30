let PIN = "42325";
let ingresar = false;
let usuarios = [
  { nombre: "Juan", PIN: "12345", saldo: 50000 },
  { nombre: "María", PIN: "54321", saldo: 35000 },
  { nombre: "Pedro", PIN: "67890", saldo: 70000 }
];

function ingreso() {
  alert("Bienvenidos a Banco Columbia");
  for (let i = 2; i >= 0; i--) {
    let ingresoPIN = prompt("Ingresa tu PIN");
    if (ingresoPIN == PIN) {
      alert("Disfrute su Estadia");
      ingresar = true;
      break;
    } else {
      alert("Error, vuelva a intentar");
    }
  }
}

ingreso();

if (ingresar) {
  let opcion = prompt(
    "Elige una opción:\n1- Consultar saldo.\n2- Retirar dinero.\n3- Depositar dinero.\nPresiona 'x' para finalizar."
  );

  while (opcion !== "x") {
    switch (opcion) {
      case "1":
        let usuario = usuarios.find((u) => u.PIN === PIN);
        alert(`Tu saldo es: ${usuario.saldo}`);
        break;
      case "2":
        let retiro = parseFloat(prompt("Ingrese el monto que desea retirar."));
        let usuarioRetiro = usuarios.find((u) => u.PIN === PIN);
        if (retiro <= usuarioRetiro.saldo) {
          usuarioRetiro.saldo -= retiro;
          alert("Retirado con éxito");
        } else {
          alert("Saldo insuficiente");
        }
        break;
      case "3":
        let deposito = parseFloat(prompt("Ingrese el monto que desea depositar."));
        let usuarioDeposito = usuarios.find((u) => u.PIN === PIN);
        usuarioDeposito.saldo += deposito;
        alert("Depósito exitoso");
        break;
      default:
        alert("Opción no válida.");
        break;
    }
    opcion = prompt(
      "Elige una opción:\n1- Consultar saldo.\n2- Retirar dinero.\n3- Depositar dinero.\nPresiona 'x' para finalizar."
    );
  }
  alert("Gracias por confiar en nosotros");
} else {
  alert("Por seguridad, retenemos tu tarjeta.");
}