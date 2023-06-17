// src/number/index.ts
function numberToString(num) {
  if (isNaN(num))
    throw new Error("Invalid number");
  return String(num);
}

// src/index.ts
console.log(numberToString(12));
