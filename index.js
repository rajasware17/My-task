const checkboxes = document.querySelectorAll('.offer-checkbox');
const totalPriceEl = document.getElementById('totalPrice');
const addToCartBtn = document.getElementById('addToCartBtn');

// Function to calculate total of selected offers
function updateTotal() {
  let total = 0;
  checkboxes.forEach((checkbox) => {
    const offerBox = checkbox.closest('.offer-box');
    const badge = offerBox.querySelector('.selected-badge');
    if (checkbox.checked) {
      total += parseFloat(checkbox.dataset.price);
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  });
  totalPriceEl.textContent = `Total: $${total.toFixed(2)} USD`;
}

// Attach event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateTotal);
});

// Add to cart button
addToCartBtn.addEventListener('click', () => {
  const selectedOffers = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const unit = checkbox.closest('.offer-box').querySelector('.left-info span').textContent;
      selectedOffers.push(unit);
    }
  });

  if (selectedOffers.length > 0) {
    alert(`Added to cart:\n${selectedOffers.join(', ')}\n${totalPriceEl.textContent}`);
  } else {
    alert('Please select at least one offer.');
  }
});
