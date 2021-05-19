const string = 'The quick brown fox jumped over the lazy dog';
console.log(string);

const arr = string.split(' ');
console.table(arr);

let longesWorld = arrString[0];

for (let i = 0; i < arrString.length; i += 1) {
  if (longesWorld.length < arrString[i].length) {
    longesWorld = arrString[i];
  }
}
return longesWorld;
