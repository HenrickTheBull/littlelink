
// QR Code Generator
function generateQRCode(link) {
  const qrContainer = document.createElement('div');
  qrContainer.style.marginTop = '10px';
  QRCode.toCanvas(qrContainer, link, { width: 100 });
  return qrContainer;
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach QR Code generation to buttons
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
      if (!button.querySelector('canvas')) {
        const qrCode = generateQRCode(button.href);
        button.appendChild(qrCode);
      }
    });
  });
});