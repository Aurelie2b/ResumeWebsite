// <!-- <pre id="typewriter">
// <span class="var-highlight">const</span> object = {
//     name: <span class="string-highlight">'Aurélie Debay'</span>,
//     skill: <span class="string-highlight">'Web Développeur junior'</span>,
//     properties:<span class="string-highlight">'À la recherche d\'un</span>
//                 <span class="string-highlight">stage pour mai 2020'</span>;
// }; </pre>
// </div> -->

// function setupTypewriter(t) {
//     var HTML = t.innerHTML;

//     t.innerHTML = "";

//     var cursorPosition = 0,
//         tag = "",
//         writingTag = false,
//         tagOpen = false,
//         typeSpeed = 100,
//         tempTypeSpeed = 0;

//     var type = function () {

//         if (writingTag === true) {
//             tag += HTML[cursorPosition];
//         }

//         if (HTML[cursorPosition] === "<") {
//             tempTypeSpeed = 0;
//             if (tagOpen) {
//                 tagOpen = false;
//                 writingTag = true;
//             } else {
//                 tag = "";
//                 tagOpen = true;
//                 writingTag = true;
//                 tag += HTML[cursorPosition];
//             }
//         }
//         if (!writingTag && tagOpen) {
//             tag.innerHTML += HTML[cursorPosition];
//         }
//         if (!writingTag && !tagOpen) {
//             if (HTML[cursorPosition] === " ") {
//                 tempTypeSpeed = 0;
//             }
//             else {
//                 tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//             }
//             t.innerHTML += HTML[cursorPosition];
//         }
//         if (writingTag === true && HTML[cursorPosition] === ">") {
//             tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//             writingTag = false;
//             if (tagOpen) {
//                 var newSpan = document.createElement("span");
//                 t.appendChild(newSpan);
//                 newSpan.innerHTML = tag;
//                 tag = newSpan.firstChild;
//             }
//         }

//         cursorPosition += 1;
//         if (cursorPosition < HTML.length - 1) {
//             setTimeout(type, tempTypeSpeed);
//         }

//     };

//     return {
//         type: type
//     };
// }

// var typewriter = document.getElementById('typewriter');

// typewriter = setupTypewriter(typewriter);

// typewriter.type();