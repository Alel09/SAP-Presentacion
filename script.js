/* ═══════════════════════════════════════════════════════════════
   CONFIGURACIÓN  ← AQUÍ EDITAS TU CONTENIDO
   ═══════════════════════════════════════════════════════════════ */
const DECK = {
    title: 'Título de tu presentación',  // aparece en el pie de página
    minutes: 15                          // duración objetivo (cronómetro T)
};

/* Simuladores: "code" son las líneas; "trace" es el recorrido.
   l   = índice de la línea que se ejecuta (empieza en 0)
   set = variables que cambian en ese paso      out = texto que se imprime
   note = explicación que se muestra abajo        vars = variables a mostrar   */
const SIMS = {
    promedio: {
        file: 'promedio.psc', vars: ['nota1', 'nota2', 'prom'],
        intro: 'Pulsa ▶ (o Espacio) para ejecutar el algoritmo línea por línea.',
        code: [
            'Algoritmo EvaluarPromedio',
            '  // Modo libre: asignación simple',
            '  nota1 <- 85',
            '  nota2 <- 90',
            '  prom <- (nota1 + nota2) / 2',
            '  Escribir "El promedio es: ", prom',
            '  Si prom >= 70 Entonces',
            '    Escribir "APROBADO 🎉"',
            '  Sino',
            '    Escribir "REPROBADO"',
            '  FinSi',
            'FinAlgoritmo'],
        trace: [
            { l: 0, out: '*** Inicio del programa ***', note: 'Comienza la ejecución del algoritmo.' },
            { l: 2, set: { nota1: 85 }, note: 'Se guarda 85 en la variable nota1.' },
            { l: 3, set: { nota2: 90 }, note: 'Se guarda 90 en la variable nota2.' },
            { l: 4, set: { prom: 87.5 }, note: '(85 + 90) / 2 = 87.5 → se guarda en prom.' },
            { l: 5, out: 'El promedio es: 87.5', note: 'Escribir muestra texto y el valor de la variable.' },
            { l: 6, note: '¿87.5 >= 70?  Verdadero → entra por la rama Entonces.' },
            { l: 7, out: 'APROBADO 🎉', note: 'Se ejecuta la rama verdadera; la rama Sino se omite.' },
            { l: 10, note: 'FinSi cierra el condicional. Las líneas 9-10 nunca se ejecutaron.' },
            { l: 11, out: '*** Ejecución finalizada ***', note: 'Fin del algoritmo.' }]
    },
    acumulador: {
        file: 'suma_acumulativa.psc', vars: ['suma', 'i'],
        code: [
            'Algoritmo SumaAcumulada',
            '  suma <- 0',
            '  Para i = 1 Hasta 3 Hacer',
            '    suma <- suma + i',
            '    Escribir "Suma actual: ", suma',
            '  FinPara',
            '  Escribir "Resultado total: ", suma',
            'FinAlgoritmo'],
        trace: [
            { l: 0, out: '*** Inicio ***', note: 'Comienza el algoritmo.' },
            { l: 1, set: { suma: 0 }, note: 'El acumulador arranca en 0.' },
            { l: 2, set: { i: 1 }, note: 'Primera vuelta: i vale 1.' },
            { l: 3, set: { suma: 1 }, note: 'suma = 0 + 1 = 1' },
            { l: 4, out: 'Suma actual: 1' },
            { l: 2, set: { i: 2 }, note: 'Segunda vuelta: i vale 2.' },
            { l: 3, set: { suma: 3 }, note: 'suma = 1 + 2 = 3' },
            { l: 4, out: 'Suma actual: 3' },
            { l: 2, set: { i: 3 }, note: 'Tercera vuelta: i vale 3.' },
            { l: 3, set: { suma: 6 }, note: 'suma = 3 + 3 = 6' },
            { l: 4, out: 'Suma actual: 6' },
            { l: 5, note: 'i ya llegó a 3: el bucle termina.' },
            { l: 6, out: 'Resultado total: 6' },
            { l: 7, out: '*** Proceso terminado ***' }]
    }
    // , miSimulador:{ file:'...', vars:[...], code:[...], trace:[...] }
};

