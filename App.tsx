
import React, { useState, useEffect } from 'react';
import { AttributesRadarChart, EnergyLineChart, OpportunityBubbleChart } from './components/Charts';

// --- Icons Helper ---
const getKataIconClass = (n: string | number) => {
    switch (String(n)) {
        case '1': return 'fa-wind';             // Viento/Velocidad (Jab y Salida)
        case '2': return 'fa-bolt';             // Contraataque (Check Hook/Uppercut)
        case '3': return 'fa-shield-halved';    // Defensa Estructural
        case '4': return 'fa-hand-paper';       // FRAMING (Parada en seco, no clinch)
        case '5': return 'fa-burst';            // Explosión/Flurry
        case '6': return 'fa-angles-right';     // Avance/Ángulos
        default: return 'fa-fist-raised';
    }
};

const KataIcon = ({ num }: { num: string | number }) => (
    <i className={`fas ${getKataIconClass(num)} mr-1 text-current`} title={`KATA ${num}`}></i>
);

// --- Components ---

const AccordionItem = ({ title, children, colorClass }: { title: React.ReactNode, children?: React.ReactNode, colorClass: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-niko-card p-6 rounded-xl shadow-xl border-l-4 ${colorClass} mb-4`}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`w-full text-left flex justify-between items-center text-2xl md:text-3xl font-heading hover:text-white hover:bg-white/5 p-2 rounded transition-all duration-200 ${colorClass.replace('border-', 'text-')}`}
            >
                <span className="flex items-center">
                    {title}
                </span>
                <i className={`fas fa-chevron-down text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
};

const ComboList = ({ items }: { items: { title: string, desc: string }[] }) => (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2">
        {items.map((item, idx) => (
            <li key={idx} className="relative pl-6 mb-2">
                <span className="absolute left-0 text-niko-amber font-bold text-lg leading-none">•</span>
                <strong className="text-niko-cyan font-semibold">{item.title}:</strong> <span className="text-gray-300">{item.desc}</span>
            </li>
        ))}
    </ul>
);

const UserStatsCalibration = () => (
    <div className="bg-gradient-to-r from-gray-900 to-niko-card p-6 rounded-xl border border-niko-cyan shadow-2xl mb-12">
        <h3 className="text-2xl text-white font-heading mb-4 flex items-center">
            <i className="fas fa-sliders text-niko-cyan mr-3"></i> 
            CALIBRACIÓN DE USUARIO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-black/40 p-3 rounded border-l-2 border-niko-red">
                <strong className="text-niko-red block mb-1">Flexiones (Max: 35)</strong>
                <p className="text-gray-300">
                    Estás en rango de hipertrofia, pero falta resistencia de combate.
                    <br/><strong className="text-white">Ajuste:</strong> Usaremos <strong>EMOM</strong> (Every Minute on the Minute). Haz 10 flexiones cada minuto durante 10 minutos. Total: 100 reps sin llegar al fallo, acumulando volumen.
                </p>
            </div>
            <div className="bg-black/40 p-3 rounded border-l-2 border-niko-lime">
                <strong className="text-niko-lime block mb-1">Sentadillas (Max: 100)</strong>
                <p className="text-gray-300">
                    Resistencia excelente. Hacer más es inútil para potencia.
                    <br/><strong className="text-white">Ajuste:</strong> PROHIBIDO hacer sentadillas sin peso. Todo debe ser <strong>Con Salto</strong> (Plyo) o <strong>Búlgaras con Mochila</strong>. Transforma esa resistencia en dinamita.
                </p>
            </div>
            <div className="bg-black/40 p-3 rounded border-l-2 border-niko-amber">
                <strong className="text-niko-amber block mb-1">Abdominales (Max: 60)</strong>
                <p className="text-gray-300">
                    Base sólida. Ahora enfócate en la dureza.
                    <br/><strong className="text-white">Ajuste:</strong> Introduce <strong>Plancha con Golpes</strong> (pide que te golpeen o golpéate tú) y <strong>Leg Raises Colgado</strong> (si encuentras donde colgarte) o L-Sit en suelo.
                </p>
            </div>
        </div>
    </div>
);

const EliteProtocol = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-amber shadow-2xl">
            <h3 className="text-xl text-white font-heading mb-3 flex items-center">
                <KataIcon num="2" /> CAZADOR DE CABEZAS (UPPERCUTS)
            </h3>
            <p className="text-xs text-gray-400 mb-3">El estilo Peek-a-boo se agacha mucho (Bobbing). Ahí es vulnerable.</p>
            <ul className="text-sm text-gray-300 space-y-2">
                <li><strong className="text-niko-amber">Drill Tyson:</strong> Pon una cuerda a la altura de tu cintura. Haz sombra lanzando Uppercuts justo cuando "el rival" (imaginario) bajaría la cabeza.</li>
                <li><strong className="text-niko-red">Mancuerna Uppercut:</strong> 4 series x 15 reps rápidas. Potencia vertical pura.</li>
            </ul>
        </div>

        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-red shadow-2xl">
            <h3 className="text-xl text-white font-heading mb-3 flex items-center">
                <KataIcon num="4" /> EL MURO (FRAMING)
            </h3>
            <p className="text-xs text-gray-400 mb-3">No hay clinch. Si se acerca, empújalo con violencia (Frame) y sal lateralmente.</p>
            <ul className="text-sm text-gray-300 space-y-2">
                <li><strong className="text-niko-red">Push-Off Explosivo:</strong> Frente a una pared, déjate caer y empújala explosivamente para volver a posición de guardia. Simula empujar al rival.</li>
                <li><strong className="text-niko-red">Hombros de Acero:</strong> Isometric hold frontal con mancuerna (simulando el brazo rígido).</li>
            </ul>
        </div>

        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-cyan shadow-2xl">
            <h3 className="text-xl text-white font-heading mb-3 flex items-center">
                <KataIcon num="6" /> EL MATADOR (ÁNGULOS)
            </h3>
            <p className="text-xs text-gray-400 mb-3">Si retrocedes en línea recta contra un fajador, mueres.</p>
            <ul className="text-sm text-gray-300 space-y-2">
                <li><strong className="text-niko-cyan">Check Hook Drill:</strong> Paso atrás + Gancho de izquierda + Pivote de 90 grados. Repetir 100 veces al día.</li>
                <li><strong className="text-niko-cyan">Salida Lateral:</strong> Nunca dos pasos atrás. Uno atrás, uno al lado.</li>
            </ul>
        </div>
    </div>
);

