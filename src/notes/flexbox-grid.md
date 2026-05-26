# When might you use Flexbox over Grid?
- Dimensão Única (1D)
- No Flexbox, os itens "empurram" o layout. Como você disse na navegação: se um botão tem um texto maior, ele naturalmente ocupa mais espaço, e o Flexbox apenas decide como distribuir o que sobrou.
- O Flexbox não garante que itens em linhas diferentes se alinhem verticalmente entre si.
Flexbox - quando é necessário manter o tamanho intrínseco de cada elemento.
O tamanho de cada elemento flexbox é definido por padrão com base no seu conteúdo, então child-elements podem não manter um padrão visual. Devido a sua natureza flexível (por isso o nome), os elementos vão se posicionar de forma que seu tamanho sempre obedeça o conteúdo interior. Por exemplo, em um componente de navegação: eu quero que todos os child-elements sejam do mesmo tamanho, o conteúdo é condicionado ao seu tamanho e os elementos se organizam com base no espaço disponível.

# When might you use Grid over Flexbox?
- Duas Dimensões (2D)
- No Grid, você desenha a "estante" primeiro e depois coloca os "livros" (itens) nela.
- Diferente do Flexbox, o Grid alinha itens tanto horizontalmente quanto verticalmente ao mesmo tempo. Se você quer que a imagem do Card 1 esteja perfeitamente alinhada com a imagem do Card 2 na linha de baixo, o Grid é a ferramenta certa.
Grid - quando é necessário manter um padrão entre todos os elementos, e esse padrão é obedecido para rows e columns. O grid não vai medir o tamanho de seus child-itens com base no conteúdo de cada um (embora eles possam influenciar em algumas situações), mas sim vai obedecer a disposição de rows e columns definida no parent. Por exemplo: um componente que exibe cards, independente do conteúdo desses cards, se eu preciso de uma disposição 3x3, todos eles terão o mesmo tamanho e espaçamento (o que pode também ser configurado), independente do conteúdo interno. Eu também posso fazer com que o grid se comporte como uma row e condicioanr sua quebra de linha, mas sempre vai obedecer o tamanho estipulado.

# When might you use the two of these tools together?
- Exemplo Prático: O layout da página (Header, Sidebar, Main, Footer) é feito em Grid. Dentro do Header, os links de navegação são organizados com Flexbox.
Quando eu preciso que um elemento tenha uma disposição rígida pré-estabelecida, mas seus child-items sejam flexíveis, eu posso definir o parent como grid, mas seus filhos como flex-containers. definindo seu tamanho com base no conteúdo de cada um.

---

* Como lidar com layouts que precisam ser responsivos sem usar necessariamente Media Queries o tempo todo?
No CSS Grid, existem "palavras mágicas" que fazem o grid se ajustar sozinho: repeat(), auto-fill (ou auto-fit) e minmax().
