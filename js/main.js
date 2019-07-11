function preview(certId) {
  const certList = document.getElementById(certId);
  const certImage = certList.querySelector('a');
  const certButton = certList.querySelector('button');
  if (certImage.style.display === 'block') {
    certImage.style.display = 'none';
    certButton.innerHTML = 'Preview';
  } else {
    certImage.style.display = 'block';
    certButton.innerHTML = 'Collapse';
  }
}