const VisionReflexDrills = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Reflejos de Cobra <span className="text-niko-cyan">(Entrenamiento Visual)</span></h2>
        <div className="bg-niko-card p-6 rounded-xl border border-gray-700 shadow-2xl">
            <p className="text-gray-400 mb-6 text-center">
                El rival Peek-a-boo es rápido. Si tus ojos son lentos, tu defensa será lenta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-4 rounded border-t-4 border-niko-lime">
                    <strong className="text-white block mb-2 text-lg">1. Drill de la Moneda</strong>
                    <p className="text-sm text-gray-400">
                        Coloca una moneda en el dorso de tu mano extendida. Lánzala levemente y atrápala con la MISMA mano antes de que caiga (gesto de agarre/jab).
                        <br/><span className="text-niko-lime font-bold">Objetivo: 20 seguidas sin fallar con cada mano.</span>
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded border-t-4 border-niko-lime">
                    <strong className="text-white block mb-2 text-lg">2. Enfoque Periférico</strong>
                    <p className="text-sm text-gray-400">
                        Mira un punto fijo en la pared. Sin mover los ojos, intenta identificar objetos en los extremos de tu visión. Lanza jabs a esos objetos "invisibles".
                        <br/><span className="text-niko-lime font-bold">3 minutos.</span>
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded border-t-4 border-niko-lime">
                    <strong className="text-white block mb-2 text-lg">3. Pelota de Tenis (Rebote)</strong>
                    <p className="text-sm text-gray-400">
                        Lanza una pelota de tenis contra la pared a corta distancia. Esquívala (movimiento de cabeza) o atrápala.
                        <br/><span className="text-niko-lime font-bold">Simula sus golpes rectos.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const RoadworkProtocol = () => (
    <div className="bg-niko-card p-6 rounded-xl border-l-4 border-niko-lime shadow-2xl mb-12">
        <h3 className="text-2xl text-white font-heading mb-4 flex items-center">
            <i className="fas fa-person-running text-niko-lime mr-3"></i> 
            Protocolo de Cardio "Pulmones de Acero" (AM - Mañanas)
        </h3>
        <p className="text-gray-400 text-sm mb-4">
            Para vencer al estilo Tyson, necesitas moverte 12 rounds sin parar. Si te paras, te noquea.
            <strong> Realiza esto al despertar, separado del entrenamiento de fuerza.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded">
                <strong className="text-niko-lime block mb-1">LUNES / MIÉRCOLES</strong>
                <p className="text-sm text-white">Carrera de Fondo (LSD)</p>
                <p className="text-xs text-gray-400">5-7 Kilómetros a ritmo constante. Enfócate en respiración nasal.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
                <strong className="text-niko-lime block mb-1">MARTES / JUEVES</strong>
                <p className="text-sm text-white">Intervalos "Round System"</p>
                <p className="text-xs text-gray-400">Correr 3 min RÁPIDO / 1 min Trote suave. Repetir x 6 veces.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
                <strong className="text-niko-lime block mb-1">SÁBADO</strong>
                <p className="text-sm text-white">Sprints en Cuesta</p>
                <p className="text-xs text-gray-400">Busca una pendiente. 10 Sprints de 15 segundos a MÁXIMA velocidad. Camina al bajar.</p>
            </div>
        </div>
    </div>
);

const OverloadGuide = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-cyan shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-niko-cyan text-6xl font-heading">VOL</div>
            <h3 className="text-2xl text-white font-heading mb-4 flex items-center">
                <i className="fas fa-layer-group text-niko-cyan mr-3"></i> 
                Sobrecarga FASE 1: <span className="text-niko-cyan ml-2">MÉTODO CENTURIÓN (Modificado)</span>
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
                <div className="bg-gray-800/50 p-3 rounded border-l-2 border-niko-cyan">
                    <strong className="text-white block mb-1">El Protocolo 35+ (Flexiones)</strong>
                    Como tu max es 35, no hagas series al fallo siempre. 
                    <strong> Haz 5 series de 20 repeticiones</strong> con descanso corto (45 seg). Acumula 100 reps perfectas.
                </div>
                <div className="bg-gray-800/50 p-3 rounded border-l-2 border-niko-cyan">
                    <strong className="text-white block mb-1">EMOM de Volumen</strong>
                    Pon un reloj. Al minuto 0:00 haz 10-12 flexiones. Descansa el resto del minuto. Repite por 10-15 minutos. Volumen fácil sin quemarte.
                </div>
            </div>
        </div>

        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-red shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-niko-red text-6xl font-heading">INT</div>
            <h3 className="text-2xl text-white font-heading mb-4 flex items-center">
                <i className="fas fa-fire text-niko-red mr-3"></i> 
                Sobrecarga FASE 2: <span className="text-niko-red ml-2">POTENCIA EXPLOSIVA</span>
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
                <div className="bg-gray-800/50 p-3 rounded border-l-2 border-niko-red">
                    <strong className="text-white block mb-1">Piernas de Acero (100 Sentadillas)</strong>
                    Ya tienes resistencia. Ahora haz <strong>Sentadillas con Salto (Jump Squats)</strong>.
                    Haz series de 15 saltos MAXIMOS. Descansa. Repite.
                </div>
                <div className="bg-gray-800/50 p-3 rounded border-l-2 border-niko-red">
                    <strong className="text-white block mb-1">Core de Combate (60 Abs)</strong>
                    Cambia a <strong>L-Sit Holds</strong> o Elevación de piernas. El objetivo no es doblarse, es mantener la tensión.
                </div>
            </div>
        </div>
    </div>
);

const BrutePowerLab = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Laboratorio de Potencia Bruta <span className="text-gray-500">(Fuerza x Velocidad)</span></h2>
        <p className="text-center text-gray-400 mb-6">Ejercicios diseñados para maximizar la explosividad con equipamiento limitado.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Devil Press */}
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-niko-red shadow-lg">
                <h3 className="text-2xl text-niko-red font-heading mb-3 flex items-center">
                    <i className="fas fa-biohazard mr-2"></i> DEVIL PRESS (Mancuerna/Mochila)
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                    La fusión definitiva de Burpee + Snatch. Trabaja todo el cuerpo en un solo movimiento explosivo.
                </p>
                <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4">
                    <li>Haz un Burpee con las manos sobre las mancuernas.</li>
                    <li>Al subir, balancea las mancuernas entre las piernas y elévalas sobre la cabeza en un solo movimiento (Swing/Snatch).</li>
                    <li><strong>Dosis:</strong> 5 series de 10 repeticiones.</li>
                </ul>
            </div>

            {/* Broad Jumps */}
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-niko-cyan shadow-lg">
                <h3 className="text-2xl text-niko-cyan font-heading mb-3 flex items-center">
                    <i className="fas fa-frog mr-2"></i> SALTO HORIZONTAL (Broad Jump)
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                    Potencia de piernas pura sin carga axial. Vital para las entradas y salidas rápidas (KATA 6).
                </p>
                <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4">
                    <li>Posición de sentadilla media.</li>
                    <li>Explota hacia ADELANTE lo más lejos posible.</li>
                    <li>Aterriza suave y resetea. No rebotes. Cada salto es al 100%.</li>
                    <li><strong>Dosis:</strong> 5 series de 5 saltos máximos.</li>
                </ul>
            </div>

            {/* Clean & Jerk Unilateral */}
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-niko-amber shadow-lg">
                <h3 className="text-2xl text-niko-amber font-heading mb-3 flex items-center">
                    <i className="fas fa-dumbbell mr-2"></i> CLEAN & JERK UNILATERAL
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                    Movimiento olímpico adaptado. Enseña a transferir fuerza del suelo al puño.
                </p>
                <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4">
                    <li>Mancuerna en el suelo. Espalda recta.</li>
                    <li>Tira explosivamente (Clean) hasta el hombro.</li>
                    <li>Usa las piernas para empujar el peso sobre la cabeza (Jerk).</li>
                    <li><strong>Dosis:</strong> 4 series de 8 reps por brazo.</li>
                </ul>
            </div>

            {/* Backpack Slams */}
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-niko-lime shadow-lg">
                <h3 className="text-2xl text-niko-lime font-heading mb-3 flex items-center">
                    <i className="fas fa-meteor mr-2"></i> SLAM DE MOCHILA
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                    Potencia de core explosiva (Flexión de tronco). Simula la defensa y el golpeo descendente.
                </p>
                <ul className="text-xs text-gray-400 space-y-2 list-disc pl-4">
                    <li>Usa una mochila resistente o golpea sobre un colchón/almohada.</li>
                    <li>Eleva la carga sobre la cabeza extendiéndote totalmente.</li>
                    <li>Azótala contra el suelo con toda tu fuerza usando el abdomen.</li>
                    <li><strong>Dosis:</strong> 4 series de 15 repeticiones.</li>
                </ul>
            </div>
        </div>
    </section>
);

