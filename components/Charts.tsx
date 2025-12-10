import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ScatterChart, Scatter, ZAxis, Cell
} from 'recharts';

// --- Radar Chart ---
const radarData = [
  { subject: 'Potencia Bruta', A: 95, B: 60, fullMark: 100 },
  { subject: 'Velocidad Pies', A: 40, B: 95, fullMark: 100 },
  { subject: 'Volumen Golpes', A: 50, B: 90, fullMark: 100 },
  { subject: 'Defensa (Pivot)', A: 30, B: 95, fullMark: 100 },
  { subject: 'Juego de Clinch', A: 85, B: 75, fullMark: 100 },
  { subject: 'Estamina', A: 60, B: 90, fullMark: 100 },
];

export const AttributesRadarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
        <PolarGrid stroke="#334155" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#f8fafc', fontSize: 11, fontWeight: 'bold' }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Fajador Pesado"
          dataKey="A"
          stroke="#f43f5e"
          strokeWidth={2}
          fill="#f43f5e"
          fillOpacity={0.2}
        />
        <Radar
          name="Sistema Zero Niko"
          dataKey="B"
          stroke="#06b6d4"
          strokeWidth={2}
          fill="#06b6d4"
          fillOpacity={0.2}
        />
        <Legend wrapperStyle={{ color: '#fff' }} />
        <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

// --- Line Chart ---
const energyData = [
  { name: 'R1', Opponent: 100, ZeroNiko: 100 },
  { name: 'R2', Opponent: 90, ZeroNiko: 95 },
  { name: 'R3', Opponent: 75, ZeroNiko: 92 },
  { name: 'R4', Opponent: 50, ZeroNiko: 88 },
  { name: 'R5', Opponent: 30, ZeroNiko: 85 },
  { name: 'R6', Opponent: 15, ZeroNiko: 80 },
];

export const EnergyLineChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={energyData}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" label={{ value: 'Energía %', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
        <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
        />
        <Legend />
        <Line type="monotone" dataKey="Opponent" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} name="Energía Oponente" />
        <Line type="monotone" dataKey="ZeroNiko" stroke="#84cc16" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} name="Energía Zero Niko" />
      </LineChart>
    </ResponsiveContainer>
  );
};

// --- Scatter Chart (Bubble) ---
const opportunityData = [
  { x: 1, y: 10, z: 100, label: 'Estudio', fill: '#334155' },
  { x: 2, y: 25, z: 150, label: 'Primer Pivote', fill: '#334155' },
  { x: 3, y: 40, z: 200, label: 'Fallo Hook', fill: '#334155' },
  { x: 4, y: 55, z: 250, label: 'Cansancio', fill: '#fbbf24' },
  { x: 5, y: 75, z: 350, label: 'Error Guardia', fill: '#fbbf24' },
  { x: 6, y: 90, z: 450, label: 'Apertura Hígado', fill: '#f43f5e' },
  { x: 7, y: 95, z: 500, label: 'Desesperación', fill: '#f43f5e' },
  { x: 8, y: 98, z: 550, label: 'Guardia Baja', fill: '#f43f5e' },
  { x: 9, y: 100, z: 650, label: 'FINALIZACIÓN', fill: '#06b6d4' },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-niko-card border border-gray-700 p-2 rounded shadow-lg text-sm">
          <p className="font-heading text-white text-lg">{data.label}</p>
          <p className="text-gray-400">Minuto: {data.x}</p>
          <p className="text-gray-400">Frustración: {data.y}%</p>
          <p className="text-gray-400">Probabilidad: {data.z / 10}%</p>
        </div>
      );
    }
    return null;
  };

export const OpportunityBubbleChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#334155" />
        <XAxis type="number" dataKey="x" name="Minutos" stroke="#94a3b8" label={{ value: 'Minutos', position: 'bottom', fill: '#94a3b8' }} domain={[0, 10]} />
        <YAxis type="number" dataKey="y" name="Frustración" stroke="#94a3b8" label={{ value: 'Frustración %', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
        <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Probabilidad" />
        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Oportunidades" data={opportunityData}>
            {opportunityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
