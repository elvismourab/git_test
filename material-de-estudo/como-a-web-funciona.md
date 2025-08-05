## 📚 Material de Estudo: Como a Web funciona?

---

### What is a web server?
Um web server é um software (como Apache ou Nginx) ou um computador que utiliza esse software para fornecer páginas da web para os clientes (navegadores) por meio do protocolo HTTP ou HTTPS.

### What is a network?
Uma rede (network) é um conjunto de dispositivos interconectados que trocam dados entre si, podendo ser local (LAN) ou global (como a Internet).

### What is the internet?
A internet é uma rede mundial de redes interligadas que usa o protocolo TCP/IP para permitir a comunicação e o compartilhamento de dados entre dispositivos em todo o mundo.

### What is an IP address?
Um endereço IP (Internet Protocol) é um identificador numérico único atribuído a cada dispositivo conectado a uma rede que usa o protocolo IP, permitindo que eles se comuniquem entre si.

### What is a router?
Um roteador é um dispositivo que encaminha pacotes de dados entre diferentes redes, escolhendo a melhor rota para o destino. Ele conecta redes locais à internet, por exemplo.

### What is an ISP?
Um ISP (Internet Service Provider) é uma empresa que fornece acesso à internet para indivíduos e organizações. Ele conecta os usuários à infraestrutura da internet e pode fornecer serviços adicionais como DNS, email, etc.

### What are packets and how are they used to transfer data?
Os pacotes são pequenas unidades de dados que são enviados pela rede. Ao transferir arquivos ou informações, eles são divididos em pacotes que seguem por rotas diferentes até o destino, onde são reorganizados (no caso do TCP) para reconstruir a informação original.

### What is a client?
Um cliente é qualquer dispositivo (como um computador, smartphone ou navegador) que requisita serviços ou informações de um servidor, especialmente na web.

### What is a server?
Um server (servidor) é um dispositivo ou programa que fornece serviços ou recursos a outros dispositivos (clientes).
Um web server é um tipo específico de servidor que entrega páginas da web através do protocolo HTTP/HTTPS.

### What is a web page?
Uma página web é um documento estruturado em HTML que pode conter texto, imagens, links e scripts, acessado através de um navegador via internet.

### What is a web browser?
Um web browser (navegador) é um software usado para acessar e exibir páginas web. Ele envia requisições HTTP/HTTPS aos servidores e interpreta os dados recebidos (HTML, CSS, JS) para mostrar o conteúdo ao usuário.

### What is a search engine?
Um search engine (mecanismo de busca) é uma aplicação web que permite aos usuários buscar conteúdos na internet, indexando bilhões de páginas e retornando resultados com base em algoritmos de relevância.

### What is a DNS request?
Uma requisição DNS é feita quando um domínio (como google.com) precisa ser convertido em um endereço IP. Essa requisição é enviada a um servidor DNS, que responde com o IP correspondente, permitindo a comunicação com o servidor correto.

### In your own words, describe the process that takes place when you initiate a search on google.com in terms of what we discussed.

Quando você digita google.com no navegador, o sistema verifica se o domínio já está no cache DNS local. Se não estiver, o navegador consulta o servidor DNS configurado, geralmente fornecido pelo ISP. Esse servidor consulta outros servidores DNS, subindo na hierarquia (root, TLD, autoritativo) até encontrar o endereço IP correspondente. Após obter o IP, o navegador faz uma requisição HTTP(S) ao servidor web do Google, que responde com os dados da página, que então são exibidos.