/* Quiz con tiempo. Con 2+ equipos se alternan los turnos. 1 equipo = modo individual. */
const QUIZ = {
    titulo: 'Quiz relámpago', tiempo: 20,
    equipos: ['Equipo A', 'Equipo B'],
    preguntas: [
        { q: '¿Cuales son los principales patrones algoritmicos que se emplearon en el problema?', o: ['Iteracion, Conteo y Selección', 'Secuencia, Ordenamiento y Transformacion de datos', 'Busqueda, Repetición y Transformacion de datos', 'Selección, Ordenamiento y Busqueda'], a: 0, why: 'El programa siempre se encuentra haciendo estos patrones, sin estos principales el programa no podria hacer alguno otro.' },
        { q: '¿Cuales son las principales caracteristicas para categorizar un problema?', o: ['Entradas, Salidas, Condiciones y Restricciones', 'Resultado final, Cuestionamiento del problema y Publico Objetibo del problema', 'Tipo de programación, Compilador y Bibliotecas', 'Complejidad, Optimización, Esfuerzo del usuario y Escalabilidad'], a: 0, why: 'Por que es la que permite comprender la naturaleza del problema y orientar la deducción de caracteristicas algoritmicas.' },
        { q: 'Al resolver un problema, se divide en 3 subtareas (reunir los datos, hacer los calculos y escribir el resultado)¿Que relación hay entre estas subtareas?', o: ['Son independientes', 'Forman una cadena', 'La unica relación es que todas son parte del mismo problema', 'Escribir el resultado primero y despues reunir datos'], a: 1, why: 'Sin los datos no se puede calcular y sin el calculo no hay resultado que escribir.' },
        { q: '¿Para que sirve la esquematización antes de escribir su solucion en codigo?', o: ['Para que el problema se ejecute mas rápido', 'Para no tener que probrar el programa despues', 'Por que hace visible la lógica del problema antes de programar ', 'Para escribir menos lineas de codigo'], a: 2, why: 'Por que indica que datos entran, que proceso se realiza y que resultado imprime' },
        { q: '¿Para que sirve comparar dos soluciones de un mismo problema?', o: ['Para comprobar que den el mismo resultado', 'Para ver cual esta mas bonito', 'Para elegir la mejor solución segun varios criterios', 'Para demostrar que solo hay una solución correcta'], a: 2, why: 'Por que dependiendo del contexto, el problema necesita diferentes cosas' },
        { q: '¿Por que es importante formular ideas precisas?', o: ['Para pensar menos', 'Para resolverlo rapido', 'Para reducir ambiguedades', 'Para ver si me cambio de carrera'], a: 2, why: 'Por que debe indicar que datos se usan, que accion se realiza,bajo que condicion y que resultado se espera' },
        { q: '¿Si Pepito habla con rosa sobre como meter los datos de envio de los paquetes a una base de datos que esta haciendo pepito(formulación o implementación)?', o: ['Formulación:Esta discutiendo el problema', 'Implementacion: Esta creando la solución', 'Formulando:Esta revisando la logica interna del problema', 'Implementación: Esta probando una solución'], a: 2, why: 'La misma respuesta lo dice XD' }
    ]
};

/* Juego: ordenar las líneas del algoritmo antes de que se acabe el tiempo. */
const ORDEN = {
    titulo: 'Ordena el algoritmo', tiempo: 45,
    lineas: [
        'Algoritmo Mayoria',
        '  Escribir "Ingresa tu edad:"',
        '  Leer edad',
        '  Si edad >= 18 Entonces',
        '    Escribir "Mayor de edad"',
        '  Sino',
        '    Escribir "Menor de edad"',
        '  FinSi',
        'FinAlgoritmo']
};

/* ═══════════════════════════════════════════════════════════════
   MOTOR (normalmente no necesitas tocar nada de aquí hacia abajo)
   ═══════════════════════════════════════════════════════════════ */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]] } return a };
const fmt = s => { s = Math.max(0, Math.round(s)); return String(s / 60 | 0).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0') };

/* Sonido */
let SOUND = true, AC;
function beep(f = 660, d = .12, type = 'sine', v = .05) {
    if (!SOUND) return; try {
        AC = AC || new (window.AudioContext || window.webkitAudioContext)();
        const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = f; g.gain.value = v; o.connect(g); g.connect(AC.destination);
        o.start(); g.gain.exponentialRampToValueAtTime(.0001, AC.currentTime + d); o.stop(AC.currentTime + d);
    } catch (_) { }
}
const sfx = {
    ok: () => { beep(660, .1); setTimeout(() => beep(880, .18), 100) }, bad: () => beep(160, .35, 'sawtooth', .06), tick: () => beep(1000, .05, 'square', .025),
    win: () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, .2), i * 120))
};
function confetti(host) {
    const c = ['#00f5d4', '#4895ef', '#ffd60a', '#f72585', '#2ee59d'];
    for (let i = 0; i < 60; i++) {
        const e = document.createElement('i'); e.className = 'confetti'; e.style.left = Math.random() * 100 + '%'; e.style.background = c[i % 5];
        e.style.animationDuration = 2 + Math.random() * 2 + 's'; e.style.animationDelay = Math.random() * .6 + 's'; host.appendChild(e); setTimeout(() => e.remove(), 5000)
    }
}

