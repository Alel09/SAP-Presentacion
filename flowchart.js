// Dibuja los diagramas de flujo (<pre class="flowchart">) con zoom y arrastre.
(function () {

    // ───────── COLORES ─────────
    // 'element-color' = borde, 'fill' = relleno, 'font-color' = texto
    var opciones = {
        'line-width': 2,
        'line-color': '#9aa7d1',
        'font-size': 14,
        'font-color': '#eef2ff',
        'yes-text': 'Sí',
        'no-text': 'No',
        'text-margin': 8,

        // Un color por TIPO de figura
        'symbols': {
            'start': { 'element-color': '#00f5d4', 'fill': '#0b3a3a' },   // Inicio
            'end': { 'element-color': '#00f5d4', 'fill': '#0b3a3a' },   // Fin
            'inputoutput': { 'element-color': '#2ee59d', 'fill': '#12382b' },   // Entrada / Salida
            'operation': { 'element-color': '#4895ef', 'fill': '#1d2850' },   // Proceso
            'condition': { 'element-color': '#ffd60a', 'fill': '#3a3410' }    // Decisión
        },

        // Colores especiales para UN nodo concreto: en el texto escribe  |nombre
        // Ejemplo:  op1=>operation: prom = 0|importante
        'flowstate': {
            'importante': { 'fill': '#5a1230', 'element-color': '#f72585' },
            'ok': { 'fill': '#12382b', 'element-color': '#2ee59d' }
        }
    };

    // ───────── ZOOM Y ARRASTRE ─────────
    function activarZoom(vp, canvas) {
        var svg = canvas.querySelector('svg');
        var w = parseFloat(svg.getAttribute('width')), h = parseFloat(svg.getAttribute('height'));
        var stage = document.getElementById('stage');
        var k = 1, x = 0, y = 0, kMin = 0.2, kMax = 4, arrastrando = false, px = 0, py = 0;

        function esc() { return stage.getBoundingClientRect().width / stage.offsetWidth; }
        function aplicar() { canvas.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + k + ')'; }
        function ajustar() {
            var r = vp.getBoundingClientRect(), e = esc(), cw = r.width / e, ch = r.height / e;
            k = Math.min(cw / w, ch / h, 1);
            kMin = k * 0.5;
            x = (cw - w * k) / 2; y = (ch - h * k) / 2;
            aplicar();
        }
        function zoom(f, cx, cy) {
            var nk = Math.max(kMin, Math.min(kMax, k * f));
            f = nk / k;
            x = cx - (cx - x) * f; y = cy - (cy - y) * f; k = nk;
            aplicar();
        }
        function centro() { var r = vp.getBoundingClientRect(), e = esc(); return [r.width / e / 2, r.height / e / 2]; }

        // Botones + − ⤢
        var btns = document.createElement('div');
        btns.className = 'fc-btns';
        btns.innerHTML = '<button data-a="mas" title="Acercar">+</button><button data-a="menos" title="Alejar">−</button><button data-a="fit" title="Ajustar a la caja">⤢</button>';
        vp.appendChild(btns);
        btns.addEventListener('click', function (ev) {
            var b = ev.target.closest('button'); if (!b) return;
            var c = centro();
            if (b.dataset.a === 'mas') zoom(1.3, c[0], c[1]);
            else if (b.dataset.a === 'menos') zoom(1 / 1.3, c[0], c[1]);
            else ajustar();
        });

        // Rueda del ratón = zoom hacia donde apuntas
        vp.addEventListener('wheel', function (ev) {
            ev.preventDefault();
            var r = vp.getBoundingClientRect(), e = esc();
            zoom(ev.deltaY < 0 ? 1.15 : 1 / 1.15, (ev.clientX - r.left) / e, (ev.clientY - r.top) / e);
        }, { passive: false });

        // Arrastrar = mover
        vp.addEventListener('pointerdown', function (ev) {
            if (ev.target.closest('.fc-btns')) return;
            arrastrando = true; px = ev.clientX; py = ev.clientY;
            vp.setPointerCapture(ev.pointerId); vp.classList.add('arrastrando');
        });
        vp.addEventListener('pointermove', function (ev) {
            if (!arrastrando) return;
            var e = esc();
            x += (ev.clientX - px) / e; y += (ev.clientY - py) / e; px = ev.clientX; py = ev.clientY;
            aplicar();
        });
        function soltar() { arrastrando = false; vp.classList.remove('arrastrando'); }
        vp.addEventListener('pointerup', soltar);
        vp.addEventListener('pointercancel', soltar);
        vp.addEventListener('dblclick', ajustar);   // doble clic = volver a ajustar

        // Que los gestos táctiles no cambien de diapositiva
        ['touchstart', 'touchend'].forEach(function (t) {
            vp.addEventListener(t, function (ev) { ev.stopPropagation(); }, { passive: true });
        });

        ajustar();
    }

    // ───────── DIBUJAR ─────────
    document.querySelectorAll('pre.flowchart').forEach(function (el, i) {
        var codigo = el.textContent.split('\n').map(function (s) { return s.trim(); }).join('\n');
        el.textContent = '';
        var canvas = document.createElement('div');
        canvas.className = 'fc-canvas';
        canvas.id = 'flowchart-' + i;
        el.appendChild(canvas);
        flowchart.parse(codigo).drawSVG(canvas.id, opciones);
        activarZoom(el, canvas);
    });
})();