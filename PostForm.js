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
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">작성하기</button>
                </form>
            </div>

            <div className="post-list">
                <h2>게시판 목록</h2>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        {post.imageUrl && <img src={post.imageUrl} alt="첨부된 사진" />}
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* CSS styles here */
                .container { padding: 20px; background: #f4f4f4; }
                header { background: #5A67D8; color: white; padding: 10px; text-align: center; }
                .form-section { margin: 20px 0; }
                input, textarea { width: 100%; margin: 10px 0; padding: 10px; }
                button { background: #4CAF50; color: white; padding: 10px; }
                .post-list { margin-top: 20px; }
            `}</style>
        </div>
    );
};

export default PostForm;
