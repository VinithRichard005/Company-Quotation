function addRow() {
  let tbody = document.getElementById("tbody");
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>
        <textarea class="desc-input" rows="1" placeholder="Enter description..."></textarea>
    </td>
    <td>
        <input type="number" class="weight" oninput="calculate()" placeholder="0" min="0" />
    </td>
    <td>
        <input type="number" class="rate" oninput="calculate()" placeholder="0" min="0" />
    </td>
    <td class="rowTotal font-mono">0.00</td>
    <td class="actions-cell">
        <button class="icon-btn delete-btn" onclick="deleteRow(this)" title="Delete Row">
        <i class="ph ph-trash"></i>
        </button>
    </td>
  `;

  tbody.appendChild(row);
  
  // Focus the new description input for better UX
  row.querySelector('.desc-input').focus();
}

function deleteRow(btn) {
  let row = btn.closest('tr');
  row.style.opacity = '0';
  row.style.transition = 'opacity 0.2s ease';
  
  setTimeout(() => {
    row.remove();
    calculate();
  }, 200);
}

function calculate() {
  let weights = document.querySelectorAll(".weight");
  let rates = document.querySelectorAll(".rate");
  let totals = document.querySelectorAll(".rowTotal");

  let totalWeight = 0;
  let totalAmount = 0;

  for (let i = 0; i < weights.length; i++) {
    let w = parseFloat(weights[i].value) || 0;
    let r = parseFloat(rates[i].value) || 0;

    let rowTotal = w * r;

    // Formatting nicely with 2 decimal places
    totals[i].innerText = rowTotal.toFixed(2);

    totalWeight += w;
    totalAmount += rowTotal;
  }

  // Animating the numbers slightly or just setting them with nice formatting
  document.getElementById("totalWeight").innerText = totalWeight.toFixed(2);
  
  // Add commas to currency layout if needed
  document.getElementById("totalAmount").innerText = totalAmount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  });
}
