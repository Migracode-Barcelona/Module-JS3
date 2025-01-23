// =================
// Stripped down cowsayer CLI,
// no libraries
// =================

// 1. Get the message from the command line argument
const message = process.argv.slice(2).join(" ") || "Moo!";

// 2. Make the speech bubble
const bubble = (saying) => {
  const topLine = "_".repeat(saying.length + 2); // Create top line for speech bubble
  const bottomLine = "-".repeat(saying.length + 2); // Create bottom line for speech bubble

  return `
   ${topLine}
  < ${saying} >
   ${bottomLine}
  `;
};

// 3. Define the ASCII cow
const cow = `
       /\\
      /  \\
^__^ /   \\
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
`;

// 4. Combine the bubble with the cow and display it
console.log(bubble(message) + cow);