/* Resaltado de sintaxis PSeInt */
const KWS = 'Algoritmo|FinAlgoritmo|Proceso|FinProceso|SubProceso|FinSubProceso|Definir|Como|Entero|Real|Caracter|Cadena|Logico|Leer|Escribir|Mostrar|Si|Entonces|Sino|FinSi|Segun|De Otro Modo|FinSegun|Para|Hasta Que|Hasta|Con Paso|Hacer|FinPara|Mientras|FinMientras|Repetir|Dimension|Funcion|FinFuncion|Verdadero|Falso|MOD';
const RX = new RegExp('(//.*)|("[^"]*")|\\b(' + KWS + ')\\b|(\\b\\d+(?:\\.\\d+)?\\b)|(&lt;-|&lt;=|&gt;=|&lt;&gt;|[=+\\-*/^])', 'gi');
function hl(t) { return esc(t).replace(RX, (m, c, s, k, n, o) => c ? `<span class="cm">${m}</span>` : s ? `<span class="s">${m}</span>` : k ? `<span class="k">${m}</span>` : n ? `<span class="n">${m}</span>` : `<span class="op">${m}</span>`) }
$$('pre.code').forEach(p => {
    let l = p.textContent.replace(/^\n/, '').replace(/\s+$/, '').split('\n');
    const ind = Math.min(...l.filter(x => x.trim()).map(x => x.match(/^ */)[0].length)); p.innerHTML = hl(l.map(x => x.slice(ind)).join('\n'))
});

/* ───────── Simulador ───────── */
class Sim {
    constructor(el, c) {
        this.el = el; this.c = c; this.i = 0; this.t = null;
        let vars = {}; (c.vars || []).forEach(v => vars[v] = null); let out = [];
        this.S = [{ l: -1, vars: { ...vars }, out: [], chg: [], note: c.intro || 'Pulsa ▶ (o Espacio) para ejecutar paso a paso.' }];
        c.trace.forEach(s => {
            const chg = []; if (s.set) for (const k in s.set) { vars[k] = s.set[k]; chg.push(k) } if (s.out !== undefined) out = out.concat(s.out);
            this.S.push({ l: s.l, vars: { ...vars }, out: [...out], chg, note: s.note || '' })
        });
        el.innerHTML = `<div class="sim-bar"><div class="sim-file">📄 ${esc(c.file)} <span class="chip cy" style="margin-left:8px">Modo Libre</span></div>
      <div class="sim-ctl"><button data-a="prev" title="Paso anterior">⏮</button><button class="go" data-a="play">▶ Auto</button><button data-a="next" title="Siguiente paso (Espacio)">⏭</button><button data-a="reset" title="Reiniciar">↺</button><span class="st"></span></div></div>
      <div class="sim-grid"><div class="panel editor">${c.code.map((l, i) => `<div class="ln" data-l="${i}"><i>${i + 1}</i><span>${hl(l)}</span></div>`).join('')}</div>
      <div class="side"><div class="panel"><h4>🧠 Memoria de variables</h4><table class="vars"><thead><tr><th>Variable</th><th>Valor</th><th>Estado</th></tr></thead><tbody></tbody></table></div>
      <div class="panel term"><h4>▮ Consola de salida</h4><div class="out"></div></div></div></div><div class="sim-note"></div>`;
        el.addEventListener('click', e => {
            const b = e.target.closest('button'); if (b) { ({ prev: () => this.prev(), next: () => this.next(), reset: () => this.reset(), play: () => this.auto() })[b.dataset.a](); return }
            const ln = e.target.closest('.ln'); if (ln) { const k = this.S.findIndex(s => s.l === +ln.dataset.l); if (k > 0) { this.stop(); this.i = k; this.draw() } }
        });
        el._inst = this; this.draw()
    }
    draw() {
        const s = this.S[this.i], done = new Set(this.S.slice(1, this.i).map(x => x.l));
        $$('.ln', this.el).forEach(n => { const l = +n.dataset.l; n.className = 'ln' + (l === s.l ? ' on' : done.has(l) ? ' done' : '') });
        const on = $('.ln.on', this.el); if (on) on.scrollIntoView({ block: 'nearest' });
        $('tbody', this.el).innerHTML = Object.keys(s.vars).map(k => {
            const v = s.vars[k], ch = s.chg.includes(k);
            return `<tr class="${ch ? 'chg' : ''}"><td><b>${esc(k)}</b></td><td class="val ${v === null ? 'nul' : ''}">${v === null ? 'Sin definir' : esc(v)}</td><td class="st">${ch ? 'Actualizado' : v === null ? '—' : 'En memoria'}</td></tr>`
        }).join('');
        const rv=$('tr.chg',this.el);if(rv)rv.scrollIntoView({block:'nearest'});
        const out = $('.out', this.el); out.innerHTML = s.out.map((o, k) => `<div class="${k === s.out.length - 1 && this.S[this.i - 1] && this.S[this.i - 1].out.length < s.out.length ? 'new' : ''}">${esc(o)}</div>`).join(''); out.scrollTop = 1e5;
        $('.sim-note', this.el).innerHTML = `<span>💡</span><span>${esc(s.note || '…')}</span>`;
        $('.st', this.el).textContent = `Paso ${this.i} / ${this.S.length - 1}`
    }
    next() { if (this.i < this.S.length - 1) { this.i++; this.draw() } else this.stop() }
    prev() { if (this.i > 0) { this.i--; this.draw() } }
    reset() { this.stop(); this.i = 0; this.draw() }
    auto() {
        if (this.t) return this.stop(); if (this.i >= this.S.length - 1) this.i = 0; $('[data-a=play]', this.el).textContent = '⏸ Pausa';
        this.t = setInterval(() => this.i < this.S.length - 1 ? this.next() : this.stop(), 1300); this.next()
    }
    stop() { clearInterval(this.t); this.t = null; const b = $('[data-a=play]', this.el); if (b) b.textContent = '▶ Auto' }
    space() { this.next() }
}

