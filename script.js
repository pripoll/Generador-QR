function getQrLibrary() {
    return window.QRCode || window.qrcode;
}

function waitForQrLibrary(timeoutMs) {
    return new Promise(function(resolve, reject) {
        var startedAt = Date.now();
        var timer = setInterval(function() {
            var qrLib = getQrLibrary();

            if (qrLib && typeof qrLib.toCanvas === 'function') {
                clearInterval(timer);
                resolve(qrLib);
                return;
            }

            if (Date.now() - startedAt >= timeoutMs) {
                clearInterval(timer);
                reject(new Error('No se pudo cargar la libreria QR.'));
            }
        }, 100);
    });
}

async function generateQRCode() {
    var data = document.getElementById('qrData').value;
    var canvas = document.getElementById('qrCanvas');

    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }

    var qrLib;

    try {
        qrLib = await waitForQrLibrary(5000);
    } catch (error) {
        alert('No se pudo cargar la libreria QR. Revise su conexion a internet o el enlace CDN del archivo index.html.');
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
}

document.getElementById('generateBtn').addEventListener('click', generateQRCode);

window.addEventListener('load', function() {
    generateQRCode();
});
