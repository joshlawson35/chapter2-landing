document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const notification = document.getElementById('notification');
    
    // Show success notification
    notification.textContent = `✓ Thanks! We'll notify ${email} when we launch.`;
    notification.classList.add('show');
    
    // Clear form
    this.reset();
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
});
