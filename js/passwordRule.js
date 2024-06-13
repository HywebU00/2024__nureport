function checkPassword(pass) {
  //console.log("pass : " + pass);
  //console.log("pass.length : " + pass.length);
  //console.log("checkSpace(pass) : " + checkSpace(pass));
  //console.log("checkSpWord(pass) : " + checkSpWord(pass));
  //console.log("checkRegex(pass) : " + checkRegex(pass));

  if (checkSpace(pass) && checkSpWord(pass) && checkRegex(pass)) {
    return true;
  } else {
    return false;
  }
}

function checkSpace(pass) {
  if (pass.indexOf(' ') >= 0) {
    return false;
  } else {
    return true;
  }
}

function checkSpWord(pass) {
  var count = 0;
  var spWord = ['(', ')', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '=', '|', '\\', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
  for (var i = 0; i < spWord.length; i++) {
    if (pass.indexOf(spWord[i]) >= 0) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}

function checkRegex(pass) {
  var regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,12}$/;
  if (regex.test(pass)) {
    return true;
  } else {
    return false;
  }
}
