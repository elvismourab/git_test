# Como a Web Funciona

## 🎯 Objetivo

Este material de estudo aborda os conceitos fundamentais que explicam o funcionamento da internet e da World Wide Web, desde a infraestrutura de rede até o processo de carregamento de uma página em seu navegador.

## 📝 Resumo

A web funciona com base em um modelo cliente-servidor, onde o navegador (cliente) solicita informações a um servidor web através de protocolos como HTTP. Para que isso aconteça, uma série de tecnologias trabalham em conjunto, incluindo redes, roteadores, endereços IP e o sistema de nomes de domínio (DNS), que traduz nomes de sites em endereços IP para que os dados possam ser localizados e entregues.

## 📚 Conteúdo

### O que é um servidor web?
Um servidor web é um software (como Apache ou Nginx) ou um computador que utiliza esse software para fornecer páginas da web para os clientes (navegadores) por meio do protocolo HTTP ou HTTPS.

### O que é uma rede?
Uma rede (network) é um conjunto de dispositivos interconectados que trocam dados entre si, podendo ser local (LAN) ou global (como a Internet).

### O que é a internet?
A internet é uma rede mundial de redes interligadas que usa o protocolo TCP/IP para permitir a comunicação e o compartilhamento de dados entre dispositivos em todo o mundo.

### O que é um endereço IP?
Um endereço IP (Internet Protocol) é um identificador numérico único atribuído a cada dispositivo conectado a uma rede que usa o protocolo IP, permitindo que eles se comuniquem entre si.

### O que é um roteador?
Um roteador é um dispositivo que encaminha pacotes de dados entre diferentes redes, escolhendo a melhor rota para o destino. Ele conecta redes locais à internet, por exemplo.

### O que é um ISP?
Um ISP (Internet Service Provider) é uma empresa que fornece acesso à internet para indivíduos e organizações. Ele conecta os usuários à infraestrutura da internet e pode fornecer serviços adicionais como DNS, email, etc.

### O que são pacotes e como eles são usados para transferir dados?
Os pacotes são pequenas unidades de dados que são enviados pela rede. Ao transferir arquivos ou informações, eles são divididos em pacotes que seguem por rotas diferentes até o destino, onde são reorganizados (no caso do TCP) para reconstruir a informação original.

### O que é um cliente?
Um cliente é qualquer dispositivo (como um computador, smartphone ou navegador) que requisita serviços ou informações de um servidor, especialmente na web.

### O que é um servidor?
Um servidor (server) é um dispositivo ou programa que fornece serviços ou recursos a outros dispositivos (clientes). Um servidor web é um tipo específico de servidor que entrega páginas da web através do protocolo HTTP/HTTPS.

### O que é uma página web?
Uma página web é um documento estruturado em HTML que pode conter texto, imagens, links e scripts, acessado através de um navegador via internet.

### O que é um navegador web?
Um navegador web (web browser) é um software usado para acessar e exibir páginas web. Ele envia requisições HTTP/HTTPS aos servidores e interpreta os dados recebidos (HTML, CSS, JS) para mostrar o conteúdo ao usuário.

### O que é um mecanismo de busca?
Um mecanismo de busca (search engine) é uma aplicação web que permite aos usuários buscar conteúdos na internet, indexando bilhões de páginas e retornando resultados com base em algoritmos de relevância.

### O que é uma requisição DNS?
Uma requisição DNS é feita quando um domínio (como google.com) precisa ser convertido em um endereço IP. Essa requisição é enviada a um servidor DNS, que responde com o IP correspondente, permitindo a comunicação com o servidor correto.

### Descreva o processo de uma busca no google.com

Quando você digita google.com no navegador, o sistema verifica se o domínio já está no cache DNS local. Se não estiver, o navegador consulta o servidor DNS configurado, geralmente fornecido pelo ISP. Esse servidor consulta outros servidores DNS, subindo na hierarquia (root, TLD, autoritativo) até encontrar o endereço IP correspondente. Após obter o IP, o navegador faz uma requisição HTTP(S) ao servidor web do Google, que responde com os dados da página, que então são exibidos.