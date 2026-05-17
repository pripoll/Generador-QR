document.getElementById('generateBtn').addEventListener('click', function() {
    var data = document.getElementById('qrData').value;
    var canvas = document.getElementById('qrCanvas');
    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }
    var qrLib = window.QRCode || window.qrcode;
    if (!qrLib) {
        alert('La libreria externa no se ha cargado todavia. Intente refrescar la pagina.');
        return;
    }
    try {
        qrLib.toCanvas(canvas, [{ data: data, mode: 'alphanumeric' }], {
            version: 1,
            errorCorrectionLevel: 'M',
            margin: 4,
            scale: 6
        }, function (error) {
            if (error) {
                alert('Error al renderizar el codigo QR: ' + error.message);
            }
        });
    } catch (err) {
        try {
            qrLib.toCanvas(canvas, data, {
                version: 1,
                errorCorrectionLevel: 'L',
                margin: 4,
                scale: 6
            }, function (error) {
                if (error) {
                    alert('Error en modo alternativo: ' + error.message);
                }
            });
        } catch (finalErr) {
            alert('Error critico de capacidad: El texto es demasiado largo para la Version 1. Detalle: ' + finalErr.message);
        }
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('generateBtn').click();
    });
} else {
    document.getElementById('generateBtn').click();
}
