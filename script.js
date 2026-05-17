document.getElementById('generateBtn').addEventListener('click', function() {
    var data = document.getElementById('qrData').value;
    var canvas = document.getElementById('qrCanvas');
    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }
    qrcode.toCanvas(canvas, data, {
        version: 1,
        errorCorrectionLevel: 'M',
        margin: 4,
        scale: 6
    }, function (error) {
        if (error) {
            alert('Error al generar el codigo QR. Verifique la longitud del texto.');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateBtn').click();
});