const CubanBoxingSchool = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Escuela Cubana Autodidacta <span className="text-niko-cyan">(La Danza del Fantasma)</span></h2>
        <p className="text-center text-gray-400 mb-6">El arte de pegar y no ser pegado. Ritmo, distancia y conciencia espacial para entrenar solo.</p>
        
        <div className="grid grid-cols-1 gap-8">
            {/* Sombra con Espejo */}
            <div className="bg-niko-card p-6 rounded-xl border-l-4 border-niko-cyan shadow-xl">
                <h3 className="text-2xl text-white font-heading mb-4 border-b border-gray-700 pb-2"><i className="fas fa-person-rays mr-2"></i> I. Sombra con Espejo (Conciencia Espacial)</h3>
                <div className="space-y-4">
                     <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-cyan block mb-1 text-lg">Ronda 1: La Defensa Reflejada</strong>
                        <p className="text-sm text-gray-300">Usa tu reflejo como rival. Lanza golpe -> <strong>Paso Atrás milimétrico</strong>. <br/>¿Estás centrado? ¿Pierdes verticalidad? Corrige tu postura en tiempo real.</p>
                    </div>
                     <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-cyan block mb-1 text-lg">Ronda 2: El Cuadrado Prohibido</strong>
                        <p className="text-sm text-gray-300">Pon 4 objetos formando un cuadrado pequeño. Muévete por los bordes. <strong>NUNCA pises dentro</strong>. Simula escapar de una esquina. Solo jabs y salidas laterales.</p>
                    </div>
                     <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-cyan block mb-1 text-lg">Ronda 3: Ritmo Sincopado</strong>
                        <p className="text-sm text-gray-300">Lento... Lento... <strong>¡EXPLOSIÓN! (1-2)</strong> -> Salida inmediata. Juega con el tiempo. Finta lento, ataca rápido.</p>
                    </div>
                </div>
            </div>

            {/* Saco Pesado */}
            <div className="bg-niko-card p-6 rounded-xl border-l-4 border-niko-red shadow-xl">
                <h3 className="text-2xl text-white font-heading mb-4 border-b border-gray-700 pb-2"><i className="fas fa-sack-dollar mr-2"></i> II. Saco: Entrar y Salir</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-red block mb-1">El Jab Medidor</strong>
                        <p className="text-sm text-gray-400">Golpea y paso atrás inmediato. El saco NO debe tocarte al volver balanceándose. Controla la distancia.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-red block mb-1">Golpe y Ángulo</strong>
                        <p className="text-sm text-gray-400">Golpe de poder -> Pivote 90º. No te quedes mirando tu obra. Crea un ángulo nuevo.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-red block mb-1">Combos de Precisión</strong>
                        <p className="text-sm text-gray-400">Pon cinta adhesiva en el saco. Golpea SOLO en las marcas. Precisión {'>'} Fuerza bruta.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                        <strong className="text-niko-red block mb-1">Contraste</strong>
                        <p className="text-sm text-gray-400">30s baile suave alrededor / 15s fuego total y descarga. Repite 4 veces por round.</p>
                    </div>
                </div>
            </div>

            {/* Acondicionamiento Pies */}
             <div className="bg-niko-card p-6 rounded-xl border-l-4 border-niko-lime shadow-xl">
                <h3 className="text-2xl text-white font-heading mb-4 border-b border-gray-700 pb-2"><i className="fas fa-shoe-prints mr-2"></i> III. Piernas de Acero (Circuito)</h3>
                <p className="text-sm text-gray-400 mb-4 bg-gray-900/50 p-2 rounded">Realiza 3 Rondas (1 min trabajo / 30s descanso). Tus piernas son tu vida.</p>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center"><i className="fas fa-bolt text-niko-lime mr-3"></i> <div><strong className="text-white">1. Pogo Jumps:</strong> Rebote constante solo con tobillos. Mínimo contacto con el suelo.</div></li>
                    <li className="flex items-center"><i className="fas fa-forward text-niko-lime mr-3"></i> <div><strong className="text-white">2. Steps Rápidos:</strong> Patrón 1-2-1-2 en el sitio a máxima velocidad. Imagina el suelo ardiendo.</div></li>
                    <li className="flex items-center"><i className="fas fa-left-right text-niko-lime mr-3"></i> <div><strong className="text-white">3. Toque y Salida:</strong> Toca un objeto en suelo con pie delantero, paso atrás explosivo. Simula entrar en rango y escapar.</div></li>
                </ul>
            </div>
        </div>
    </section>
);

