function preview(certId) {
  const cert = document.getElementById(certId);
  if (cert.style.display === 'block') {
    cert.style.display = 'none';
  } else {
    cert.style.display = 'block';
  }
}