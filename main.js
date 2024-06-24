document.getElementById('inputType').addEventListener('change', function() {
    const inputType = this.value;
    const inputFile = document.getElementById('inputFile');
    const inputValue = document.getElementById('inputValue');
    
    if (inputType === 'image') {
        inputFile.style.display = 'block';
        inputValue.style.display = 'none';
    } else {
        inputFile.style.display = 'none';
        inputValue.style.display = 'block';
    }
});

function generateQRCode() {
    const inputType = document.getElementById('inputType').value;
    const inputValue = document.getElementById('inputValue').value;
    const inputFile = document.getElementById('inputFile').files[0];
    const color = document.getElementById('colorPicker').value;
    const bgColor = document.getElementById('bgColorPicker').value;
    const size = parseInt(document.getElementById('sizePicker').value, 10);

    let qrValue = '';

    if (inputType === 'text' || inputType === 'url') {
        qrValue = inputValue;
    } else if (inputType === 'image' && inputFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            qrValue = event.target.result;
            createQRCode(qrValue, color, bgColor, size);
        };
        reader.readAsDataURL(inputFile);
        return;
    }

    if (qrValue) {
        createQRCode(qrValue, color, bgColor, size);
    } else {
        alert('Por favor, ingresa un valor válido.');
    }
}

function createQRCode(value, color, bgColor, size) {
    const qr = new QRious({
        value: value,
        size: size,
        background: bgColor,
        foreground: color,
    });

    uiUpdater.updateDescription('Código QR generado:');
    uiUpdater.displayQRCode(qr.canvas);
}

function resetQRCode() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputFile').value = '';
    document.getElementById('colorPicker').value = '#000000';
    document.getElementById('bgColorPicker').value = '#ffffff';
    document.getElementById('sizePicker').value = '200';
    uiUpdater.clear();
}