const FootworkDrills = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Maestría de Pies: "El Fantasma" <span className="text-niko-cyan">(Drills de Ángulos)</span></h2>
        
        {/* LOMACHENKO SPECIAL SECTION */}
        <div className="bg-gradient-to-r from-blue-900/40 to-niko-card p-6 rounded-xl border border-blue-500 mb-8 shadow-2xl">
            <h3 className="text-2xl text-blue-400 font-heading mb-4 flex items-center">
                <i className="fas fa-microchip mr-2"></i> PROTOCOLO MATRIX (ESTILO LOMACHENKO)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                    <strong className="text-white block mb-1">La Salida Diagonal (Teletransporte)</strong>
                    <p className="text-sm text-gray-400">
                        En lugar de retroceder, da un paso DIAGONAL hacia afuera de su pie delantero. Pivota 90º. Ahora estás a su espalda/costado.
                        <br/><strong>Drill:</strong> Pon una silla. Pasa tu pie derecho por fuera de la pata de la silla, pivota y queda mirando al respaldo.
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                    <strong className="text-white block mb-1">El Péndulo Infinito</strong>
                    <p className="text-sm text-gray-400">
                        Salto pequeño adelante-atrás constante. Nunca los dos pies planos. Te permite cambiar de dirección instantáneamente.
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Drill 1 */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-arrows-up-down-left-right text-niko-cyan mr-2"></i> El Cuadrante</h4>
                <p className="text-xs text-gray-400 mb-2">Dibuja una cruz en el suelo. Salta entre cuadrantes (1-2-3-4) sin cruzar pies. Mejora agilidad y equilibrio.</p>
                <span className="text-niko-cyan text-xs font-bold">3 Minutos seguidos.</span>
            </div>
            {/* Drill 2 */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-turn-up text-niko-cyan mr-2"></i> La Salida Loma (Paso en L)</h4>
                <p className="text-xs text-gray-400 mb-2">El anti-Tyson definitivo. Paso atrás, luego paso lateral a 90 grados. No retrocedas recto, sal en L.</p>
                <span className="text-niko-cyan text-xs font-bold">100 Repeticiones por lado.</span>
            </div>
            {/* Drill 3 */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-rotate text-niko-cyan mr-2"></i> Pivote 180º</h4>
                <p className="text-xs text-gray-400 mb-2">Simula estar contra las cuerdas. Pivota sobre tu pie delantero para intercambiar posición con el "rival".</p>
                <span className="text-niko-cyan text-xs font-bold">50 Pivotes perfectos.</span>
            </div>
            {/* Drill 4 */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-person-walking-arrow-right text-niko-cyan mr-2"></i> Mirror Drill</h4>
                <p className="text-xs text-gray-400 mb-2">Coloca 2 botellas. Muévete lateralmente entre ellas. Cuando llegues a una, lanza un Check Hook y cambia.</p>
                <span className="text-niko-cyan text-xs font-bold">4 Rounds de 2 minutos.</span>
            </div>
            {/* Drill 5: Triangle Step */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-play text-niko-cyan mr-2"></i> El Paso en V (Triángulo)</h4>
                <p className="text-xs text-gray-400 mb-2">Dibuja una V. Avanza al vértice (ataque), y sal diagonalmente hacia atrás por uno de los brazos de la V. Cambia de lado.</p>
                <span className="text-niko-cyan text-xs font-bold">50 Repeticiones alternas.</span>
            </div>
            {/* Drill 6: Satellite Orbit */}
            <div className="bg-niko-card p-4 rounded-lg border-t-4 border-niko-cyan shadow-lg hover:bg-gray-800 transition-colors">
                <h4 className="text-white font-bold mb-2 flex items-center"><i className="fas fa-circle-notch text-niko-cyan mr-2"></i> Órbita Satelital</h4>
                <p className="text-xs text-gray-400 mb-2">Usa tu mochila como referencia (el rival). Gira lateralmente alrededor de ella lanzando golpes, nunca cruces los pies. Cambia dirección repentinamente.</p>
                <span className="text-niko-cyan text-xs font-bold">3 Rounds de 2 minutos.</span>
            </div>
        </div>
    </section>
);

const KataPowerGuide = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Biblioteca de Potencia Bruta <span className="text-niko-lime">(Distribución por KATA)</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* KATA 1: Velocidad */}
            <div className="bg-niko-card border-l-4 border-niko-cyan p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-cyan font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="1" /> Jab de Cuchilla
                </h4>
                <p className="text-gray-500 text-xs mb-3">POTENCIA DE EMPUJE RÁPIDO</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Landmine Punch (Simulado)</strong>
                    <p className="text-xs text-gray-400">Apoya una mancuerna/mochila en una esquina. Empújala explosivamente imitando un Jab.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Flexiones Explosivas</strong>
                    <p className="text-xs text-gray-400">Despegar del suelo. Genera la fuerza de salida para el Kata 1.</p>
                </div>
            </div>

            {/* KATA 2: Contra */}
            <div className="bg-niko-card border-l-4 border-niko-cyan p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-cyan font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="2" /> Uppercut Power
                </h4>
                <p className="text-gray-500 text-xs mb-3">POTENCIA VERTICAL (PIERNAS)</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Thruster Unilateral</strong>
                    <p className="text-xs text-gray-400">Sentadilla profunda + Press de hombro con mancuerna al subir. Simula levantar al rival con el golpe.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Dumbbell Uppercuts Pesados</strong>
                    <p className="text-xs text-gray-400">Series cortas (6-8 reps) con máximo peso posible.</p>
                </div>
            </div>

            {/* KATA 3: Estructura */}
            <div className="bg-niko-card border-l-4 border-niko-red p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-red font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="3" /> Blindaje
                </h4>
                <p className="text-gray-500 text-xs mb-3">SOLIDEZ DE NÚCLEO</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Caminata de Granjero (Unilateral)</strong>
                    <p className="text-xs text-gray-400">Camina con la mochila pesada en UNA sola mano. Evita inclinarte. Core de acero.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Plancha con Peso</strong>
                    <p className="text-xs text-gray-400">Mochila en la espalda. Aguanta 1 minuto.</p>
                </div>
            </div>

            {/* KATA 4: Space Control */}
            <div className="bg-niko-card border-l-4 border-niko-red p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-red font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="4" /> El Muro (Framing)
                </h4>
                <p className="text-gray-500 text-xs mb-3">FUERZA DE EMPUJE ESTÁTICA</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Floor Press Unilateral</strong>
                    <p className="text-xs text-gray-400">Press de pecho en el suelo. Codo pegado. Fuerza bruta de tríceps.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Wall Push Isométrico</strong>
                    <p className="text-xs text-gray-400">Empuja la pared con máxima fuerza por 10 segs. Descansa. Repite.</p>
                </div>
            </div>

            {/* KATA 5: Volumen */}
            <div className="bg-niko-card border-l-4 border-niko-amber p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-amber font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="5" /> Tormenta
                </h4>
                <p className="text-gray-500 text-xs mb-3">POTENCIA ANAERÓBICA</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Burpees + Salto de Rodillas</strong>
                    <p className="text-xs text-gray-400">Al saltar, lleva rodillas al pecho. Explosividad total bajo fatiga.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Man Makers</strong>
                    <p className="text-xs text-gray-400">Flexión, remo, sentadilla, press. El rey del acondicionamiento.</p>
                </div>
            </div>

            {/* KATA 6: Ángulos */}
            <div className="bg-niko-card border-l-4 border-niko-amber p-5 rounded-lg shadow-lg">
                <h4 className="text-niko-amber font-heading text-2xl flex items-center mb-2">
                    <KataIcon num="6" /> Ángulos Explosivos
                </h4>
                <p className="text-gray-500 text-xs mb-3">POTENCIA ROTACIONAL</p>
                <div className="bg-gray-800 p-3 rounded mb-2">
                    <strong className="text-white block text-sm">Sentadilla con Salto 180º</strong>
                    <p className="text-xs text-gray-400">Salta y gira 180 grados en el aire. Aterriza en sentadilla. Fuerza para cambiar de dirección.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                    <strong className="text-white block text-sm">Zancada con Salto (Plyo Lunge)</strong>
                    <p className="text-xs text-gray-400">Cambia de pierna en el aire. Potencia unilateral para salidas rápidas.</p>
                </div>
            </div>

        </div>
    </section>
);

const CombatCalisthenics = () => (
    <section className="mb-12">
        <h2 className="text-4xl text-white text-center mb-8 font-heading">Arsenal de Calistenia de Combate <span className="text-niko-red">(Sin Gimnasio)</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pushups Variations */}
            <div className="bg-niko-card p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl text-niko-cyan font-heading mb-4 border-b border-gray-600 pb-2">
                    <i className="fas fa-hand-fist mr-2"></i> Variantes de Empuje (Framing)
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="bg-niko-cyan/20 p-2 rounded mr-3"><i className="fas fa-arrow-up text-niko-cyan"></i></div>
                        <div>
                            <strong className="text-white">Flexiones Explosivas (Requisito: 35+ Max)</strong>
                            <p className="text-sm text-gray-400">Como tu max es 35, haz sets cortos de 10-12 reps pero MÁXIMA explosividad.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-niko-cyan/20 p-2 rounded mr-3"><i className="fas fa-arrows-left-right text-niko-cyan"></i></div>
                        <div>
                            <strong className="text-white">Flexiones Archer</strong>
                            <p className="text-sm text-gray-400">Fuerza unilateral. Prepara tu brazo para mantenerlo a raya con una mano (Stiff Arm).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legs & Core Power */}
            <div className="bg-niko-card p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl text-niko-red font-heading mb-4 border-b border-gray-600 pb-2">
                    <i className="fas fa-bolt mr-2"></i> Piernas y Cuello
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="bg-niko-red/20 p-2 rounded mr-3"><i className="fas fa-frog text-niko-red"></i></div>
                        <div>
                            <strong className="text-white">Sentadillas con Salto (Max: 100)</strong>
                            <p className="text-sm text-gray-400">Al hacer 100 normales, cambia a SALTOS. Haz series de 20 saltos. Transforma resistencia en muelles.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-niko-red/20 p-2 rounded mr-3"><i className="fas fa-dumbbell text-niko-red"></i></div>
                        <div>
                            <strong className="text-white">Neck Curls (Mochila)</strong>
                            <p className="text-sm text-gray-400">Si un golpe de estilo Tyson te conecta, tu cuello es lo único que te salvará del KO.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState("");
    const [isFightTime, setIsFightTime] = useState(false);

    useEffect(() => {
        // Target: Jan 26, 2026
        const fightDate = new Date("Jan 26, 2026 00:00:00").getTime();
        
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = fightDate - now;

            if (distance < 0) {
                setIsFightTime(true);
                setTimeLeft("¡PELEA EN CURSO! 🥊");
                clearInterval(interval);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft(`${days}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M ${String(seconds).padStart(2, '0')}S`);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`text-center p-6 rounded-xl shadow-2xl mb-8 border transition-colors duration-500 ${isFightTime ? 'bg-niko-lime/20 border-niko-lime' : 'bg-niko-red/20 border-niko-red'}`}>
            <h2 className={`text-3xl font-heading mb-3 ${isFightTime ? 'text-niko-lime' : 'text-niko-red'}`}>Día D: La Cuenta Regresiva</h2>
            <div className={`text-4xl md:text-6xl font-heading tracking-widest ${isFightTime ? 'text-niko-lime' : 'text-white'}`}>
                {timeLeft}
            </div>
            <p className="text-sm text-gray-400 mt-2">Objetivo: 26 de Enero 2026 (Vs. Estilo Peek-a-boo)</p>
        </section>
    );
};

