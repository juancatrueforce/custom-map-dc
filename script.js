document.addEventListener('DOMContentLoaded', function () {
  var canvas = new fabric.Canvas('canvas');

  var img;

  fabric.Image.fromURL("images/DC-Map.png", function (image) {
      img = image;
      img.scaleToWidth(600);
      canvas.setDimensions({ width: 1400, height: 800 });
      canvas.add(img);
  });
  
  canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  })
      
});
