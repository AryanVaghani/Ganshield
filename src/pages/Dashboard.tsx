import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Activity, Server, Target, CheckCircle2, AlertTriangle, ShieldX, TerminalSquare, Globe, Wifi, Cpu } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';
import { TextScramble } from '@/components/ui/text-scramble';

const Dashboard: React.FC = () => {
  const isAttackMode = true;

  const trafficData = [
    { time: '00:00', traffic: 1200, threats: 15, mitigated: 14 },
    { time: '02:00', traffic: 980, threats: 8, mitigated: 8 },
    { time: '04:00', traffic: 900, threats: 5, mitigated: 5 },
    { time: '06:00', traffic: 1400, threats: 12, mitigated: 12 },
    { time: '08:00', traffic: 3200, threats: 45, mitigated: 44 },
    { time: '10:00', traffic: 4800, threats: 78, mitigated: 77 },
    { time: '12:00', traffic: 4100, threats: 120, mitigated: 118 },
    { time: '14:00', traffic: 5200, threats: 210, mitigated: 208 },
    { time: '16:00', traffic: 5800, threats: 340, mitigated: 335 },
    { time: '18:00', traffic: 4500, threats: 180, mitigated: 178 },
    { time: '20:00', traffic: 3900, threats: 85, mitigated: 84 },
    { time: '22:00', traffic: 2800, threats: 42, mitigated: 42 },
    { time: '24:00', traffic: 2100, threats: 20, mitigated: 20 },
  ];

  const attackTypeData = [
    { name: 'DDoS (Volumetric)', count: 420, color: '#f43f5e' },
    { name: 'SQL Injection', count: 185, color: '#f59e0b' },
    { name: 'XSS Attempt', count: 120, color: '#06b6d4' },
    { name: 'Brute Force SSH', count: 85, color: '#8b5cf6' },
    { name: 'Zero-Day Payload', count: 12, color: '#10b981' },
  ];

  const geoData = [
    { name: 'North America', value: 35, color: '#06b6d4' },
    { name: 'Europe', value: 28, color: '#8b5cf6' },
    { name: 'Asia Pacific', value: 22, color: '#10b981' },
    { name: 'Middle East', value: 10, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#f43f5e' },
  ];

  const recentLogs = [
    { id: 'EVT-9942', time: '15:28:44', source: '104.22.55.99', type: 'DDoS SYN Flood', mitigation: 'Blocked', accuracy: '99.8%', country: 'US' },
    { id: 'EVT-9941', time: '15:28:41', source: '45.33.22.11', type: 'SQLi Error Based', mitigation: 'Blocked', accuracy: '98.5%', country: 'RU' },
    { id: 'EVT-9940', time: '15:27:10', source: 'Unknown/Tor', type: 'Ransomware Dropper', mitigation: 'Quarantined', accuracy: '94.2%', country: '??' },
    { id: 'EVT-9939', time: '15:25:05', source: '192.168.1.105', type: 'Port Scan (Internal)', mitigation: 'Logged', accuracy: '100%', country: 'INT' },
    { id: 'EVT-9938', time: '15:24:30', source: '89.12.44.67', type: 'Credential Stuffing', mitigation: 'Blocked', accuracy: '97.3%', country: 'DE' },
    { id: 'EVT-9937', time: '15:22:18', source: '211.55.88.14', type: 'DNS Tunneling', mitigation: 'Blocked', accuracy: '96.1%', country: 'CN' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-mono mt-16 selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <div className="w-full mx-auto space-y-6">

        {/* Global Toolbar Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-4">
          <div>
            <TextScramble
              as="h1"
              className="text-3xl font-bold tracking-tighter text-primary"
              duration={1.5}
              speed={0.03}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//"
            >
              GANSHIELD // COMMAND
            </TextScramble>
            <TextScramble
              as="p"
              className="text-sm text-muted-foreground mt-1 tracking-widest uppercase"
              duration={1.8}
              speed={0.02}
              characterSet="abcdefghijklmnopqrstuvwxyz.-_"
            >
              Global Threat Observatory Matrix
            </TextScramble>
          </div>

          {isAttackMode ? (
            <div className="relative flex items-center gap-3 px-4 py-2 border border-rose-500/50 rounded-md bg-rose-500/10 text-rose-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] overflow-hidden animate-[defcon-pulse_1.5s_ease-in-out_infinite]">
              {/* Outer blinking ring */}
              <span className="absolute inset-0 rounded-md border border-rose-500/60 animate-ping" />
              {/* Blinking dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold opacity-80 tracking-widest">DEFCON LEVEL</span>
                <span className="text-md font-bold leading-none animate-[blink_1s_step-end_infinite]">CRITICAL [ATTACK ONGOING]</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 px-4 py-2 border border-emerald-500/30 rounded-md bg-emerald-500/10 text-emerald-500 shadow-sm">
              <Shield className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold opacity-80">DEFCON LEVEL</span>
                <span className="text-md font-bold leading-none">NOMINAL</span>
              </div>
            </div>
          )}
        </div>

        {/* Telemetry Grid (Top KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1: Defend Rate */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.45, ease: 'easeOut' }} whileHover={{ y: -3 }} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">Defend Rate</p>
            <h3 className="text-4xl font-bold tracking-tighter text-emerald-500 mb-1">99.8%</h3>
            <p className="text-xs text-muted-foreground mb-4">
              <span className="text-rose-400 font-semibold">0.2%</span> penetration rate
            </p>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '99.8%' }} transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full bg-emerald-500" />
            </div>
          </motion.div>

          {/* Card 2: AI Mitigation */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.45, ease: 'easeOut' }} whileHover={{ y: -3 }} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">AI Mitigation</p>
            <h3 className="text-4xl font-bold tracking-tighter text-primary mb-1">98.5%</h3>
            <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span className="text-primary font-semibold">1.5%</span> false positive rate
            </p>
            <div className="flex gap-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex-1 h-1.5 rounded-sm" style={{ backgroundColor: i < 18 ? '#e78a53' : '#3f3f46' }} />
              ))}
            </div>
          </motion.div>

          {/* Card 3: Active Alerts */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45, ease: 'easeOut' }} whileHover={{ y: -3 }} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden group hover:border-rose-500/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-60" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-rose-500 animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">Active Alerts</p>
            <h3 className="text-4xl font-bold tracking-tighter text-rose-500 mb-1 animate-pulse">822</h3>
            <p className="text-xs text-muted-foreground mb-4">
              <span className="text-rose-400 font-semibold">↑ +142%</span> vs last hour
            </p>
            <div className="flex items-end gap-0.5 h-6">
              {[3, 5, 4, 7, 6, 9, 8, 10, 8, 12, 10, 14].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-rose-500/60" style={{ height: `${h * 4}px` }} />
              ))}
            </div>
          </motion.div>

          {/* Card 4: Active Nodes */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' }} whileHover={{ y: -3 }} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">Active Nodes</p>
            <h3 className="text-4xl font-bold tracking-tighter text-amber-500 mb-1">1,024</h3>
            <p className="text-xs text-muted-foreground mb-4">
              <span className="text-emerald-500 font-semibold">1,014</span> healthy · <span className="text-rose-400 font-semibold">10</span> degraded
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`h-2 flex-1 rounded-sm ${i > 9 ? 'bg-rose-500/60' : i > 7 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Mid Section: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Traffic / Threat Volume Chart */}
          <div className="bg-card border border-border rounded-lg p-5 lg:col-span-2 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" /> Traffic & Threat Volume (24h)
              </h2>
              <div className="flex gap-4 text-[10px] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Traffic</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> Threats</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Mitigated</span>
              </div>
            </div>
            <div className="flex-1 min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMitigated" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '12px' }}
                    itemStyle={{ color: 'var(--foreground)' }}
                  />
                  <Area type="monotone" dataKey="traffic" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorTraffic)" />
                  <Area type="monotone" dataKey="mitigated" stroke="#10b981" strokeWidth={1.5} fillOpacity={1} fill="url(#colorMitigated)" />
                  <Area type="monotone" dataKey="threats" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorThreats)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Attack Type Distribution */}
          <div className="bg-card border border-border rounded-lg p-5 shadow-sm flex flex-col">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-6">
              <ShieldX className="w-4 h-4 text-rose-500" /> Vector Analysis (Top 5)
            </h2>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attackTypeData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} stroke="var(--foreground)" width={130} fontSize={11} />
                  <Tooltip
                    cursor={{fill: 'var(--muted)'}}
                    contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--foreground)', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                    {attackTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section: Geo + Log */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Geo Distribution */}
          <div className="bg-card border border-border rounded-lg p-5 shadow-sm flex flex-col">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-violet-400" /> Geographic Distribution
            </h2>
            <div className="flex-1 w-full min-h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={geoData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {geoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1c1b1f',
                      borderColor: '#3f3f46',
                      borderRadius: '8px',
                      color: '#fafafa',
                      fontSize: '12px',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                    }}
                    labelStyle={{ color: '#fafafa', fontWeight: 600, marginBottom: '4px' }}
                    itemStyle={{ color: '#a1a1aa' }}

                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              {geoData.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Live Terminal Log */}
          <div className="bg-card border border-border rounded-lg p-0 shadow-sm overflow-hidden flex flex-col lg:col-span-2">
            <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-amber-500" /> Live Interception Stream
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] text-rose-500 font-mono uppercase">Recording</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead className="bg-muted/10 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">ID</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">Time</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">Vector</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">Origin</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">GEO</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">Status</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider border-b border-border">AI %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {recentLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-muted/20 transition-colors group">
                      <td className="px-4 py-3 text-muted-foreground group-hover:text-cyan-400 transition-colors">{log.id}</td>
                      <td className="px-4 py-3 text-muted-foreground">{log.time}</td>
                      <td className="px-4 py-3 text-rose-400 font-medium">{log.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{log.source}</td>
                      <td className="px-4 py-3">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                          {log.country}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider border
                          ${log.mitigation === 'Blocked' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : ''}
                          ${log.mitigation === 'Quarantined' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : ''}
                          ${log.mitigation === 'Logged' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : ''}
                        `}>
                          {log.mitigation}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-emerald-400">{log.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Network Status Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Globe, label: 'Connected Regions', value: '48', color: '#06b6d4' },
            { icon: Wifi, label: 'Network Latency', value: '1.8ms', color: '#10b981' },
            { icon: Cpu, label: 'GPU Utilization', value: '67%', color: '#8b5cf6' },
            { icon: Shield, label: 'Firewall Rules', value: '12,847', color: '#f59e0b' },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}15` }}>
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
