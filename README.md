# aztro_nodo_Dayan_hoyos
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="import" href="./ejercicios nodo/gargola.png">
    <link rel="shortcut icon" href="../aztro_nodo_Dayan_hoyos/./ejercicios nodo/gargola.png" type="image/x-icon">
    <title>Formulario de Inscripción</title>
    <link rel="stylesheet" href="formulario.css">

</head>

<body>
    <div class="container">

        <h2>Formulario de Inscripción</h2>

        <form action="/submit" method="post">

            <label for="nombre">Nombre:</label>

            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required>

            <label for="apellido">Apellido:</label>


            <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" required>

            <label for="Numero de identificacion">Numero de indetificacion</label>
            <input type="text" id="identificacion" name="identificacion" placeholder="ingrese CC" required>
            <label for=" correo ">Correo Electrónico:</label>

            <input type="email " id="correo " name="correo " placeholder="Ingrese su correo electrónico " required>

            <label for="direccion ">Dirección:</label>

            <input type="text " id="direccion " name="direccion " placeholder="Ingrese su dirección " required>

            <label for="departamento ">Departamento:</label>

            <input type="text " id="departamento " name="departamento " placeholder="Ingrese su departamento " required>

            <label for="pais ">País:</label>

            <input type="text " id="pais " name="pais " placeholder="Ingrese su país " required>

            <label for="telefono ">Teléfono:</label>

            <input type="tel " id="telefono " name="telefono " placeholder="Ingrese su número de teléfono " required>


            <label for="descripcion ">Descripción Personal:</label>

            <textarea id="descripcion " name="descripcion " placeholder="Describa brevemente sobre usted " required></textarea>

            <label for="carrera ">Carrera a Inscribirse:</label>
            <select id="carrera " name="carrera " required>
                
                <option value="jobs-to-be-done ">JOBS TO BE DONE</option>
                
                <option value="cloud-native ">CLOUD NATIVE</option>
                
                <option value="frontend ">FRONTEND</option>
                
                <option value="backend ">BACKEND</option>
                
                <option value="fundamentals ">FUNDAMENTALS</option>
                
                <option value="python ">PYTHON</option>
                
                <option value="marketing-digital ">MARKETING DIGITAL</option>
            </select>


            <label for="modalidad ">Modalidad:</label>

            <select id="modalidad " name="modalidad " required>
            
                <option value="presencial ">Presencial</option>
            
                <option value="virtual ">Virtual</option>
            
            </select>

            <div class="buttons ">
                <button type="submit">Enviar</button>
                <button type="reset">Resetear</button>
            </div>
        </form>
    </div>
</body>

</html>
