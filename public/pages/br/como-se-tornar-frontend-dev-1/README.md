## Como se tornar um Desenvolvedor Frontend
### Aula 1

- O que é Front End
- Requerimentos para Desenvolvimento Front End
- Criando a primeira página


## O que é Front End?


Tudo aquilo que você pode ver ao acessar um website (por exemplo https://google.com.br) é considerado **Front end**. Imagens, textos, botões, até mesmo vídeos são alguns dos componentes que conseguimos manipular em um website quando aprendemos a desenvolver front end.

O Front End é uma combinação de códigos e arquivos no qual o nosso Broswer (Google Chrome, Firefox, etc) é capaz de interpretar e trazer um resultado amigável à quem está acessando o nosso site.


Do outro lado do desenvolvimento web, existe o **Back End**, responsável por controlar dados, regras de negócios e permissões. Para muitos, o back end ainda é considerado mais complexo que o front end. Hoje em dia, não é preciso ter um conhecimento muito elevado em back end para construir um website. Nesse curso, aprenderemos a fazer sites estáticos *from scratch* totalmente em front end.

## Requerimentos para Desenvolvimento Front End

Para começar a desenvolver seu primeiro site, você precisará dos seguintes softwares:

### 1. Browser

Browser é a ferramenta que você utiliza para acessar sites da internet. Você poderia utilizar qualquer Browser para o desenvolvimento da sua primeira página, porém eu indico um dos Browsers abaixo:

- [Google Chrome](https://www.google.com.au/chrome/)
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Opera](https://www.opera.com/)
- Safari
- Microsoft Edge

*O uso de Internet Explorer não é recomendado por limitações de funcionalidade e segurança. Internet Explorer é uma ferramenta obsoleta que deveria ser descartada na utilização do dia a dia.*

### 2. Editor de código

Um bloco de notas seria o suficiente para começar a produzir seus códigos. Hoje em dia existem ferramentas que ajudam muito no desenvolvimento web e elas deveriam ser utilizadas para te ajudar a entender e produzir códigos.

A ferramenta que eu indico e uso é o [Visual Studio Code](https://code.visualstudio.com/). O Visual Studio Code (VS Code) é uma ferramenta de edição de código que nos ajuda na hora de criar nossos arquivos. O VS Code muda as cores do que está escrito no arquivo para nos ajudar a entender o nosso código visualmente.

## Criando a primeira página


A primeira coisa que precisamos entender para desenvolver um site é o HTML. HTML é uma linguagem de marcação. Nós marcamos os conteúdos do nosso arquivo para que o Broswer saiba o que fazer com o conteúdo marcado. Essas marcações são chamadas de `tags`. Cada `tag` produz um efeito diferente para o Browser. Por Exemplo, para criarmos um texto de cabeçalho principal no nosso site, utilizamos da tag `h1`. Essa tag fará com que o conteúdo marcado por ela seja considerado um cabeçalho principal:

```html
<h1>Meu Primeiro Site</h1>
```

Como podemos ver no exemplo acima, o texto **Meu Primeiro Site** está entre as marcações `<h1>` e `</h1>`. A marcação `<h1>` significa que tudo depois dela será considerado o cabeçalho principal, por outro lado, a marcação `</h1>` significa que ali é o fim do meu cabeçalho principal. Ou seja, uma tag se inicia pelos sinais `<>` e terminal com os sinais `</>`. Existems diversar tags HTML. Nesse curso aprenderemos a utilizar as principais delas.


Todo arquivo HTML precisa ser salvo com a extensão `.html` ou `.htm`. Abra o seu editor de código e crie um novo arquivo. Salve esse arquivo em uma nova pasta como `aula01.html`:

![salvar arquivo como aula01.html](/pages/br/como-se-tornar-frontend-dev-1/img001.png)


Se estiver utilizando VS Code, notará que o programa automaticamente entendeu que o arquivo se trata de um arquivo `html`:

![VS Code automaticamente entende arquivo HTML](/pages/br/como-se-tornar-frontend-dev-1/img002.png)


Dentro do arquivo digite:

```html
<html>

</html>
```

A marcação principal de um arquivo HTML é a tag `html`. Todo arquivo HTML precisa iniciar e finalizar com essa marcação. Agora adicionaremos o **corpo** do nosso arquivo.

```html
<html>
<body>

</body>
</html>
```

Como podemos ver no *snippet* acima, adicionamos a marcação `body` dentro da marcação `html`. Para o computador, isso faz sentido, porém após diversas linhas criadas o código pode ficar confuso para uma pessoa que está trabalhando nele. Por essa razão, nós criamos a **indentação**:

```html
<html>
    <body>
        
    </body>
</html>
```

Veja que a tag `body` agora está mais para a frente que a tag `html`. Dessa forma o código fica visualmente mais fácil para nós. Essa técnica é chamada de **indentação** e também é utilizada em linguagens de programação para facilitar o entendimento humano. Sempre **indente** as marcações internas do seu código para mantê-los organizados.


A tag `body` é o **corpo** do arquivo HTML. Todo o conteúdo que iremos mostrar para os nossos usuários ficará dentro da tag `body`.


```html
<html>
    <body>
        Olá Mundo!
    </body>
</html>
```

Nós adicionamos o conteúdo *Olá Mundo!* dentro da tag `body`. Como podemos notar, o conteúdo não está entre as marcações `<>`, isso significa que esse é um conteúdo que tem que ser mostrado na página ao acessar o nosso arquivo através de um Browser.

Agora vamos ver o resultado do nosso código acima. Abra a pasta no qual salvou o arquivo `aula01.html`, clique com o botão direito no arquivo e selecione `Abrir Com > Google Chrome` (Ou outro Browser que esteja utilizando).

![Abra o arquivo no Browser](/pages/br/como-se-tornar-frontend-dev-1/img003.png)

Note que as tags HTML não serão mostradas pelo Browser, porém o nosso conteúdo *Olá Mundo!* estará visível, afinal é ele quem está inserido dentro da tag `body`.

![Resultado da Aula 01](/pages/br/como-se-tornar-frontend-dev-1/img004.png)

Pronto, você acabou de criar sua primeira página HTML! Na próxima aula, aprenderemos outras marcações e estruturas HTML para que nosso projeto comece a tomar forma!