/* ───────── Cuenta regresiva ───────── */
class Countdown {
    constructor(el) {
        this.el = el; this.total = +el.dataset.seconds || 60; this.left = this.total; this.run = false; this.t = null;
        el.innerHTML = `<div class="cd-num"></div><div class="cd-bar"><i></i></div><div class="cd-btns"><button class="go" data-a="t">▶ Iniciar</button><button data-a="r">↺ Reiniciar</button><button data-a="p">+30 s</button></div>`;
        el.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; ({ t: () => this.toggle(), r: () => this.reset(), p: () => { this.left += 30; this.total = Math.max(this.total, this.left); if (this.run) this.end = Date.now() + this.left * 1000; this.draw() } })[b.dataset.a]() });
        el._inst = this; this.draw()
    }
    draw() {
        $('.cd-num', this.el).textContent = fmt(this.left); $('.cd-bar i', this.el).style.width = (this.left / this.total * 100) + '%';
        this.el.classList.toggle('warn', this.left <= 10 && this.left > 0); this.el.classList.toggle('done', this.left <= 0);
        $('[data-a=t]', this.el).textContent = this.run ? '⏸ Pausa' : '▶ Iniciar'
    }
    toggle() {
        if (this.left <= 0) this.reset(); this.run = !this.run; clearInterval(this.t);
        if (this.run) {
            this.end = Date.now() + this.left * 1000; this.t = setInterval(() => {
                this.left = Math.max(0, (this.end - Date.now()) / 1000);
                if (this.left <= 10 && this.left > 0 && Math.abs(this.left - Math.round(this.left)) < .25) sfx.tick();
                if (this.left <= 0) { this.run = false; clearInterval(this.t);[0, 250, 500].forEach(d => setTimeout(() => beep(880, .2, 'square'), d)) } this.draw()
            }, 200)
        } this.draw()
    }
    reset() { this.run = false; clearInterval(this.t); this.total = +this.el.dataset.seconds || 60; this.left = this.total; this.draw() }
    space() { this.toggle() }
}

