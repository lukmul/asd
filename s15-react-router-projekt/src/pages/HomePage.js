import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "title1",
        author: "Kowalski",
        text: "Przykladowy artykul numer jeden",
    },
    {
        id: 2,
        title: "title2",
        author: "Kowalski",
        text: "Przykladowy artykul numer dwa"
    },
    {
        id: 3,
        title: "title3",
        author: "Kowalski",
        text: "Przykladowy artykul numer trzy"
    }
]

const HomePage = () => {
    const artList = articles.map(article => {
        return (
            <Article key={article.id} {...article} />
        )
    })
    return (
        <div className="homePage">
            {artList}
        </div>
    );
}

export default HomePage;