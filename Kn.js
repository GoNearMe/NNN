function encryptTextCaesar(text, shift) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      encryptedText += text[i];
    }
  }
  return encryptedText;
}

function decryptTextCaesar(encryptedText, shift) {
  let decryptedText = '';
  for (let i = 0; i < encryptedText.length; i++) {
    let charCode = encryptedText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      decryptedText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
    } else {
      decryptedText += encryptedText[i];
    }
  }
  return decryptedText;
}

let text = 'Hello, world!';
let shiftKey = 3;
let encryptedText = encryptTextCaesar(text, shiftKey);
console.log('Зашифрований текст:', encryptedText);

let decryptedText = decryptTextCaesar(encryptedText, shiftKey);
console.log('Розшифрований текст:', decryptedText);


// зробити анкету у вигляді об'єкта і вивести усі його параметри за допомогою for(in)


let User = {
    Name: "John",
    age: 25,
    gender: "male",
    favoriteColor: "blue"
};

for (let key in User) {
    console.log(key + ": " + User[key]);
}