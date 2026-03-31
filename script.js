function addRow() {
  let tbody = document.getElementById("tbody");
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>
        <textarea class="desc-input" rows="1" placeholder="Enter description..."></textarea>
    </td>
    <td>
        <input type="number" class="rate" placeholder="0" min="0" />
    </td>
    <td class="actions-cell">
        <button class="icon-btn delete-btn" onclick="deleteRow(this)" title="Delete Row">
        <i class="ph ph-trash"></i>
        </button>
    </td>
  `;

  tbody.appendChild(row);

  // Focus the new description input for better UX
  row.querySelector(".desc-input").focus();
}

function deleteRow(btn) {
  let row = btn.closest("tr");
  row.style.opacity = "0";
  row.style.transition = "opacity 0.2s ease";

  setTimeout(() => {
    row.remove();
  }, 200);
}
