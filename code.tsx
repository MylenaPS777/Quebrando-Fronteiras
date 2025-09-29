import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";

const PoliticalBlog = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Análise da Crise Geopolítica no Leste Europeu",
      category: "Crises Globais",
      excerpt: "Entenda os desdobramentos recentes e impactos na ordem internacional",
      date: "15 de Novembro, 2023"
    },
    {
      id: 2,
      title: "Movimentos Sociais e a Democracia Contemporânea",
      category: "Movimento Preto e Sociedade",
      excerpt: "Como os movimentos sociais estão moldando as democracias modernas",
      date: "12 de Novembro, 2023"
    },
    {
      id: 3,
      title: "Economia Política Internacional: Novos Paradigmas",
      category: "Economia",
      excerpt: "As transformações econômicas globais e seus efeitos políticos",
      date: "10 de Novembro, 2023"
    },
    {
      id: 4,
      title: "Diplomacia na Era Digital: Desafios e Oportunidades",
      category: "Diplomacia",
      excerpt: "Como a tecnologia está revolucionando as relações internacionais",
      date: "8 de Novembro, 2023"
    },
    {
      id: 5,
      title: "O Terceiro Setor e a Governança Global",
      category: "Terceiro Setor",
      excerpt: "O papel das organizações não-governamentais na política internacional",
      date: "5 de Novembro, 2023"
    },
    {
      id: 6,
      title: "Sistemas Políticos Comparados: Análise Crítica",
      category: "Ciências Políticas",
      excerpt: "Estudo comparativo dos diferentes modelos de governança ao redor do mundo",
      date: "3 de Novembro, 2023"
    }
  ]);

  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado por se inscrever com o email: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-blue-800">MundoPolítica</h1>
              <p className="text-blue-600 mt-2">Conhecimento para transformar o mundo</p>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Início</a>
              <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Artigos</a>
              <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Categorias</a>
              <a href="#" className="text-blue-800 hover:text-blue-600 font-medium">Sobre</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Globe Image */}
      <section className="relative py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://placeholder-image-service.onrender.com/image/600x400?prompt=A%20colorful%20world%20globe%20surrounded%20by%20diverse%20hands%20of%20different%20skin%20tones%20reaching%20to%20protect%20it%20symbolizing%20global%20unity%20and%20inclusion&id=bcb6c54d-924b-4e64-ab1c-813b4fa55574" 
              alt="Globo terrestre sendo protegido por mãos de diversas etnias, simbolizando união global"
              className="mx-auto rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Conhecimento Polético para a Nova Geração
            </h2>
            <p className="text-xl text-blue-700 mb-8">
              Estudos aprofundados, análises críticas e debates necessários para entender o mundo contemporâneo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Explorar Artigos
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 px-8 py-3">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Encontre Artigos por Tema
            </h3>
            <Input
              type="text"
              placeholder="Buscar por tópicos, temas ou palavras-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border-blue-200 focus:border-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Artigos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <img 
                    src={`https://placeholder-image-service.onrender.com/image/400x250?prompt=Illustration%20representing%20${encodeURIComponent(article.title)}%20in%20a%20professional%20academic%20style%20with%20global%20political%20theme&id=bcb6c54d-924b-4e64-ab1c-813b4fa55574`}
                    alt={`Ilustração representando o artigo: ${article.title}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-blue-900 mb-3">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    Ler Artigo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Explore por Categorias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Política Internacional', 'Economia', 'Direito', 'Ciências Políticas', 'Movimento Preto', 'Diplomacia', 'Crises Globais', 'Terceiro Setor', 'Sociedade'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-blue-200 text-blue-800 hover:bg-blue-50 h-16"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Fique Atualizado
            </h2>
            <p className="text-blue-700 mb-8">
              Receba os melhores artigos sobre política internacional diretamente no seu email
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 p-4 border-blue-200"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MundoPolítica</h3>
              <p className="text-blue-200">
                Conhecimento para transformar o mundo através da educação política.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Política Internacional</a></li>
                <li><a href="#" className="hover:text-white">Economia Global</a></li>
                <li><a href="#" className="hover:text-white">Direito Internacional</a></li>
                <li><a href="#" className="hover:text-white">Movimentos Sociais</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">Artigos Recentes</a></li>
                <li><a href="#" className="hover:text-white">Estudos de Caso</a></li>
                <li><a href="#" className="hover:text-white">Análises Exclusivas</a></li>
                <li><a href="#" className="hover:text-white">Biblioteca Digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Sobre Nós</li>
                <li>Colaborações</li>
                <li>Dúvidas Frequentes</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>© 2023 MundoPolítica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliticalBlog;