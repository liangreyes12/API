<?php
    include "Conexion.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $correo = $_POST["email"];
        $contrasena = password_hash($_POST["contrasena"], PASSWORD_DEFAULT);

        $sql = "INSERT INTO Usuario (Nombre, Apellido, Email, Contrasena) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conn->error);
        }
        $stmt->bind_param("ssss", $nombre, $apellido, $correo, $contrasena);

        if ($stmt->execute() === TRUE) {
            
            header("Location: ../HTML/Login.php");
        } else {
            echo "Error al registrar: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
?>
