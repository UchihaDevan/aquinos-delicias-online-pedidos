
import React from 'react';
import Layout from '../components/layout/Layout';

const SobrePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Sobre Nós</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <img 
              src="/placeholder.svg" 
              alt="Aquinos Delícias" 
              className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
            />
            
            <h2 className="text-2xl font-bold mb-4 text-aquinos-red">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              O Aquinos Delícias surgiu em 2020, durante a pandemia, quando seu fundador 
              percebeu a crescente demanda por refeições caseiras entregues em domicílio.
            </p>
            <p className="text-gray-700 mb-4">
              Começamos com apenas três sabores de escondidinhos, vendidos para amigos e 
              familiares. Com o tempo, o cardápio foi crescendo e nossa base de clientes também. 
              Hoje, somos referência em escondidinhos na região, mantendo o mesmo cuidado 
              artesanal do início.
            </p>
            <p className="text-gray-700">
              Nossa cozinha funciona em um espaço dedicado exclusivamente ao preparo dos 
              pratos, seguindo todas as normas de higiene e segurança alimentar.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-aquinos-red">Nossos Valores</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><span className="font-semibold">Qualidade:</span> Utilizamos apenas ingredientes frescos e de primeira linha.</li>
              <li><span className="font-semibold">Sabor:</span> Receitas exclusivas que encantam o paladar.</li>
              <li><span className="font-semibold">Atendimento:</span> Respeito e cordialidade com todos os clientes.</li>
              <li><span className="font-semibold">Agilidade:</span> Compromisso com o tempo de entrega.</li>
              <li><span className="font-semibold">Inovação:</span> Sempre buscando novos sabores e experiências.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-aquinos-red">Processo de Preparo</h2>
            <p className="text-gray-700 mb-4">
              Todos os nossos escondidinhos são preparados diariamente para garantir frescor e sabor. 
              O processo inclui:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Seleção cuidadosa dos ingredientes</li>
              <li>Preparo dos recheios com temperos especiais</li>
              <li>Elaboração dos purês cremosos</li>
              <li>Montagem em embalagens próprias para delivery</li>
              <li>Finalização com queijo para gratinar</li>
              <li>Embalagem especial que mantém o calor até a entrega</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SobrePage;