/* ───────── Juego 1: Quiz ───────── */
class Quiz {
    constructor(el, c) { this.el = el; this.c = c; this.ph = 'intro'; el._inst = this; this.intro() }
    intro() {
        this.ph = 'intro'; const n = this.c.equipos.length;
        this.el.innerHTML = `<div class="g-intro"><div class="kicker">🎮 Juego con tiempo</div><h2 class="grad" style="margin:0">${esc(this.c.titulo)}</h2>
      <div class="rules"><span class="chip cy">❓ ${this.c.preguntas.length} preguntas</span><span class="chip cy">⏱ ${this.c.tiempo} s cada una</span><span class="chip cy">⚡ Más rápido = más puntos</span><span class="chip cy">🔥 Rachas dan bonus</span></div>
      ${n > 1 ? `<p class="muted" style="font-size:19px">Los equipos se turnan para responder. Edita los nombres:</p>` : ''}
      <div class="teams-in">${this.c.equipos.map((t, i) => `<input value="${esc(t)}" maxlength="18" data-t="${i}">`).join('')}</div>
      <button class="btn" data-a="start">▶ Comenzar (Espacio)</button></div>`;
        $('[data-a=start]', this.el).onclick = () => this.start()
    }
    start() {
        this.names = $$('.teams-in input', this.el).map((x, i) => x.value.trim() || this.c.equipos[i]);
        this.sc = this.names.map(() => 0); this.st = this.names.map(() => 0); this.qi = 0; this.q()
    }
    q() {
        this.ph = 'q'; const Q = this.c.preguntas[this.qi], n = this.names.length, turn = this.qi % n; this.left = this.c.tiempo; this.turn = turn;
        this.el.innerHTML = `<div class="g-top"><div class="scores">${this.names.map((t, i) => `<div class="score ${i === turn && n > 1 ? 'turn' : ''}"><b>${esc(t)}</b><span>${this.sc[i]}</span>${this.st[i] > 1 ? `<small>🔥${this.st[i]}</small>` : ''}</div>`).join('')}</div>
      <div class="chip">Pregunta ${this.qi + 1} / ${this.c.preguntas.length}</div></div>
      <div style="display:flex;align-items:center;gap:14px"><div class="tbar"><div class="tfill"></div></div><div class="tnum">${this.left}</div></div>
      ${n > 1 ? `<div class="turnb">🎯 Turno de: ${esc(this.names[turn])}</div>` : ''}
      <div class="q-text">${esc(Q.q)}</div>
      <div class="opts">${Q.o.map((o, i) => `<button class="opt" data-i="${i}"><span class="ltr">${'ABCD'[i]}</span>${esc(o)}</button>`).join('')}</div><div class="fbslot"></div>`;
        $$('.opt', this.el).forEach(b => b.onclick = () => this.answer(+b.dataset.i));
        clearInterval(this.t); this.t = setInterval(() => {
            if (!this.el.closest('.slide.active')) return; this.left -= .1;
            const f = $('.tfill', this.el), nm = $('.tnum', this.el), low = this.left <= this.c.tiempo * .3;
            f.style.width = Math.max(0, this.left / this.c.tiempo * 100) + '%'; f.classList.toggle('low', low); nm.classList.toggle('low', low); nm.textContent = Math.max(0, Math.ceil(this.left));
            if (low && Math.abs(this.left - Math.round(this.left)) < .05 && this.left > 0.5) sfx.tick();
            if (this.left <= 0) this.answer(-1)
        }, 100)
    }
    answer(k) {
        if (this.ph !== 'q') return; this.ph = 'fb'; clearInterval(this.t); const Q = this.c.preguntas[this.qi], ok = k === Q.a, T = this.turn; let pts = 0;
        if (ok) { this.st[T]++; pts = 100 + Math.round(Math.max(0, this.left) / this.c.tiempo * 100) + (this.st[T] >= 2 ? Math.min(100, 25 * (this.st[T] - 1)) : 0); this.sc[T] += pts; sfx.ok() } else { this.st[T] = 0; sfx.bad() }
        $$('.opt', this.el).forEach((b, i) => { b.disabled = true; if (i === Q.a) b.classList.add('ok'); else if (i === k) b.classList.add('bad') });
        const last = this.qi >= this.c.preguntas.length - 1;
        $('.fbslot', this.el).innerHTML = `<div class="fb"><div><b>${k < 0 ? '⏰ ¡Se acabó el tiempo!' : ok ? '✅ ¡Correcto! +' + pts + ' pts' : '❌ Incorrecto'}</b> — ${esc(Q.why || '')}</div><button class="btn" style="font-size:18px;padding:10px 22px" data-a="n">${last ? 'Ver resultados' : 'Siguiente'} ▶</button></div>`;
        $('[data-a=n]', this.el).onclick = () => this.nextQ();
        $$('.score span', this.el)[T].textContent = this.sc[T]
    }
    nextQ() { this.qi++; this.qi >= this.c.preguntas.length ? this.end() : this.q() }
    end() {
        this.ph = 'end'; const r = this.names.map((n, i) => ({ n, s: this.sc[i] })).sort((a, b) => b.s - a.s), tie = r.length > 1 && r[0].s === r[1].s;
        this.el.innerHTML = `<div class="g-intro"><div class="kicker">Resultados</div><h2 class="grad" style="margin:0">${r.length > 1 ? (tie ? '¡Empate!' : '🏆 Gana ' + esc(r[0].n)) : '🏁 ¡Terminaste!'}</h2>
      <div class="rank">${r.map((x, i) => `<div><b>${['🥇', '🥈', '🥉'][i] || '▫️'} ${esc(x.n)}</b><span>${x.s} pts</span></div>`).join('')}</div>
      <button class="btn ghost" data-a="r">↺ Jugar otra vez (Espacio)</button></div>`;
        $('[data-a=r]', this.el).onclick = () => this.intro(); confetti(this.el); sfx.win()
    }
    key(k) { if (this.ph !== 'q') return; const i = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k.toLowerCase()); if (i >= 0 && i < 4) this.answer(i) }
    space() { if (this.ph === 'intro') this.start(); else if (this.ph === 'fb') this.nextQ(); else if (this.ph === 'end') this.intro() }
}

