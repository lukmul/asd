import React from 'react';


const Article = ({ title, author, text }) => {
    const styles = {
        marginTop: 40
    }

    return (
        <article style={styles}>

            <span style={{ display: "block", fontSize: 12 }}>{author}</span>
            <p style={{ color: "blue", fontSize: 14 }}>{text}</p>
            <p>asdasd</p>
        </article>
    );
}

export default Article;
