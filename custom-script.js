document.getElementById('custom-order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const occasion = document.getElementById('occasion').value;
    const boxSize = document.getElementById('box-size').value;
    const boxStyle = document.getElementById('box-style').value;
    const specialRequests = document.getElementById('special-requests').value;

    const message = `Hi, I'm interested in a custom box order:\n
Occasion: ${occasion}
Box Size: ${boxSize}
Style: ${boxStyle}
Special Requests: ${specialRequests}`;

    window.location.href = `https://wa.me/917406839266?text=${encodeURIComponent(message)}`;
});
