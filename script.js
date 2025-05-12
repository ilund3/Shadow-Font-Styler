const spaceCode =
  "\\         \\\n" +
  "/         /\n" +
  "\\         \\\n" +
  "/         /\n" +
  "\\         \\\n" +
  "/         /";

  // Load in folding codes
let foldingCodes = [];
fetch('codes.txt')
  .then(res => res.text())
  .then(text => {
    foldingCodes = text.trim().split(/\r?\n\r?\n/);
  });

function validateInput() {
  const input = document.getElementById('inputText');
  const warning = document.getElementById('warningMessage');

  // Strip out anything that's not a letter or space
  const stripped = input.value.replace(/[^a-zA-Z ]/g, '');
  // If original had invalid chars, show warning; otherwise hide
  warning.style.display = stripped.length !== input.value.length ? 'block' : 'none';

  // Convert to uppercase
  input.value = stripped.toUpperCase();
}

// Generate folding code, inserting only letter‐blocks or the space‐block
function generateCode() {
  const text = document.getElementById('inputText').value;
  const outputEl = document.getElementById('output');

  if (!text) {
    outputEl.innerText = 'Please enter some text.';
    return;
  }
  if (foldingCodes.length !== 26) {
    outputEl.innerText = 'Loading codes… please wait and try again.';
    return;
  }

  let result = '';

  for (const ch of text) {
    if (ch === ' ') {
      // Insert the 6-line space block
      result += spaceCode + "\n\n";
    } else {
      // Letter: map A→0 ... Z→25
      const idx = ch.charCodeAt(0) - 65;
      if (idx >= 0 && idx < 26) {
        result += foldingCodes[idx] + "\n\n";
      }
    }
  }

  outputEl.innerText = result.trim();

  const previewLink = document.getElementById('previewLink');
  const base = 'https://erikdemaine.org/fonts/strip/simple.html'
             + '?shadow=0&opacity=80&backlight=1';

  // Rewrite into URL
  const cpRaw = result.trim().replace(/ /g, '_');

  const cpParam = encodeURIComponent(cpRaw);

  previewLink.href = `${base}&cp=${cpParam}`;
}

// Preview
function openPreview() {
    const outputEl = document.getElementById('output');
    const code = outputEl.innerText.trim();
    if (!code) return;  // nothing to preview
  
    const base = 'https://erikdemaine.org/fonts/strip/simple.html'
               + '?shadow=0&opacity=80&backlight=1';
  
    const cpRaw   = code.replace(/ /g, '_');
    const cpParam = encodeURIComponent(cpRaw);
  
    const url = `${base}&cp=${cpParam}`;
    window.open(url, '_blank');
  }  