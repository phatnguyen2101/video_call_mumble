document.getElementById('lobby__form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const roomName = document.getElementById('roomName').value;

    // Lưu tên phòng vào session storage
    sessionStorage.setItem('roomName', roomName);

    // Chuyển hướng đến trang phòng học (room.html)
    window.location.href = 'room.html';
});
