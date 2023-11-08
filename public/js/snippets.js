const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const spinner = document.getElementById('liveAlertSpinner');
const lodingtest = (showhide) => {
  spinner.style.display = 'none';
};

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.innerText = '';
  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    // lodingtest('block');
    appendAlert('Success!', 'success');
    // lodingtest('none');
  });
}
const alertTrigger2 = document.getElementById('liveAlertBtn2');
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('Face not found!', 'danger');
  });
}
const alertTrigger3 = document.getElementById('liveAlertBtn3');
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('Please tag the card!', 'warning');
  });
}
