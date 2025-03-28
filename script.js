document.getElementById('bond-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pobranie danych z formularza
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
  
    // Obliczanie odsetek i łącznej kwoty
    const interest = principal * rate * years;
    const total = principal + interest;
  
    // Wyświetlenie wyników
    document.getElementById('interest').textContent = interest.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  });
  