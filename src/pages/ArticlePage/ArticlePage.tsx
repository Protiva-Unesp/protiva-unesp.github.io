import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
