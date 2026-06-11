const names  = 
["rushabh","yash","viraj","shriraj","sujal"];
const scores = 
[90, 82, 48, 91, 67];

// Step 1 — print each student with their score
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + 
" : " + scores[i]);
}

// Step 2 — add a new student
names.push("abhishek");  scores.push(88);
console.log(
"Total students: " + names.length);   // Total students: 6

// Step 3 — check if yash is in the list
console.log(names.includes("yash"));   // true