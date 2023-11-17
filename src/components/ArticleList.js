import React from 'react'; 
import Article from './Article';

function ArticleList({ posts }){

    return(
        <main>
            {posts.map(article => <Article title={article.title} date={article.date} preview={article.preview}/>)}
        </main>
    )
}

export default ArticleList;