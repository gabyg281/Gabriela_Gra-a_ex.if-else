Neste exercício, quis criar algo que permitisse ao utilizador alterar o comportamento visual de um círculo através do rato.

O círculo começa no centro do ecrã, com uma cor vermelha. Quando clico dentro dele, o programa verifica se o clique ocorreu dentro dos seus limites. Se isso acontecer, o círculo muda para uma posição aleatória e recebe uma nova cor, também aleatória.
Utilizei as variáveis circleX e circleY para controlar a posição do círculo, circleSize para definir o seu tamanho e circleColor para guardar a sua cor.
Para detetar os cliques, utilizei mousePressed(), e recorri a dist() para calcular a distância entre o rato e o centro do círculo, permitindo verificar se o clique aconteceu dentro dele.
Também utilizei condicionais (if e else) para alterar a espessura do contorno consoante a posição horizontal do rato (na metade esquerda do ecrã, o contorno é mais fino; na metade direita, fica mais grosso).

Recorri à IA para perceber quais os comandos mais adequados para implementar a interação através do clique do rato, permitindo que o círculo mudasse de posição e de cor quando clicado.

O objetivo foi explorar a interação entre o utilizador e o desenho, utilizando condições e valores aleatórios para criar variações visuais.