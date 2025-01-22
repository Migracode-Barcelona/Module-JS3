// =================
// Stripped down cowsayer CLI,
// no libraries or arguments
// =================

// 1. Import readline module for interactive input
const readline = require("readline");

// 2. Create a readline interface to accept input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 3. Define the speech bubble
const bubble = (saying) => {
  const topLine = "_".repeat(saying.length + 2); // Create top line for speech bubble
  const bottomLine = "-".repeat(saying.length + 2); // Create bottom line for speech bubble

  return `
   ${topLine}
  < ${saying} >
   ${bottomLine}
  `;
};

// 4. Define the ASCII cow
const cow = `
       /\\
      /  \\
^__^ /   \\
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
`;

// 5. Use readline to get a string from the terminal
// (with a prompt so it's clearer what we want)
rl.question("What should the cow say? ", (message) => {
  // If no message is entered, default to "Moo!"
  const saying = message || "Moo!";

  // Combine the speech bubble and the cow, and print it
  console.log(bubble(saying) + cow);

  // Close the readline interface after displaying the message
  rl.close();
});
