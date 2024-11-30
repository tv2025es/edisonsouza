/* Resetando o estilo padrão do navegador */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Definindo a fonte padrão */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f8fb;
    color: #333;
}

/* Estilo para o cabeçalho */
header {
    background-color: #0047ab;
    color: #fff;
    padding: 20px;
    text-align: center;
}

/* Estilo para o logo */
header .logo h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

/* Estilo para a navegação */
nav {
    margin-top: 10px;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2em;
}

/* Estilo para o parágrafo no cabeçalho */
header p {
    font-size: 1.1em;
    margin-top: 10px;
}

/* Estilo para o container principal */
main {
    padding: 40px;
    text-align: center;
}

/* Estilo para a seção de boas-vindas */
.welcome h2 {
    font-size: 2.5em;
    color: #0047ab;
    margin-bottom: 15px;
}

.welcome p {
    font-size: 1.2em;
    color: #666;
}

/* Estilo para as seções de artigos */
.features {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}

.features article {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 30%;
    text-align: center;
}

.features h3 {
    font-size: 1.8em;
    color: #0047ab;
    margin-bottom: 10px;
}

.features p {
    font-size: 1.1em;
    color: #666;
}

/* Estilo para as matérias */
.materia {
    background-color: #fff;
    padding: 20px;
    margin: 30px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.materia h1 {
    font-size: 2.5em;
    color: #0047ab;
    margin-bottom: 15px;
}

.materia img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
}

.materia p {
    font-size: 1.2em;
    line-height: 1.6;
    color: #333;
}

/* Estilo para o rodapé */
footer {
    background-color: #0047ab;
    color: #fff;
    text-align: center;
    padding: 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 1em;
}

footer p {
    margin-top: 10px;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
    .features {
        flex-direction: column;
        align-items: center;
    }

    .features article {
        width: 80%;
        margin-bottom: 20px;
    }
}
