# Shadow-Font-Styler

Overview:
	Shadow Font Styler is an interactive, web-based app that generates the folding algorithm needed to create desired shadow text with a strip of paper and light. It translates inputted text into instructions for users to fold the paper such that, when backlit, the shadows reveal the user-inputted text in Times New Roman font.

How to Use the Software:
1. Open index.html in a browser (or host it using Live Server).
2. Enter text into the input field (Only uppercase letters (A–Z) and spaces are allowed; lowercase letters are automatically converted to uppercase).
3. Click "Generate Folding Code" to produce the output. The symbols follow the same nomenclature as used in Strip Folding Designer, i.e. | → Perpendicular folds, / and \ → Diagonal folds (occupying one square), (space) → Blank square, ! → Half-square fold.
4. Use the "Copy Code" button to quickly copy the result.
5. The final folded product can also be previewed at [Strip Folding Designer](https://erikdemaine.org/fonts/strip/simple.html?shadow=0&opacity=80&backlight=1). 

Key Decisions:
Web Implementation: Worked through HTML, CSS, and JavaScript for simplicity and accessibility across systems.
Input Restrictions: Initially wanted to have several fonts available for users to choose from but realized that making the folding fonts was deceptively time-consuming and difficult. Decided to limit input to uppercase letters and spaces in Times New Roman for standardized folding generation.
Data Handling: Switched to an external codes.txt file for storing the font code blocks for each letter. This helped to simplify code management and reduce clutter in the JavaScript file from large raw strings for the font characters.
Dynamic Loading: Used fetch for pulling the font code blocks at runtime, giving easy access for updating the codes.txt file without altering the core JavaScript code. This made it easy for adjustments and opened the door for future character/font additions.
Copy Feature: Added a Copy Code button (as opposed to manually copying the outputted code) to improve usability for users wanting to preview in Strip Folding Designer.
Visual Consistency: Styled using a dark theme with a consistent accent color (#00b4d8) to create a modern and visually-appealing interface.

Challenges Faced:
Handling Backslashes: Having backslashes as one of the symbols in outputted folding algorithms caused string escape errors in the JS Strings. I fixed this by switching to external file storage (codes.txt) and using fetch().
Alternating Fold Patterns: Font code blocks were originally staggered improperly (i.e. some generated letters’ strips heads pointed upwards; some, downwards), meaning that combining individual letter codes caused orientation issues. I solved this by standardizing the edges of each font code block to universally combine with each other.
Input Validation: Ensured the interface automatically corrected lowercase inputs and blocked invalid characters (i.e., ones without a corresponding font code block).
Space Handling: Similar challenge with staggering the letter font code blocks. Implemented a distinct six-line block for spaces that could be compatible with other letter font code blocks.

Future Improvements:
Add availability for all standard ASCII characters.
Add downloadable PDF outputs of folding codes/previews.
Allow users to choose between multiple shadow fonts.
Add live visualizations/folding simulations directly within the tool rather than relying on external links.