/* ───────── Juego 2: Ordena el algoritmo ───────── */
class Orden {
    constructor(el, c) { this.el = el; this.c = c; this.ph = 'intro'; el._inst = this; this.intro() }
    intro() {
        this.ph = 'intro'; clearInterval(this.t);
        this.el.innerHTML = `<div class="g-intro"><div class="kicker">🎮 Juego con tiempo</div><h2 class="grad" style="margin:0">${esc(this.c.titulo)}</h2>
      <p class="muted" style="font-size:22px">Las líneas del algoritmo están desordenadas. Haz clic en ellas <b class="c1">en el orden correcto</b>.<br>Cada error te quita <b class="c4">3 segundos</b>.</p>
      <div class="rules"><span class="chip cy">⏱ ${this.c.tiempo} s</span><span class="chip cy">${this.c.lineas.length} líneas</span></div>
      <button class="btn" data-a="s">▶ Comenzar (Espacio)</button></div>`; $('[data-a=s]', this.el).onclick = () => this.start()
    }
    start() {
        this.ph = 'play'; this.n = 0; this.left = this.c.tiempo; this.pool = shuffle(this.c.lineas.map((_, i) => i)); this.draw();
        clearInterval(this.t); this.t = setInterval(() => { if (!this.el.closest('.slide.active')) return; this.left -= .1; if (this.left <= 0) this.lose(); else this.timeUI() }, 100)
    }
    timeUI() {
        const f = $('.tfill', this.el), nm = $('.tnum', this.el); if (!f) return; const low = this.left <= this.c.tiempo * .3;
        f.style.width = this.left / this.c.tiempo * 100 + '%'; f.classList.toggle('low', low); nm.classList.toggle('low', low); nm.textContent = Math.ceil(this.left)
    }
    draw() {
        const L = this.c.lineas;
        this.el.innerHTML = `<div class="g-top"><div class="chip cy">Línea ${this.n} / ${L.length}</div></div>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px"><div class="tbar"><div class="tfill"></div></div><div class="tnum">${Math.ceil(this.left)}</div></div>
      <div class="cols cols-2 grow" style="min-height:0"><div class="panel editor" style="padding:14px 10px"><h4 style="padding-left:12px">Tu algoritmo</h4>
      ${L.map((l, i) => i < this.n ? `<div class="slot fill">${hl(l)}</div>` : `<div class="slot empty">${i + 1}</div>`).join('')}</div>
      <div class="pool">${this.pool.filter(i => i >= this.n || !1).length ? '' : ''}${this.pool.map(i => `<button class="pbtn" data-i="${i}">${hl(L[i].trim())}</button>`).join('')}</div></div>`;
        $$('.pbtn', this.el).forEach(b => b.onclick = () => this.pick(+b.dataset.i, b)); this.timeUI()
    }
    pick(i, b) {
        if (this.ph !== 'play') return;
        if (i === this.n) { this.n++; this.pool = this.pool.filter(x => x !== i); sfx.ok(); if (this.n >= this.c.lineas.length) this.win(); else this.draw() }
        else { this.left -= 3; sfx.bad(); b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 400); if (this.left <= 0) this.lose() }
    }
    win() {
        this.ph = 'end'; clearInterval(this.t); const r = this.left / this.c.tiempo, s = r > .5 ? 3 : r > .25 ? 2 : 1;
        this.el.innerHTML = `<div class="g-intro"><div class="kicker">¡Completado!</div><h2 class="grad" style="margin:0">¡Algoritmo ordenado!</h2><div class="stars">${'⭐'.repeat(s)}${'☆'.repeat(3 - s)}</div>
      <p class="muted" style="font-size:24px">Te sobraron <b class="c1">${Math.ceil(this.left)} s</b></p><button class="btn ghost" data-a="r">↺ Jugar otra vez (Espacio)</button></div>`;
        $('[data-a=r]', this.el).onclick = () => this.intro(); confetti(this.el); sfx.win()
    }
    lose() {
        this.ph = 'end'; clearInterval(this.t); sfx.bad();
        this.el.innerHTML = `<div class="g-intro" style="max-width:none"><div class="kicker c4">⏰ Se acabó el tiempo</div><h2 style="margin:0">Así era el orden correcto</h2>
      <pre class="code" style="text-align:left;font-size:17px">${hl(this.c.lineas.join('\n'))}</pre><button class="btn ghost" data-a="r">↺ Intentar otra vez (Espacio)</button></div>`; $('[data-a=r]', this.el).onclick = () => this.intro()
    }
    key() { }
    space() { if (this.ph === 'intro') this.start(); else if (this.ph === 'end') this.intro() }
}
//pikachu
/*
SIMS.pruebaLargo = {
  file: 'prueba_desbordamiento.psc',
  vars: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  intro: 'Prueba de desbordamiento: 26 líneas, una muy ancha y 7 variables.',
  code: [
    'Algoritmo PruebaLargo',
    '  // Línea 2: este comentario es MUY largo a propósito para ver qué pasa cuando una sola línea es más ancha que el panel del código',
    '  a <- 1',
    '  b <- 2',
    '  c <- 3',
    '  d <- 4',
    '  e <- 5',
    '  f <- 6',
    '  g <- 7',
    '  Escribir "Variables listas"',
    '  a <- a + 10',
    '  b <- b + 10',
    '  c <- c + 10',
    '  d <- d + 10',
    '  e <- e + 10',
    '  f <- f + 10',
    '  g <- g + 10',
    '  Escribir "Sumé 10 a todas"',
    '  Si a > 10 Entonces',
    '    Escribir "a es mayor que 10"',
    '  FinSi',
    '  Si g > 10 Entonces',
    '    Escribir "g es mayor que 10"',
    '  FinSi',
    '  Escribir "Fin de la prueba"',
    'FinAlgoritmo'
  ],
  trace: [
    {l:0,  out:'*** Inicio ***', note:'Comienza.'},
    {l:2,  set:{a:1},  note:'a = 1'},
    {l:3,  set:{b:2},  note:'b = 2'},
    {l:4,  set:{c:3},  note:'c = 3'},
    {l:5,  set:{d:4},  note:'d = 4'},
    {l:6,  set:{e:5},  note:'e = 5'},
    {l:7,  set:{f:6},  note:'f = 6'},
    {l:8,  set:{g:7},  note:'g = 7'},
    {l:9,  out:'Variables listas', note:'Se imprime el mensaje.'},
    {l:10, set:{a:11}, note:'a = 1 + 10'},
    {l:11, set:{b:12}, note:'b = 2 + 10'},
    {l:12, set:{c:13}, note:'c = 3 + 10'},
    {l:13, set:{d:14}, note:'d = 4 + 10'},
    {l:14, set:{e:15}, note:'e = 5 + 10'},
    {l:15, set:{f:16}, note:'f = 6 + 10'},
    {l:16, set:{g:17}, note:'g = 7 + 10'},
    {l:17, out:'Sumé 10 a todas', note:'Se imprime el mensaje.'},
    {l:18, note:'¿11 > 10? Verdadero.'},
    {l:19, out:'a es mayor que 10', note:'Entra al Si.'},
    {l:21, note:'¿17 > 10? Verdadero.'},
    {l:22, out:'g es mayor que 10', note:'Entra al Si.'},
    {l:24, out:'Fin de la prueba', note:'Última instrucción.'},
    {l:25, out:'*** Proceso terminado ***', note:'Fin.'}
  ]
};*/
$$('.sim').forEach(el => new Sim(el, SIMS[el.dataset.sim]));
$$('.countdown').forEach(el => new Countdown(el));
$$('.game').forEach(el => el.dataset.game === 'quiz' ? new Quiz(el, QUIZ) : new Orden(el, ORDEN));

