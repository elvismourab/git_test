# Fundamentos do Laravel e Estratégias de Migração

## 🎯 Objetivo

Este material de estudo apresenta os conceitos fundamentais do framework Laravel e detalha estratégias para a modernização incremental de sistemas legados utilizando o padrão *Strangler Fig* e tecnologias modernas de frontend como React e Inertia.js.

## 📝 Resumo

O Laravel é um framework PHP focado em produtividade e elegância, seguindo o padrão MVC. Além de seus componentes nativos (Eloquent, Blade, Artisan), ele se destaca como uma excelente base para orquestrar migrações de sistemas antigos, permitindo a convivência híbrida entre o código legado e o novo através de roteamento seletivo e compartilhamento de sessões, enquanto padroniza o frontend com ecossistemas modernos.

## 📚 Conteúdo

### 1. Componentes Fundamentais do Laravel

*   **Roteamento (Routes):** Centraliza a definição de URLs em `routes/web.php` ou `routes/api.php`, desacoplando a estrutura de pastas da URL pública.
*   **Controllers:** Camada responsável por processar a lógica de negócio e intermediar a comunicação entre Models e Views.
*   **Eloquent ORM:** Sistema de mapeamento objeto-relacional que permite interagir com o banco de dados através de sintaxe PHP expressiva, tratando tabelas como modelos de dados.
*   **Migrations:** Sistema de controle de versão para o esquema do banco de dados, facilitando a criação e alteração de tabelas de forma colaborativa.
*   **Blade Templating:** Motor de templates nativo para renderização de HTML no servidor, permitindo o uso de lógica PHP limpa.

### 2. Modernização com o Padrão *Strangler Fig* (Cipó Estrangulador)

O padrão *Strangler Fig* é uma estratégia para substituir sistemas legados gradualmente, "estrangulando" a aplicação antiga até que ela seja totalmente substituída pelo novo sistema Laravel.

1.  **Instalação Side-by-Side:** O Laravel é instalado no mesmo ambiente que o sistema legado.
2.  **Roteamento Seletivo:** O servidor web (Nginx/Apache) é configurado para direcionar rotas específicas para o Laravel (ex: `/novo-modulo`), enquanto as rotas antigas continuam sendo servidas pelo sistema anterior.
3.  **Compartilhamento de Sessão:** Ambos os sistemas devem compartilhar o mesmo armazenamento de sessão (ex: Redis ou Banco de Dados) para garantir que o usuário permaneça logado ao navegar entre as partes antiga e nova.
4.  **Migração por Domínio:** Escolha módulos independentes para migrar primeiro, movendo sua lógica para Controllers/Models e sua interface para novos componentes.

### 3. Frontend Moderno: React + Inertia.js

Para padronizar o frontend com tecnologias modernas sem a complexidade de uma API REST/GraphQL separada, o [Inertia.js](https://inertiajs.com/) atua como a ponte ideal:

*   **Inertia como "Cola":** Permite que o Controller do Laravel retorne um componente React diretamente, enviando os dados como *props*.
*   **Experiência de SPA:** O usuário navega sem recarregamentos de página (Single Page Application), mas o desenvolvedor mantém o fluxo de roteamento e autenticação clássico no backend Laravel.
*   **Integração com Design Systems (NPM):** Através do **Vite**, é possível instalar pacotes de *design tokens* via npm e importá-los diretamente nos componentes React, garantindo consistência visual em toda a plataforma.

### 4. Comunicação Híbrida e BFF (Backend for Frontend)

O Laravel pode atuar como um orquestrador de dados:
*   **Multi-conexão de Banco:** O Laravel pode se conectar simultaneamente ao novo banco de dados e ao banco do sistema legado, facilitando a leitura e escrita de dados históricos.
*   **Agregador de APIs:** Para componentes que dependem de sistemas externos (ex: um microserviço em Next.js), o Laravel faz as chamadas de API necessárias e entrega os dados já formatados para o frontend React.
