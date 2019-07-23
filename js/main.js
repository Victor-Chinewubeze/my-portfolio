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

let submit = false;
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function () {
  submit = true;
  let iFrame = document.getElementById('iFrame');
  iFrame.addEventListener('load', function () {
    if (submit) {
      document.getElementById('submitted').style.display = 'block';
    }
    setTimeout (function(){
      document.getElementById('submitted').style.display = 'none';
      contactForm.reset();
    }, 5000);
  })
})