<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EJEMPLO</title>
        <link rel="stylesheet" href="../CSS/style.css" type="text/css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <style>
            .formulario-degradado {
                background: linear-gradient(to right, #F4F7F7, #EBF0F5);
                padding: 20px;
                border-radius: 10px;
                max-width: 90%; /* Ajustar el ancho máximo del formulario */
                margin: auto; /* Centrar el formulario */
            }
        </style>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand text-white" href="#" style="margin-left: 30px;">NORLIAJEFF</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link text-white active ml-3" href="#" style="margin-left: 30px;">Inicio<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link text-white ml-3" href="#" style="margin-left: 30px;">Contacto</a>
                        <a class="nav-item nav-link text-white ml-3" href="#" style="margin-left: 30px;">Preguntas frecuentas</a>
                    </div>
                </div>
            </nav>
        </header>
        
        <main class="vh-100 d-flex justify-content-center align-items-center">
            <div class="formulario-degradado">
                <h2 class="mb-4">Formulario de Registro</h2>
                <form action="" method="post">
                    <div class="form-group mb-3">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" style="max-width: 100%;"> <!-- Ajustar el ancho máximo de los inputs -->
                    </div>
                    <div class="form-group mb-3">
                        <label for="apellido">Apellido</label>
                        <input type="text" class="form-control" id="apellido" style="max-width: 100%;">
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" style="max-width: 100%;">
                    </div>
                    <div class="form-group mb-3">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" class="form-control" id="telefono" style="max-width: 100%;">
                    </div>
                    <div class="form-group mb-3">
                        <label for="contraseña">Contraseña</label>
                        <input type="password" class="form-control" id="contraseña" style="max-width: 100%;">
                    </div>
                    <button type="submit" class="btn btn-primary w-25 mx-auto mb-3">OK</button>
                </form>
            </div>
        </main>

        <footer class="bg-body-tertiary text-center text-lg-start">
            <div class="text-center p-3 bg-dark">
                <p class="text-white">&copy;Derechos Reservados LiangReyes/2024</p>
                <a class="text-white" href="https://github.com/liangreyes12" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </footer>

        <script src="https://kit.fontawesome.com/9a57984765.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="../JAVASCRIPT/script.js"></script>
    </body>
</html>