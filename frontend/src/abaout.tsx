export function About ()  {
  return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-6">Sobre o Projeto</h1>
            <p className="text-lg text-gray-800 mb-4">
                Este projeto foi desenvolvido como parte do teste técnico para a vaga de Desenvolvedor Full Stack na Shopper.com.br.
                O objetivo do projeto foi criar uma aplicação web para um serviço de transporte particular, permitindo que os
                usuários solicitem uma viagem entre dois pontos e escolham entre várias opções de motoristas com diferentes
                características e preços.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Requisitos do Projeto</h2>
            <ul className="list-inside list-disc text-lg text-gray-800">
                <li>Desenvolvimento de uma API REST em Node.js com TypeScript.</li>
                <li>Integração com a API do Google Maps para cálculo de rotas e estimativa de valores de viagens.</li>
                <li>Desenvolvimento de um frontend em React e TypeScript, com funcionalidades de solicitação de viagem, seleção de motoristas e visualização de histórico de viagens.</li>
                <li>Implementação de validações e tratamento de erros para garantir uma experiência robusta ao usuário.</li>
                <li>Dockerização de toda a aplicação, incluindo backend e frontend, para facilitar a execução e implantação.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Tecnologias Utilizadas</h2>
            <ul className="list-inside list-disc text-lg text-gray-800">
                <li>Node.js e TypeScript (para o backend)</li>
                <li>Express (para criação da API REST)</li>
                <li>React e TypeScript (para o frontend)</li>
                <li>Google Maps API (para cálculos de rotas e estimativas)</li>
                <li>Docker (para containerização da aplicação)</li>
                <li>Git (para controle de versão)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Repositório no GitHub</h2>
            <p className="text-lg text-gray-800 mb-4">
                O código-fonte completo do projeto está disponível no GitHub. Você pode acessar e verificar todos os detalhes da implementação através do link abaixo:
            </p>
            <a
                href="https://github.com/claudioares/shopper-teste-tecnicoII"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
                Acessar o Repositório no GitHub
            </a>
        </div>                      
    );
};

