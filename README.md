# Fill UPH Survey
Instant fill UPH end of term survey using jquery

### How to use
1. Open survery provided by UPH and input the required field for NIM.
2. Open Google Chrome dev tools using `ctrl + shift + i` or using `F12`.
3. Then copy this into console panel.then change the value into 'Skala Penilaian (1-6)' and text into something else you can write good stuff if your like ur lecturer.
```javascript
var s = document.createElement('script'); s.src = 'https://codepen.io/kaye5/pen/MWKOBeG.js'; document.head.appendChild(s);
setTimeout(()=>{
	fillAll(value,'text');
},500);
```
## Example
```javascript
var s = document.createElement('script'); s.src = 'https://codepen.io/kaye5/pen/MWKOBeG.js'; document.head.appendChild(s);
setTimeout(()=>{
	fillAll(6,'Aku suka dosen ini karena baik');
},500);
```

### Screenshot demo
![Screenshot demo 1](https://raw.githubusercontent.com/kaye5/fill-survey-uph/master/1.jpg)
![Screenshot demo 2](https://raw.githubusercontent.com/kaye5/fill-survey-uph/master/2.jpg)


> Use it at your own risk.
