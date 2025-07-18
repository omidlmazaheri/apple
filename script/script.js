// Example: Show an alert when a product is clicked
document.querySelectorAll('.btn-dark').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('This is a demo. Link would go to the product page.');
  });
});