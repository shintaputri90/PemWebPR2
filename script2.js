document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mahasiswaForm');
    const outputTable1 = document.getElementById('outputTable1');
    const successMessage = document.getElementById('successMessage');
    const resetButton = document.getElementById('resetButton');
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nama = document.getElementById('nama').value;
      const nim = document.getElementById('nim').value;
      const kelas = document.getElementById('kelas').value;
      const alamat = document.getElementById('alamat').value;
  
      if (nama && nim && kelas && alamat) {
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${nama}</td>
          <td>${nim}</td>
          <td>${kelas}</td>
          <td>${alamat}</td>
        `;
        outputTable1.appendChild(row);
  
       
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
  
        form.reset();
      } else {
        alert('Harap lengkapi semua field!');
      }
    });
  
    
    resetButton.addEventListener('click', function() {
      successMessage.style.display = 'none';
    });
  });
  