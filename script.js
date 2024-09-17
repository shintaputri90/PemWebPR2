document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mahasiswaForm');
    const outputTable2 = document.getElementById('outputTable2');
  
    
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
        outputTable2.appendChild(row);
      }
    });
  });
  