// --- Main App Component ---

const App = () => {
    return (
        <div className="antialiased min-h-screen bg-niko-bg text-slate-100 font-body">
            {/* Header */}
            <header className="bg-niko-card shadow-lg border-b border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-widest text-niko-cyan font-heading">ZERO NIKO</h1>
                        <p className="text-xs text-gray-400 tracking-wider">PROTOCOLO ANTI-PEEKABOO (EL MATADOR)</p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                <Countdown />

                {/* NEW: USER STATS CALIBRATION */}
                <UserStatsCalibration />

                {/* Section 1: Analysis */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-5xl text-white mb-4 font-heading">La Amenaza: <span className="text-niko-red">ESTILO PEEK-A-BOO</span></h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Tu rival es un Fajador estilo Mike Tyson. Manos altas, movimiento de cabeza constante (Bob & Weave) y explosividad en corta distancia. <strong>NO HABRÁ CLINCH</strong>, así que no puedes abrazarlo para frenarlo.
                        </p>
                        <div className="bg-niko-card p-6 rounded-lg border-l-4 border-niko-cyan shadow-lg">
                            <h3 className="text-2xl text-niko-cyan mb-2 font-heading">La Contramedida: "El Matador"</h3>
                            <p className="text-gray-400 text-sm italic">
                                "Si retrocedes en línea recta, estás muerto. Debes usar ángulos laterales. Cuando él baja la cabeza para entrar, el UPPERCUT es tu arma letal. Cuando se acerca demasiado, usa FRAMES (empujones rígidos) para resetear."
                            </p>
                        </div>
                    </div>
                    <div className="bg-niko-card p-4 rounded-xl shadow-xl border border-gray-700">
                        <div className="mb-2">
                            <h3 className="text-2xl text-white font-heading">Perfil de Atributos</h3>
                            <p className="text-xs text-gray-400">Comparativa: Fajador Peek-a-boo vs. Zero Niko</p>
                        </div>
                        <AttributesRadarChart />
                        <p className="mt-4 text-sm text-gray-400 border-t border-gray-700 pt-2">
                            <strong className="text-niko-cyan">Análisis:</strong> Debes superarlo en <strong>Velocidad de Pies</strong> (para salir) y <strong>Estamina</strong> (el estilo Peek-a-boo cansa mucho).
                        </p>
                    </div>
                </section>

                <div className="border-t border-gray-700 my-12" />

                {/* Section: Victory Condition */}
                <section>
                    <h2 className="text-4xl text-white text-center mb-8 font-heading">Vía de <span className="text-niko-cyan">Victoria</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-lime shadow-2xl">
                            <h3 className="text-2xl text-niko-lime mb-2 font-heading">El Plan Maestro</h3>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li className="flex items-start"><span className="text-niko-lime mr-2">✓</span> <span><strong>Uppercut de Intercepción:</strong> El golpe clave. Cuando él se agacha, tú disparas verticalmente.</span></li>
                                <li className="flex items-start"><span className="text-niko-lime mr-2">✓</span> <span><strong>El "Olé":</strong> Nunca retrocedas dos pasos. Uno atrás, uno al lado (Pivot). Haz que pase de largo.</span></li>
                                <li className="flex items-start"><span className="text-niko-lime mr-2">✓</span> <span><strong>Check Hook:</strong> Gancho de izquierda mientras giras para salir.</span></li>
                            </ul>
                        </div>
                        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-cyan shadow-2xl">
                            <h3 className="text-2xl text-niko-cyan mb-2 font-heading">Peleadores a Estudiar</h3>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li className="flex items-start"><span className="text-niko-cyan mr-2">→</span> <span><strong>Buster Douglas (vs Tyson):</strong> Uso magistral del Jab, el Uppercut y el movimiento lateral.</span></li>
                                <li className="flex items-start"><span className="text-niko-cyan mr-2">→</span> <span><strong>Lennox Lewis:</strong> Control de distancia y Uppercut brutal contra bajitos explosivos.</span></li>
                            </ul>
                        </div>
                        <div className="bg-niko-card p-6 rounded-xl border-t-4 border-niko-red shadow-2xl">
                            <h3 className="text-2xl text-niko-red mb-2 font-heading">Perfil de Sparring Ideal</h3>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li className="flex items-start"><span className="text-niko-red mr-2">⊗</span> <span><strong>Arquetipo:</strong> Boxeador bajo, fuerte, que avanza moviendo la cabeza constantemente.</span></li>
                                <li className="flex items-start"><span className="text-niko-red mr-2">⊗</span> <span><strong>Instrucción:</strong> "Intenta cortarme el ring y arráncame la cabeza con volados".</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* NEW ELITE PROTOCOL SECTION */}
                <div className="border-t border-gray-700 my-12" />
                <section>
                    <h2 className="text-4xl text-white text-center mb-8 font-heading">PROTOCOLOS DE ÉLITE <span className="text-niko-amber">(ANTI-PEEKABOO)</span></h2>
                    <EliteProtocol />
                </section>

                <div className="border-t border-gray-700 my-12" />
                
                {/* CUBAN BOXING SCHOOL - AUTODIDACTA (ADDED) */}
                <CubanBoxingSchool />

                <div className="border-t border-gray-700 my-12" />

                {/* NEW VISION DRILLS SECTION */}
                <VisionReflexDrills />

                <div className="border-t border-gray-700 my-12" />

                {/* NEW ROADWORK SECTION */}
                <RoadworkProtocol />

                {/* Phase 1 */}
                <section>
                    <div className="mb-8">
                        <span className="text-niko-cyan font-heading text-xl">FASE 1</span>
                        <h2 className="text-4xl text-white font-heading">Mantener la Distancia <span className="text-gray-500 text-2xl">(Jab y Salida)</span></h2>
                        <p className="text-gray-300 max-w-3xl mt-2 flex flex-col md:block">
                            <span>El objetivo es frustrar su entrada.</span>
                            <span className="mt-2 md:mt-0 inline-flex items-center flex-wrap"><KataIcon num="1" /> KATA 1 (Jab) y <KataIcon num="6" /> KATA 6 (Ángulos) son tu primera línea de defensa.</span>
                        </p>
                    </div>

                    <AccordionItem title={<><KataIcon num="1" /> KATA 1: Viento Cortante (Jab y Pivote)</>} colorClass="border-niko-cyan">
                        <ComboList items={[
                            { title: "1. Fuego Rápido", desc: "Jab-Jab-Cross-Step Out (Manténlo lejos)." },
                            { title: "2. Check Hook", desc: "Gancho de izquierda mientras pivotas 90 grados a tu izquierda. (Vital vs Fajador)." },
                            { title: "3. Stop-Hit", desc: "Jab fuerte al pecho/hombro para frenar su avance en seco." },
                            { title: "4. Burlador", desc: "Jab-Cross-Pivot Rápido (para salir de las cuerdas)." },
                            { title: "5. Doble Evasión", desc: "Jab-Slip-Roll-Jab de castigo." },
                            { title: "6. El Matador", desc: "Paso atrás-Paso lateral-Cross." },
                        ]} />
                    </AccordionItem>

                    <AccordionItem title={<><KataIcon num="2" /> KATA 2: El Cazador (Uppercuts y Contras)</>} colorClass="border-niko-cyan">
                         <ComboList items={[
                            { title: "1. Uppercut Asesino", desc: "Él baja la cabeza -> Uppercut de Derecha-Hook Izquierda." },
                            { title: "2. La Trampa", desc: "Finta de Jab (él se agacha)-Uppercut de Derecha." },
                            { title: "3. Contra de Volado", desc: "Bloqueo/Roll bajo su volado-Uppercut-Cross." },
                            { title: "4. Pivot Uppercut", desc: "Pivot-Uppercut de Izquierda (buscando el ángulo ciego)." },
                            { title: "5. Body Snatcher", desc: "Slip a su Jab-Gancho al Hígado (paralízalo)." },
                        ]} />
                    </AccordionItem>
                </section>

                <div className="border-t border-gray-700 my-12" />

                {/* Phase 2 */}
                <section className="bg-gradient-to-r from-niko-card to-niko-bg p-8 rounded-2xl border border-gray-700">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <span className="text-niko-red font-heading text-xl">FASE 2</span>
                            <h2 className="text-4xl text-white mb-4 font-heading">Sobrevivir la Presión</h2>
                            <p className="text-gray-300 mb-4 flex flex-col">
                                <span>Cuando la distancia se cierra, NO HAGAS CLINCH.</span>
                                <span className="mt-1 inline-flex items-center flex-wrap"><KataIcon num="4" />KATA 4 (Framing) y <KataIcon num="3" />KATA 3 (Defensa) te salvarán.</span>
                            </p>
                            
                            <div className="space-y-4">
                                <AccordionItem title={<><KataIcon num="4" /> KATA 4: El Muro (Framing & Shove)</>} colorClass="border-niko-red">
                                    <ComboList items={[
                                        { title: "1. Stiff Arm", desc: "Mano a la cara/hombro del rival. Brazo rígido. No lo dejes entrar." },
                                        { title: "2. Push & Pivot", desc: "Empujón explosivo con dos manos y salida lateral inmediata." },
                                        { title: "3. Frame de Codo", desc: "Si entra mucho, antebrazo horizontal al cuello (Frame) para crear espacio." },
                                        { title: "4. Salida por debajo", desc: "Si te acorrala, empuja, baja nivel y sal por debajo de su gancho." },
                                        { title: "5. Control de Cabeza", desc: "Mano en su frente para redirigir su mirada y movimiento." },
                                    ]} />
                                </AccordionItem>
                                
                                <AccordionItem title={<><KataIcon num="3" /> KATA 3: Hueso de Acero (Defensa)</>} colorClass="border-niko-red">
                                    <ComboList items={[
                                        { title: "1. Shell Guard", desc: "Codos pegados a costillas. Manos a la sien. Protege el cuerpo." },
                                        { title: "2. Absorción", desc: "Exhala fuerte 'SHH' al recibir impacto." },
                                        { title: "3. Shoulder Roll", desc: "Usa el hombro para desviar sus volados de derecha." },
                                    ]} />
                                </AccordionItem>
                            </div>
                        </div>

                        <div className="md:w-2/3 bg-black/20 rounded-xl p-4 border border-gray-700">
                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-xl text-white font-heading">Curva de Drenaje Energético</h3>
                                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">Modelo de 9 Minutos</span>
                            </div>
                            <EnergyLineChart />
                            <p className="text-sm text-gray-400 mt-3">
                                <strong className="text-niko-red">La Zona de Quiebre:</strong> El estilo Peek-a-boo consume muchísima energía. Si sobrevives los primeros 4 rounds y le pegas al cuerpo, en el 5º será tuyo.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="border-t border-gray-700 my-12" />

                {/* Phase 3 */}
                <section>
                    <div className="text-center mb-10">
                        <span className="text-niko-amber font-heading text-xl">FASE 3</span>
                        <h2 className="text-5xl text-white font-heading">Terminación (KATA 5)</h2>
                        <p className="text-gray-400">Cuando deje de mover la cabeza, destrúyelo.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-niko-card p-4 rounded-xl shadow-xl border border-gray-700">
                            <h3 className="text-xl text-white mb-2 pl-2 border-l-4 border-niko-amber font-heading">Ventana de Oportunidad</h3>
                            <p className="text-sm text-gray-400 mb-4 pl-2">Análisis de probabilidad de éxito basado en la frustración del oponente.</p>
                            <OpportunityBubbleChart />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                             <AccordionItem title={<><KataIcon num="5" /> KATA 5: Tormenta (Flurry)</>} colorClass="border-niko-amber">
                                <ComboList items={[
                                    { title: "1. Cadena de Hierro", desc: "Jab-Cross-Hook-Cross-Hook-Upper (6 golpes)." },
                                    { title: "2. Doble Piso", desc: "Cross (cabeza)-Hook (cuerpo)-Cross (cabeza)-Hook (cuerpo)." },
                                    { title: "3. Uppercut Finisher", desc: "Uppercut Izq-Uppercut Der-Hook-Cross." },
                                    { title: "4. Ametralladora", desc: "10 golpes seguidos al cuerpo cuando se cubra." },
                                ]} />
                            </AccordionItem>
                        </div>
                    </div>
                </section>

                <div className="border-t border-gray-700 my-12" />

                {/* Overload Guide (New Section) */}
                <section>
                    <h2 className="text-3xl text-white mb-6 font-heading text-center">Protocolo de <span className="text-niko-lime">Sobrecarga Progresiva</span></h2>
                    <OverloadGuide />
                </section>
                
                <div className="border-t border-gray-700 my-12" />

                {/* NEW SECTION: FOOTWORK DRILLS */}
                <FootworkDrills />

                <div className="border-t border-gray-700 my-12" />
                
                {/* NEW SECTION: POWER BY KATA */}
                <KataPowerGuide />

                {/* NEW SECTION: BRUTE POWER LAB (REQUESTED) */}
                <div className="border-t border-gray-700 my-12" />
                <BrutePowerLab />

                {/* NEW SECTION: COMBAT CALISTHENICS */}
                <div className="border-t border-gray-700 my-12" />
                <CombatCalisthenics />

                {/* Protocol Tables (Enhanced) */}
                <section className="relative">
                    {/* Status Badge */}
                    <div className="absolute top-0 right-0 bg-niko-lime text-niko-bg font-bold px-3 py-1 rounded-bl-xl z-10">
                        ESTADO ACTUAL: ACTIVO
                    </div>
                    
                    <h2 className="text-3xl text-niko-cyan mb-2 font-heading">FASE 1: El Tanque Matador (Volumen & Movilidad)</h2>
                    <p className="text-gray-400 mb-6 font-heading text-xl">01 NOV - 15 DIC (ESTÁS AQUÍ - SEMANA CRÍTICA)</p>
                    <div className="bg-niko-card rounded-xl shadow-xl overflow-x-auto border-2 border-niko-cyan">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="text-sm bg-gray-800 text-niko-cyan border-b border-gray-700">
                                    <th className="p-4 w-1/12">DÍA</th>
                                    <th className="p-4 w-2/12">FOCO PRINCIPAL</th>
                                    <th className="p-4 w-6/12">EJERCICIO Y FINISHER (Calibrado a tus Max)</th>
                                    <th className="p-4 w-3/12">JUSTIFICACIÓN TÁCTICA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700 text-sm">
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">VIERNES</td>
                                    <td className="p-4">Core de Hierro</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">BUY-IN (Entrada):</span> 10 min Cuerda (Salto doble).</div>
                                        <div className="mb-2"><strong>PM: Russian Twists Lastrados:</strong> 4 series x 40 reps (Sobrecarga tus 60 abs).</div>
                                        <div className="mb-2"><strong>PM: Leg Raises:</strong> 4 series al fallo técnico.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Hollow Body Rocks (3 x 1 min) - Tensión isométrica.</div>
                                        <div className="mb-2"><strong>ACCESORIO 2:</strong> Plancha con golpes al abdomen (3 min acumulados).</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Backpack Slams (4 series x 15 reps). Explosividad de Core.</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> 50 Burpees (Sin descanso).</div>
                                    </td>
                                    <td className="p-4">Si te conecta abajo, no te debe doblar.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">SÁBADO</td>
                                    <td className="p-4">Agilidad Lateral y Frame</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">BUY-IN (Entrada):</span> Dot Drill (Puntos en suelo) 10 min.</div>
                                        <div className="mb-2"><span className="text-niko-lime font-bold">AM:</span> 10 Sprints en Cuesta (Máxima Potencia).</div>
                                        <div className="mb-2"><strong>PM: <KataIcon num="6" />Skater Jumps:</strong> Saltos laterales. 4 series x 20 reps.</div>
                                        <div className="mb-2"><strong>PM: <KataIcon num="4" />Wall Push Explosivo:</strong> Déjate caer a la pared y empuja fuerte. 50 reps.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Agility Ladder (Cinta en suelo) - Patrones in/out.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Broad Jumps (Salto Horizontal) (5 series x 5 saltos max).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> 15 mins Sombra solo usando piernas (sin golpear).</div>
                                    </td>
                                    <td className="p-4">Evitar que te acorrale en las cuerdas.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">LUNES</td>
                                    <td className="p-4">Push & Frame (Explosivo)</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">BUY-IN (Entrada):</span> 10 min Cuerda.</div>
                                        <div className="mb-2"><span className="text-niko-lime font-bold">AM:</span> 5km Carrera (Ritmo Medio).</div>
                                        <div className="mb-2"><strong>PM: Dumbbell Floor Press (Pesado):</strong> 4 series x 6-8 reps (80% esfuerzo). Contracción explosiva al subir.</div>
                                        <div className="mb-2"><strong>PM: Flexiones Archer:</strong> Progresión hacia 1 mano. 5 series de 5-8 reps.</div>
                                        <div className="mb-2"><strong>PM: Flexiones EMOM (Basado en 35 Max):</strong> Haz 8-10 flexiones cada minuto x 12 min.</div>
                                        <div className="mb-2"><strong>ACCESORIO (Tríceps):</strong> Fondos entre sillas/bancos (4 series al fallo) + Skullcrushers con mochila.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Devil Press (Burpee + Snatch) (5 series x 10 reps).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Shadowboxing con pesas 2kg (4 asaltos x 3 min).</div>
                                    </td>
                                    <td className="p-4">Mantenerlo a raya con jabs duros y frames.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">MARTES</td>
                                    <td className="p-4">Pull & Uppercut (Potencia)</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">BUY-IN (Entrada):</span> 10 min Cuerda.</div>
                                        <div className="mb-2"><span className="text-niko-lime font-bold">AM:</span> Intervalos 3 min Rápido / 1 min Lento (x6).</div>
                                        <div className="mb-2"><strong>PM: Heavy Dumbbell Rows:</strong> 4 series x 6-8 reps. Pausa arriba y aprieta dorsales.</div>
                                        <div className="mb-2"><strong>PM: <KataIcon num="2" />Dumbbell Uppercuts:</strong> Series de 25 repeticiones pesadas.</div>
                                        <div className="mb-2"><strong>PM: Remo Unilateral (Mochila):</strong> 100 reps por brazo.</div>
                                        <div className="mb-2"><strong>ACCESORIO (Hombros/Brazos):</strong> Pájaros (Rear Delt Flys) para postura + Curl Zottman (Antebrazo) 4x15.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Clean & Jerk Unilateral (4 series x 8 reps/brazo).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Curl Martillo (Cuello/Agarre) al fallo.</div>
                                    </td>
                                    <td className="p-4">Levantarle la cabeza cuando se agache.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-cyan">MIÉRCOLES</td>
                                    <td className="p-4">Movimiento Matador (TÉCNICA PURA)</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">AM:</span> 45 min Caminata Rápida (Recuperación Activa).</div>
                                        <div className="mb-2 text-niko-cyan"><strong>DRILLS OBLIGATORIOS: <KataIcon num="6" /> "El Cuadrante" (3 min) + "Salida Loma" (100 reps).</strong></div>
                                        <div className="mb-2 text-white bg-gray-700/50 p-2 rounded border-l-2 border-niko-cyan"><strong>PROTOCOL CUBANO:</strong> Sombra en Espejo (Ronda 1-3). Defensa Reflejada y Ritmo Sincopado.</div>
                                        <div className="mb-2"><strong>PM: Drill de la Cuerda (Slip Line):</strong> 20 mins de esquivas rotativas.</div>
                                        <div className="mb-2"><strong>PM: Sentadilla Búlgara:</strong> 4 series x 12 (Pesada). Transforma tus 100 reps en potencia real.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Maze Drill (Laberinto de cinta en el suelo) para precisión.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Backpack Slams (Variante Rotacional) (4 series x 12 reps).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Saltar la cuerda 15 mins.</div>
                                    </td>
                                    <td className="p-4">Hoy te conviertes en un fantasma. Pivota y sal.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">JUEVES</td>
                                    <td className="p-4">Sparring Visualización</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-lime font-bold">BUY-IN (Entrada):</span> 10 min Cuerda.</div>
                                        <div className="mb-2"><span className="text-niko-lime font-bold">AM:</span> Intervalos HIIT (Tabata 4 mins).</div>
                                        <div className="mb-2"><strong>PM: Sombra Anti-Tyson:</strong> Imagina que te embiste. Frena, gira, golpea.</div>
                                        <div className="mb-2"><strong>PM: Flexiones Spiderman:</strong> Conectar rodilla a codo. 4 series al fallo.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Neck Curls con toalla/mano (4x25). Vital.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Clean & Jerk Unilateral (4 series x 6 reps pesado).</div>
                                    </td>
                                    <td className="p-4">Velocidad de reacción.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-lime">DOMINGO</td>
                                    <td className="p-4">Sombra Técnica (6 Rounds)</td>
                                    <td className="p-4">
                                        <div className="mb-2"><strong>PM: Maratón de Sombra (Fase 1):</strong> 6 Rounds de 3 minutos. (1 min descanso).</div>
                                        <div className="mb-2"><strong>Foco:</strong> Perfección técnica, sin fatiga excesiva. Visualiza al rival fallando.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Isometría Máxima (Empuje de Pared) 5 x 30seg.</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>CASH-OUT (Salida):</strong> Estiramiento profundo de cadera y hombros (20 min).</div>
                                    </td>
                                    <td className="p-4">Programación mental de los KATAS sin impacto articular.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                 <section className="mt-8 opacity-75 hover:opacity-100 transition-opacity">
                    <h2 className="text-3xl text-niko-red mb-2 font-heading">FASE 2: Caos y Potencia (Lastre Pesado)</h2>
                    <p className="text-gray-400 mb-6 font-heading text-xl">16 DIC - 26 ENE (FUTURO PRÓXIMO)</p>
                    <div className="bg-niko-card rounded-xl shadow-xl overflow-x-auto">
                         <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="text-sm bg-gray-800 text-niko-red border-b border-gray-700">
                                    <th className="p-4 w-1/12">DÍA</th>
                                    <th className="p-4 w-2/12">FOCO PRINCIPAL</th>
                                    <th className="p-4 w-6/12">EJERCICIO Y FINISHER</th>
                                    <th className="p-4 w-3/12">JUSTIFICACIÓN TÁCTICA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700 text-sm">
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">JUEVES</td>
                                    <td className="p-4"><KataIcon num="6" /> KATA 6 (Caos)</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-amber font-bold">BUY-IN:</span> 15 min Cuerda (Ritmo alto).</div>
                                        <div className="mb-2"><span className="text-niko-amber font-bold">AM:</span> Intervalos "Round de Campeonato" (3 min x 12).</div>
                                        <div className="mb-2"><strong>PM: Simulación "Tiburón":</strong> 8 asaltos de sombra. Descanso en sentadilla isométrica.</div>
                                        <div className="mb-2"><strong>PM: Man Makers:</strong> 50 repeticiones por tiempo. (El ejercicio más duro).</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Thrusters con Mochila (Sentadilla + Press) 4x15.</div>
                                        <div className="mb-2"><strong>ACCESORIO 2:</strong> Entrenamiento de Cuello con Toalla (Resistencia isométrica 4 direcciones).</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Devil Press (5 series x 12 reps).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> 100 Jumping Jacks con mochila puesta.</div>
                                    </td>
                                    <td className="p-4">Acostumbrarse a pelear ahogado.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">VIERNES</td>
                                    <td className="p-4">Resistencia Extrema</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-amber font-bold">AM:</span> 8km Carrera ritmo medio-alto.</div>
                                        <div className="mb-2"><strong>PM: <KataIcon num="3" />Circuito Espartano (x12 Rondas):</strong> 10 Burpees, 10 Sentadillas, 10 Abs, 10 Flexiones. SIN DESCANSO.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Sprawl Training (Defensa de derribo/clinch) - 50 reps.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Plancha Lateral (Oblicuos) 4 x 45seg por lado.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Backpack Slams (5 series x 20 reps).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Golpes al cuerpo estáticos (recibir) o Abs con peso 5 mins.</div>
                                    </td>
                                    <td className="p-4">Romper su voluntad por cansancio.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">SÁBADO</td>
                                    <td className="p-4">Potencia Lateral</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-amber font-bold">AM:</span> Sprints en cuesta (15 repeticiones).</div>
                                        <div className="mb-2 text-white bg-gray-700/50 p-2 rounded border-l-2 border-niko-red"><strong>PIERNAS DE ACERO:</strong> Circuito Cubano (3 Rondas). Pogo Jumps y Steps Rápidos.</div>
                                        <div className="mb-2 text-niko-cyan"><strong>DRILLS AVANZADOS: Pivote 180º (50 reps) y Mirror Drill (4 rounds).</strong></div>
                                        <div className="mb-2"><strong>PM: <KataIcon num="6" />Sentadilla con Salto 180º:</strong> 4 series x 15 reps. Potencia de giro.</div>
                                        <div className="mb-2"><strong>PM: Cuello Lastrado:</strong> Series de 25 repeticiones (controladas) con peso.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Box Jumps (Saltos a superficie elevada/escalón) 5x10.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Broad Jumps c/ Peso (5 series x 5).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Sprints de 50 metros x 10.</div>
                                    </td>
                                    <td className="p-4">Salir de la zona de presión.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">LUNES</td>
                                    <td className="p-4">Potencia Pliométrica</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-amber font-bold">BUY-IN:</span> 15 min Cuerda.</div>
                                        <div className="mb-2"><span className="text-niko-amber font-bold">AM:</span> 5km Recuperación.</div>
                                        <div className="mb-2"><strong>PM: Flexiones con Palmada (Clapping):</strong> 10 series de 5 repes (Máxima altura).</div>
                                        <div className="mb-2"><strong>PM: Sentadilla Búlgara con Salto:</strong> 4x8 por pierna. Explosividad pura.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Elevaciones frontales disco/mochila 4x15.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Incline Pushups (Pies elevados) para hombro superior.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Clean & Jerk Explosivo (5 series x 5 reps explosivas).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Tabata Burpees (4 minutos de infierno).</div>
                                    </td>
                                    <td className="p-4">Velocidad que él no puede ver.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">MARTES</td>
                                    <td className="p-4">Tracción Explosiva</td>
                                    <td className="p-4">
                                        <div className="bg-gray-800/30 p-2 rounded mb-2"><span className="text-niko-amber font-bold">BUY-IN:</span> 15 min Cuerda.</div>
                                        <div className="mb-2"><span className="text-niko-amber font-bold">AM:</span> Intervalos "Tyson" (2 min a tope / 30s descanso).</div>
                                        <div className="mb-2"><strong>PM: Dumbbell Snatch:</strong> 10 minutos EMOM: 6 reps por brazo (pesado).</div>
                                        <div className="mb-2"><strong>PM: Renegade Rows:</strong> Posición flexión, rema con una mano. 4 series x 12.</div>
                                        <div className="mb-2"><strong>PM: High Pulls (Mochila/Mancuernas):</strong> Jalón al mentón explosivo (Trapecio) 4x15.</div>
                                        <div className="mb-2"><strong>ACCESORIO:</strong> Shrugs (Encogimientos) pesados con mochila 4x25.</div>
                                        <div className="mb-2"><strong>ACCESORIO 2:</strong> Dumbbell Pullovers (Mochila) para expansión torácica.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Devil Press Descendente (10-8-6-4-2).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>🔥 FINISHER:</strong> Paseo del Granjero unilateral (pesado) 3 vueltas.</div>
                                    </td>
                                    <td className="p-4">Fuerza para manipularlo en el choque.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">MIÉRCOLES</td>
                                    <td className="p-4">RECUPERACIÓN ACTIVA</td>
                                    <td className="p-4">
                                        <div className="mb-2">Baño frío/caliente, estiramientos profundos, movilidad de cadera. Dormir 9 horas.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Dead Hang (Colgarse) 3 x 1 min. (Descompresión + Grip).</div>
                                    </td>
                                    <td className="p-4">Sin recuperación no hay potencia. Grip para el control de muñecas.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-niko-amber">DOMINGO</td>
                                    <td className="p-4">Simulación Campeonato (12 Rounds)</td>
                                    <td className="p-4">
                                        <div className="mb-2"><strong>PM: Maratón de Sombra (Fase 2):</strong> 12 Rounds de 3 minutos. (30 seg descanso).</div>
                                        <div className="mb-2"><strong>Estructura:</strong> R1-4: Movilidad. R5-8: Contragolpe Pesado. R9-12: Guerra Mental.</div>
                                        <div className="mb-2 text-niko-red border-l-2 border-niko-red pl-2"><strong>FUERZA BRUTA:</strong> Neck Curls con Lastre (4x25).</div>
                                        <div className="text-niko-amber mt-2 border-t border-gray-600 pt-1"><strong>CASH-OUT:</strong> Visualización de victoria por decisión unánime (10 min).</div>
                                    </td>
                                    <td className="p-4">Preparar la mente para la distancia completa de la pelea.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <footer className="bg-niko-card border-t border-gray-700 py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-500 text-sm">PROTOCOLO ZERO NIKO // OPTIMIZADO PARA VICTORIA POR DECISIÓN UNÁNIME</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
