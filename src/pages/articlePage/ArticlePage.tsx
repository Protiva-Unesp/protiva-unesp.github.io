import MarkdownRenderer from '../../components/markdownRenderer/MarkdownRenderer';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import articleContent from '../../articles/introducao_programacao/conhecendo_ferramentas.md?raw';

function ArticlePage() {
  return (
    <div className="ArticlePage">
        <Navbar />
        <MarkdownRenderer content={articleContent} />
        <Footer />
    </div>
  );
}

export default ArticlePage;
