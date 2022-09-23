// สไลบาร์
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// เปิดปิดภาพถ่ายดาวเทียม
function toggleLayer(ids, name) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;
    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        for (layers in ids) {
            var visibility = map.getLayoutProperty(ids[layers], 'visibility');
            if (visibility === 'visible') {
                map.setLayoutProperty(ids[layers], 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(ids[layers], 'visibility', 'visible');
            }
        }
    };
    var layers = document.getElementById('menu');
    layers.appendChild(link);
}






