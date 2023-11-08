const matchingResult = document.getElementById('matchingResult');

const appendAlert = (result, user, tna, datetime) => {
  const wrapper = document.createElement('div');
  // wrapper.innerHTML = [
  //   `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  //   `   <div>${message}</div>`,
  //   '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  //   '</div>',
  // ].join('');
  let bgColor = 'bg-transparent text-body';
  if (result == 'Pass') bgColor = 'bg-primary text-white';
  else if (result == 'Fail') bgColor = 'bg-danger-subtle text-emphasis-danger';
  else if (result == 'Fake') bgColor = 'bg-dark text-white';

  let today = new Date();
  wrapper.innerHTML = [
    '<div class="p-2">',
    '<div class="card" style="width: 18rem">',
    `<div class="card-header ${bgColor} text-center">${result}</div>`,
    '<img src="/images/cam.jpg" class="card-img-top" height="240" />',
    '<div class="card-body">',
    '<div class="row align-items-center">',
    '<div class="col-4">',
    '<img class="rounded-circle"',
    'src="/images/card.jpg"',
    'width="100%"',
    '/>',
    '</div>',
    '<div class="col">',
    `<h5 class="card-title">${user}</h5>`,
    `<h6 class="card-subtitle mb-2 text-body-secondary">${tna}</h6>`,
    '</div>',
    '</div>',
    '</div>',
    `<div class="card-footer ${bgColor} text-center">${today.toLocaleString()}</div>`,
    '</div>',
    '</div>',
  ].join('');
  matchingResult.append(wrapper);
};

const matchingTrigger = document.getElementById('matchingBtn');
if (matchingTrigger) {
  matchingTrigger.addEventListener('click', () => {
    appendAlert('Pass', 'Jonathan Smith', 'Off work', '2023-11-07 17:56:03');
  });
}

const matchingTrigger2 = document.getElementById('matchingBtn2');
if (matchingTrigger2) {
  matchingTrigger2.addEventListener('click', () => {
    appendAlert('Fail', 'Jonathan Smith', 'Off work', '2023-11-07 17:56:03');
  });
}

const matchingTrigger3 = document.getElementById('matchingBtn3');
if (matchingTrigger3) {
  matchingTrigger3.addEventListener('click', () => {
    appendAlert('Fake', 'Jonathan Smith', 'Off work', '2023-11-07 17:56:03');
  });
}
