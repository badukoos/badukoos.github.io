export class Terminal {
  constructor(contentElement) {
    this.contentElement = contentElement;
  }

  addOutput(text, className = 'output') {
    const line = document.createElement('div');
    line.className = `${className}-line`;

    if (className === 'html') {
      line.innerHTML = text;
    } else {
      line.textContent = text;
    }

    this.contentElement.appendChild(line);
    this.contentElement.scrollTop = this.contentElement.scrollHeight;
  }

  clear() {
    this.contentElement.innerHTML = '';
  }
}