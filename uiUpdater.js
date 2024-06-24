class UIUpdater {
    updateDescription(description) {
        const qrContainer = document.getElementById('qr-code-container');
        const descLine = document.createElement('p');
        descLine.textContent = description;
        descLine.style.fontWeight = 'bold';
        qrContainer.appendChild(descLine);
    }

    displayQRCode(canvas) {
        const qrContainer = document.getElementById('qr-code-container');
        qrContainer.innerHTML = '';
        qrContainer.appendChild(canvas);
    }

    clear() {
        document.getElementById('qr-code-container').innerHTML = '';
    }
}

const uiUpdater = new UIUpdater();
