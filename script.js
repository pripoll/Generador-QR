document.getElementById('generateBtn').addEventListener('click', function() {
    var data = document.getElementById('qrData').value;
    var canvas = document.getElementById('qrCanvas');
    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }
    if (typeof QRCode === 'undefined') {
        alert('La libreria externa no se ha cargado todavia. Intente refrescar la pagina.');
        return;
    }
    QRCode.toCanvas(canvas, data, {
        version: 1,
        errorCorrectionLevel: 'L',
        maskPattern: 7,
        margin: 4,
        scale: 6
    }, function (error) {
        if (error) {
            alert('Error al generar el codigo QR: ' + error.message);
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('generateBtn').click();
    }, 200);
});
