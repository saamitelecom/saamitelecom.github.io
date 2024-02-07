function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
document.getElementById("myInput").disabled = true
  var successPopup = document.createElement("div");
  successPopup.className = "popup";
  successPopup.textContent = "Copy Success";
  document.body.appendChild(successPopup);

  setTimeout(function() {
    successPopup.style.display = "none";

    var pastePopup = document.createElement("div");
    pastePopup.className = "popup";
    pastePopup.textContent = "You can paste it anywhere";
    document.body.appendChild(pastePopup);

    setTimeout(function() {
      pastePopup.style.display = "none";
    }, 3000);

  }, 5000);
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
