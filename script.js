// script.js
document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.querySelector('.comments');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = 'New User: Just joined the stream!';
    
    setTimeout(() => {
        commentsContainer.appendChild(newComment);
        commentsContainer.scrollTop = commentsContainer.scrollHeight;
    }, 5000); // إضافة تعليق جديد بعد 5 ثواني
});
