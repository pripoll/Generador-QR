document.getElementById('generateBtn').addEventListener('click', function() {
    var data = document.getElementById('qrData').value;
    var container = document.getElementById('qrContainer');
    if (data.trim() === '') {
        alert('Por favor, ingrese una cifra valida.');
        return;
    }
    if (typeof qrcode === 'undefined') {
        alert('La libreria externa no se ha cargado todavia. Intente refrescar la pagina.');
        return;
    }
    try {
        var qr = qrcode(1, 'M');
        qr.addData(data, 'Alphanumeric');
        qr.make();
        container.innerHTML = qr.createImgTag(6, 4);
    } catch (error) {
        alert('Error al generar el codigo QR: ' + error.message);
    }
});

window.addEventListener('load', function() {
    document.getElementById('generateBtn').click();
});