/* ───────── Navegación ───────── */
const stage = $('#stage'), slides = $$('.slide'), N = slides.length; let cur = -1;
$('#footTitle').textContent = DECK.title;
function fit() { const s = Math.min(innerWidth / 1280, innerHeight / 720); stage.style.transform = `translate(-50%,-50%) scale(${s})` }
addEventListener('resize', fit); fit();

function go(i, dir = 1) {
    i = Math.max(0, Math.min(N - 1, i)); if (i === cur) return;
    document.body.classList.toggle('back', dir < 0); if (slides[cur]) slides[cur].classList.remove('active');
    cur = i; const s = slides[i]; s.classList.add('active');
    $$('.frag', s).forEach(f => f.classList.toggle('shown', dir < 0));
    document.body.classList.toggle('nochrome', s.dataset.chrome === 'off');
    $('#bar').style.width = ((i + 1) / N * 100) + '%'; $('#footNum').textContent = `${i + 1} / ${N}`; $('#hudCnt').textContent = `${i + 1} / ${N}`;
    const nt = $('.notes', s); $('#notesPanel').innerHTML = '<b>NOTAS DEL ORADOR</b>' + (nt ? nt.innerHTML : '<span class="muted">Sin notas en esta diapositiva.</span>');
    $$('[data-count]', s).forEach(el => {
        const to = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
        (function step(t) { const p = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step) })(t0)
    });
    history.replaceState(null, '', '#' + (i + 1))
}
function next() { const f = $('.frag:not(.shown)', slides[cur]); if (f) f.classList.add('shown'); else go(cur + 1, 1) }
function prev() { go(cur - 1, -1) }
const inst = () => { const e = $('.sim,.game,.countdown', slides[cur]); return e && e._inst };

function toggleOv(on) {
    if (on === undefined) on = !$('#ovl').classList.contains('show');
    if (on) {
        $('#ovGrid').innerHTML = slides.map((s, i) => `<div class="ovc ${i === cur ? 'cur' : ''}" data-i="${i}"><small>${String(i + 1).padStart(2, '0')}</small><div>${esc(s.dataset.title || 'Diapositiva ' + (i + 1))}</div>${s.dataset.presenter ? `<em>${esc(s.dataset.presenter)}</em>` : ''}</div>`).join('');
        $$('.ovc').forEach(c => c.onclick = () => { go(+c.dataset.i, +c.dataset.i >= cur ? 1 : -1); toggleOv(false) })
    }
    $('#ovl').classList.toggle('show', on)
}
function toggleHelp(on) { $('#help').classList.toggle('show', on === undefined ? !$('#help').classList.contains('show') : on) }
function toggleFs() { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => { }) }
function toggleNotes() { $('#notesPanel').classList.toggle('show'); $('#bNotes').classList.toggle('on') }
function setSound(v) {
    SOUND = v;
    $('#bSound').innerHTML = v
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
}
function setFsIcon() {
    $('#bFs').innerHTML = document.fullscreenElement
        ? '<i class="fa-solid fa-compress"></i>'   // ya está en pantalla completa → mostrar "salir"
        : '<i class="fa-solid fa-expand"></i>';    // no lo está → mostrar "entrar"
}
document.addEventListener('fullscreenchange', setFsIcon);

