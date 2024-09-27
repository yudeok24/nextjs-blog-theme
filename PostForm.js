// components/PostForm.js
import { useState } from 'react';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, content, imageUrl };
        setPosts([...posts, newPost]);

        // Reset form fields
        setTitle('');
        setContent('');
        setImageUrl('');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <header>
                <h1>어드벤처 디자인 11조</h1>
            </header>

            <div className="audio-section">
                <h2>노래 듣기</h2>
                <audio controls>
                    <source src="/my-music.mp3" type="audio/mp3" />
                    브라우저가 오디오 재생을 지원하지 않습니다.
                </audio>
            </div>

            <div className="form-section">
                <h2>게시판 글 작성</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용</label>
                        <textarea
                            id="content"
                            name="content"
                            placeholder="내용을 입력하세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">사진 첨부</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">작성하기</button>
                </form>
            </div>

            <div className="post-list">
                <h2>게시판 목록</h2>
                {posts.map((post, index) => (
                    <div key={index} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        {post.imageUrl && <img src={post.imageUrl} alt="첨부된 사진" />}
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* Include your CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                header {
                    background-color: #5A67D8;
                    color: white;
                    padding: 1.5em;
                    text-align: center;
                    font-size: 1.5em;
                }
                .container {
                    width: 80%;
                    margin: 2em auto;
                    background: white;
                    padding: 2em;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                h2 {
                    color: #333;
                    margin-bottom: 1em;
                }
                .audio-section {
                    margin-bottom: 2em;
                    text-align: center;
                }
                audio {
                    width: 100%;
                    margin-top: 1em;
                }
                .form-section {
                    margin-bottom: 2em;
                }
                .form-group {
                    margin-bottom: 1.5em;
                }
                .form-group label {
                    display: block;
                    font-weight: bold;
                    margin-bottom: 0.5em;
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1em;
                }
                .form-group textarea {
                    resize: vertical;
                    height: 150px;
                }
                .form-group input[type="file"] {
                    padding: 0;
                }
                .submit-btn {
                    padding: 10px 15px;
                    color: white;
                    background-color: #4CAF50;
                    text-decoration: none;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .submit-btn:hover {
                    background-color: #45a049;
                }
                .post-list {
                    margin-top: 2em;
                }
                .post-item {
                    background-color: #fafafa;
                    padding: 1.5em;
                    margin-bottom: 1em;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .post-item h3 {
                    margin: 0;
                    font-size: 1.25em;
                    color: #333;
                }
                .post-item p {
                    margin-top: 0.5em;
                    color: #666;
                }
                .post-item img {
                    max-width: 100%;
                    margin-top: 1em;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default PostForm;
