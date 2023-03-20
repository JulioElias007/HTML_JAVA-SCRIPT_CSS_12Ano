<!DOCTYPE html>
<html lang="pt">
    <head>
        <title>Site que não faz nada</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Site que não faz nada</h1>
            <nav>
                <ul>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>
            </nav>
        </header>
        <section id="apresentacao">
            <h4>XX:XX:XX</h4>
            <h5>XX/XX</h5>
            <p>Bem vindo ao <span>site que não faz nada</span>. Entre, pegue numa cadeira e sente-se.</p>
            <img id="gato1" src="img/cat.png">
            <img id="gato2" src="img/cat.png">
        </section>
        <section id="registo">
            <h2>Registo</h2>
            <form name="registo">
                <label for="nome">Nome:</label>
                <input type="text" id="nome"><br>
                <label for="datan">Data de nascimento</label>
                <input type="date" id="datan"><br>
                <label for="morada">Morada:</label>
                <input type="text" id="morada"><br>
                <button type="submit">Submeter</button>
            </form>
        </section>
        <section id="instrucoes">
            <h4><?php echo date("H:i:s");?></h4>
            <h4><?php echo date("d, F");?></h4>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
            <p>Faça aqui o seu registo para não fazer diferença nenhuma</p>
        </section>
        <script type="text/javascript" src="main.js"></script>
    </body>
</html>