/* Cronómetro de la exposición */
let t0 = Date.now();
function tickClock() { const s = (Date.now() - t0) / 1000, c = $('#clock'); c.textContent = fmt(s) + (DECK.minutes ? ' / ' + fmt(DECK.minutes * 60) : ''); c.classList.toggle('over', DECK.minutes && s > DECK.minutes * 60) }
setInterval(tickClock, 1000); tickClock();
function toggleClock() { $('#clock').classList.toggle('show'); $('#bClock').classList.toggle('on') }
$('#clock').onclick = () => { t0 = Date.now(); tickClock() };
function toggleLaser() { document.body.classList.toggle('laser'); $('#bLaser').classList.toggle('on') }
addEventListener('mousemove', e => { const l = $('#laser'); l.style.left = e.clientX + 'px'; l.style.top = e.clientY + 'px' });

/* HUD */
$('#bPrev').onclick = prev; $('#bNext').onclick = next; $('#bOv').onclick = () => toggleOv(); $('#bNotes').onclick = toggleNotes; $('#bClock').onclick = toggleClock;
$('#bLaser').onclick = toggleLaser; $('#bSound').onclick = () => setSound(!SOUND); $('#bFs').onclick = toggleFs; $('#bHelp').onclick = () => toggleHelp();
document.addEventListener('click', e => { const b = e.target.closest('button'); if (b && !b.closest('.opt')) b.blur() });
let idle; function wake() {
    $('#hud').classList.remove('hide'); document.body.classList.remove('idle'); clearTimeout(idle);
    idle = setTimeout(() => { if (!$('.overlay.show')) { $('#hud').classList.add('hide'); if (!document.body.classList.contains('laser')) document.body.classList.add('idle') } }, 2800)
}
['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach(ev => addEventListener(ev, wake)); wake();

/* Teclado */
addEventListener('keydown', e => {
    if (e.target.matches('input,textarea')) return; if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key, K = k.toLowerCase(), I = inst();
    if ($('#blackout').classList.contains('show') && K !== 'b') { $('#blackout').classList.remove('show'); return }
    if (k === 'Escape') { toggleOv(false); toggleHelp(false); return }
    if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); next() }
    else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); prev() }
    else if (k === 'Home') go(0, -1); else if (k === 'End') go(N - 1, 1);
    else if (k === ' ' || k === 'Enter') { if (e.target.closest && e.target.closest('button')) return; e.preventDefault(); if (I && I.space) I.space(); else next() }
    else if (I && I.key && '1234abcdABCD'.includes(k) && k.length === 1) I.key(k);
    else if (K === 'f') toggleFs(); else if (K === 'o') toggleOv(); else if (K === 'n') toggleNotes(); else if (K === 't') toggleClock();
    else if (K === 'l') toggleLaser(); else if (K === 'm') setSound(!SOUND); else if (K === 'b') $('#blackout').classList.toggle('show');
    else if (k === '?' || K === 'h') toggleHelp();
});
/* Táctil */
let tx = null; addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
addEventListener('touchend', e => { if (tx === null || e.target.closest('button,input')) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 60) d < 0 ? next() : prev(); tx = null });

go((parseInt(location.hash.slice(1)) || 1) - 1, 1);

// Zoom de imagenes: clic en una imagen de <figure> (o con class="zoom") la abre a pantalla completa.
(function () {
  var visor = document.createElement('div');
  visor.id = 'zoomVisor';
  visor.innerHTML = '<img alt=""><div class="zoom-pie"></div><span class="zoom-cerrar">✕ Cerrar (Esc)</span>';
  document.body.appendChild(visor);
  var grande = visor.querySelector('img'), pie = visor.querySelector('.zoom-pie');

  function abierto() { return visor.classList.contains('abierto'); }
  function cerrar() { visor.classList.remove('abierto'); }
  function abrir(img) {
    grande.src = img.currentSrc || img.src;
    grande.alt = img.alt;
    var fig = img.closest('figure'), cap = fig && fig.querySelector('figcaption');
    pie.textContent = cap ? cap.textContent : (img.alt || '');
    visor.classList.add('abierto');
  }

  document.addEventListener('click', function (e) {
    if (abierto()) { cerrar(); return; }
    var img = e.target.closest('figure img, img.zoom');
    if (img && !img.classList.contains('nozoom')) abrir(img);
  });

  // Captura el teclado antes que la navegacion de diapositivas
  document.addEventListener('keydown', function (e) {
    if (!abierto()) return;
    e.stopPropagation();
    e.preventDefault();
    if (e.key === 'Escape') cerrar();
  }, true);
})();