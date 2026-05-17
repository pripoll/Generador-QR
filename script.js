document.getElementById('generateBtn').addEventListener('click', function() {
    var data = document.getElementById('qrData').value;
    var canvas = document.getElementById('qrCanvas');
    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }
    var qrLib = window.QRCode || window.qrcode;
    if (!qrLib) {
        alert('La libreria aun no se ha cargado por completo. Por favor, espere un segundo e intente presionar el boton nuevamente.');
        return;
    }
    qrLib.toCanvas(canvas, data, {
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

window.addEventListener('load', function() {
    document.getElementById('generateBtn').click();
});
