// @ts-nocheck
"use client";

import React, { useState } from 'react';
import { 
  Home, User, Users, Swords, ShieldCheck, Plus, Mail, Trash2, ChevronRight, ChevronLeft, LogIn, Settings, Layers, ScrollText, AlertTriangle, Vote, Key, CheckCircle
} from 'lucide-react';

// --- GENERATING 40 ROOMS (1K - 10K untuk semua mode, 4 slot per room) ---
const generateAllRooms = () => {
  const modes = ['1v1', '2v2', '3v3', '4v4'];
  const roomsList = [];
  let idCounter = 1;

  modes.forEach((mode) => {
    for (let i = 1; i <= 10; i++) {
      const priceNum = i * 1000;
      const feeNum = priceNum < 5000 ? 500 : 1000; 

      roomsList.push({
        id: idCounter++,
        type: mode,
        title: `FT ${i}K`,
        admin: 'Fakhri',
        priceNum: priceNum,
        feeNum: feeNum,
        price: `Rp ${priceNum.toLocaleString('id-ID')}`,
        fee: `Rp ${feeNum.toLocaleString('id-ID')}`,
        slots: '4/4' // Angka slot default diset penuh untuk trigger alur sistem
      });
    }
  });

  return roomsList;
};

export default function FTArenaApp() {
  // Navigation States
  const [view, setView] = useState('login'); 
  const [activeTab, setActiveTab] = useState('Semua'); 
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [showRules, setShowRules] = useState(false); 
  
  // Application Dynamic States
  const [rooms, setRooms] = useState<any[]>(generateAllRooms());
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [admins, setAdmins] = useState(['fakhri@arena.com', 'fanemaproduction@gmail.com']);
  const [newAdminEmail, setNewAdminEmail] = useState('');

  // Form State Tambah Room Baru (Admin Panel)
  const [newRoomType, setNewRoomType] = useState('1v1');
  const [newRoomNominal, setNewRoomNominal] = useState('1'); 
  const [newRoomAdmin, setNewRoomAdmin] = useState('Fakhri');

  // --- STATES: SISTEM POT & KREDENSIAL ROOM TERISOLASI ---
  const [pot1Data, setPot1Data] = useState({ pihak1: 'TEAM ARYA', pihak2: 'TEAM SANZ', votedCreator: '', roomID: '', roomPW: '' });
  const [pot2Data, setPot2Data] = useState({ pihak1: 'TEAM FAKHRI JR', pihak2: 'TEAM INDO PRIDE', votedCreator: '', roomID: '', roomPW: '' });

  // Simulasi user masuk di Pot 1 sebagai Pihak 1
  const userCurrentPot = 1; 
  const userCurrentPihak = 'pihak1';

  // Proteksi Email Admin Utama
  const isAdminAuthorized = user?.email === 'fanemaproduction@gmail.com';

  const handleGoogleLogin = () => {
    setUser({
      name: 'Fanema Production', 
      email: 'fanemaproduction@gmail.com' 
    });
    setView('user-dashboard');
  };

  const handleAddAdmin = () => {
    if (newAdminEmail && !admins.includes(newAdminEmail)) {
      setAdmins([...admins, newAdminEmail]);
      setNewAdminEmail('');
      alert(`Admin ${newAdminEmail} berhasil ditambahkan!`);
    }
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    const nominalInt = parseInt(newRoomNominal);
    const priceNum = nominalInt * 1000;
    const feeNum = priceNum < 5000 ? 500 : 1000;

    const newRoom = {
      id: Date.now(),
      type: newRoomType,
      title: `FT ${nominalInt}K`,
      admin: newRoomAdmin,
      priceNum: priceNum,
      feeNum: feeNum,
      price: `Rp ${priceNum.toLocaleString('id-ID')}`,
      fee: `Rp ${feeNum.toLocaleString('id-ID')}`,
      slots: '4/4'
    };

    setRooms([newRoom, ...rooms]);
    alert(`Room ${newRoom.title} (${newRoom.type}) sukses ditambahkan!`);
  };

  const handleDeleteRoom = (id: number) => {
    if(confirm("Hapus room ini dari daftar?")) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  const confirmWhatsAppPayment = () => {
    setShowRules(false);
    const adminPhoneNumber = '6281234567890'; // Ganti pakai nomor WA Lu
    const message = `Halo Admin ${selectedRoom.admin}, saya ingin mendaftar Tournament:\n\n` +
                    `• *Nama Akun (Google)*: ${user?.name}\n` +
                    `• *Kategori*: ${selectedRoom.type}\n` +
                    `• *Room*: ${selectedRoom.title}\n` +
                    `• *Total Bayar*: Rp ${(selectedRoom.priceNum + selectedRoom.feeNum).toLocaleString('id-ID')}\n\n` +
                    `Saya sudah membaca seluruh RULES FT CS FANEMA secara lengkap.`;
    
    window.open(`https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredRooms = activeTab === 'Semua' ? rooms : rooms.filter(room => room.type === activeTab);

  return (
    <div className="min-h-screen bg-[#030712] flex justify-center items-center p-4 relative text-slate-200 font-sans">
      
      {/* ==================== LOGIN VIEW ==================== */}
      {view === 'login' && (
        <div className="w-full max-w-md bg-[#090d16] border border-slate-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
          <div className="w-16 h-16 bg-[#0e1726] border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-4 shadow-lg">
            <Swords size={32} />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight mb-1">FT ARENA</h1>
          <p className="text-xs text-slate-400 mb-8">Masuk dengan akun Google Anda</p>
          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all text-sm shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.03-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Masuk dengan Google
          </button>
        </div>
      )}

      {/* ==================== USER DASHBOARD VIEW ==================== */}
      {view === 'user-dashboard' && (
        <div className="w-full max-w-md bg-[#090d16] border border-slate-800 rounded-3xl p-6 flex flex-col min-h-[750px] relative shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs text-slate-400">Selamat datang,</p>
              <h1 className="text-xl font-bold text-white uppercase tracking-tight truncate max-w-[200px]">{user?.name}</h1>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0e1726] border border-cyan-500/30 rounded-full px-3 py-1.5 text-xs font-semibold text-cyan-400">
              <Swords size={14} /> FT ARENA
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-1.5 mb-5 text-[11px] overflow-x-auto pb-2 no-scrollbar">
            {['Semua', '1v1', '2v2', '3v3', '4v4'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full border transition-all ${
                  activeTab === tab ? 'bg-cyan-500 border-cyan-500 text-black font-bold' : 'bg-[#0e1726] border-slate-800 text-slate-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List Room Dinamis */}
          <div className="space-y-2.5 flex-grow overflow-y-auto max-h-[460px] pr-1 no-scrollbar">
            {filteredRooms.map((room) => (
              <div 
                key={room.id} 
                onClick={() => { setSelectedRoom(room); setView('room-detail'); }}
                className="bg-[#0e1726]/40 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-4 relative group transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-cyan-950 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-900/60">{room.type}</span>
                    <span className="bg-amber-950/40 text-amber-400 border border-amber-900/40 text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></span> Pot Penuh
                    </span>
                  </div>
                  <ChevronRight size={15} className="text-slate-500 group-hover:text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-base tracking-wide">{room.title}</h3>
                <p className="text-[11px] text-slate-400 mb-2.5">oleh {room.admin}</p>
                <div className="flex justify-between items-center text-xs border-t border-slate-800/50 pt-2">
                  <p className="text-cyan-400 font-medium">{room.price} <span className="text-slate-500 text-[10px]"> + fee {room.fee}</span></p>
                  <p className="text-amber-400 flex items-center gap-1">{room.slots}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-around items-center border-t border-slate-800 pt-3 mt-4 bg-[#090d16]">
            <button onClick={() => setView('user-dashboard')} className="flex flex-col items-center gap-1 text-[10px] text-cyan-400">
              <Home size={18} /> <span>Rooms</span>
            </button>
            {isAdminAuthorized && (
              <button onClick={() => setView('admin-dashboard')} className="flex flex-col items-center gap-1 text-[10px] text-slate-500 hover:text-amber-500">
                <ShieldCheck size={18} /> <span>Admin Panel</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ==================== DETAIL ROOM VIEW (LOGIKA VOTE & POT INDEPENDEN) ==================== */}
      {view === 'room-detail' && (
        <div className="w-full max-w-md bg-[#090d16] border border-slate-800 rounded-3xl p-6 flex flex-col min-h-[750px] justify-between shadow-2xl overflow-y-auto max-h-[800px] no-scrollbar">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <button onClick={() => setView('user-dashboard')} className="bg-[#0e1726] border border-slate-800 p-2 rounded-xl text-slate-400">
                <ChevronLeft size={16} />
              </button>
              <div>
                <h2 className="font-bold text-white text-base">{selectedRoom?.title} — POT {userCurrentPot}</h2>
                <p className="text-[11px] text-slate-400">PJ: Admin {selectedRoom?.admin}</p>
              </div>
            </div>

            <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-3 mb-4 flex items-center gap-2.5 text-xs text-amber-400">
              <AlertTriangle size={16} className="shrink-0" />
              <span>Pot Penuh ({selectedRoom?.slots}), pendaftaran memerlukan verifikasi regulasi rules.</span>
            </div>

            {/* SISTEM VOTE PEMBUAT ROOM (1 Saja Per Pot) */}
            <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4">
              <h4 className="text-white text-xs font-bold mb-2.5 flex items-center gap-2 text-cyan-400">
                <Vote size={14} /> Vote Penanggung Jawab Open Room
              </h4>
              {pot1Data.votedCreator ? (
                <div className="text-xs text-emerald-400 bg-emerald-950/20 p-2.5 border border-emerald-900 rounded-xl flex items-center gap-2">
                  <CheckCircle size={14} />
                  <span>Terpilih: <b>{pot1Data.votedCreator === 'pihak1' ? pot1Data.pihak1 : pot1Data.pihak2}</b> wajib pasang ID & PW!</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setPot1Data({...pot1Data, votedCreator: 'pihak1'})} className="bg-[#090d16] border border-slate-800 p-3 rounded-xl text-left text-xs">
                    <p className="text-slate-500 text-[10px]">Pihak 1</p>
                    <p className="text-white font-bold truncate">{pot1Data.pihak1}</p>
                  </button>
                  <button onClick={() => setPot1Data({...pot1Data, votedCreator: 'pihak2'})} className="bg-[#090d16] border border-slate-800 p-3 rounded-xl text-left text-xs">
                    <p className="text-slate-500 text-[10px]">Pihak 2</p>
                    <p className="text-white font-bold truncate">{pot1Data.pihak2}</p>
                  </button>
                </div>
              )}
            </div>

            {/* PANEL INPUT CREDENTIALS (DILIHAT SESAMA POT) */}
            {pot1Data.votedCreator && (
              <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4 space-y-3">
                <h4 className="text-white text-xs font-bold flex items-center gap-2 text-amber-400">
                  <Key size={14} /> Kredensial Akses Custom Room
                </h4>
                {pot1Data.votedCreator === userCurrentPihak ? (
                  <div className="space-y-2">
                    <input type="text" placeholder="Masukkan ID Room CS..." value={pot1Data.roomID} onChange={(e) => setPot1Data({...pot1Data, roomID: e.target.value})} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
                    <input type="text" placeholder="Masukkan Password Room..." value={pot1Data.roomPW} onChange={(e) => setPot1Data({...pot1Data, roomPW: e.target.value})} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
                  </div>
                ) : (
                  <div className="bg-[#090d16] border border-slate-800 p-3 rounded-xl space-y-2">
                    <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1.5">
                      <span className="text-slate-400">ID ROOM:</span>
                      <span className="text-white font-mono font-bold">{pot1Data.roomID || 'Menunggu diinput...'}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">PASSWORD:</span>
                      <span className="text-white font-mono font-bold">{pot1Data.roomPW || 'Menunggu diinput...'}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Rincian Biaya */}
            <div className="bg-[#0e1726]/30 border border-slate-800 rounded-2xl p-4 mb-4">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div><p className="font-bold text-white">{selectedRoom?.price}</p><p className="text-[9px] text-slate-500">Taruhan</p></div>
                <div className="border-x border-slate-800"><p className="font-bold text-white">{selectedRoom?.fee}</p><p className="text-[9px] text-slate-500">Fee Admin</p></div>
                <div><p className="font-bold text-cyan-400">Rp {(selectedRoom?.priceNum + selectedRoom?.feeNum).toLocaleString('id-ID')}</p><p className="text-[9px] text-slate-500">Total</p></div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowRules(true)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 mt-4"
          >
            <ScrollText size={16} /> Lihat Rules & Ambil Slot
          </button>
        </div>
      )}

      {/* ==================== ADMIN PANEL VIEW ==================== */}
      {view === 'admin-dashboard' && (
        <div className="w-full max-w-md bg-[#020617] border border-amber-500/20 rounded-3xl p-6 flex flex-col min-h-[750px] shadow-2xl overflow-y-auto max-h-[800px] no-scrollbar">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setView('user-dashboard')} className="bg-slate-800 p-2 rounded-xl text-white">
              <ChevronLeft size={16} />
            </button>
            <div>
              <h2 className="font-bold text-white text-lg">Panel Produksi Utama</h2>
              <p className="text-[10px] text-amber-500 font-mono">{user?.email}</p>
            </div>
          </div>

          {/* Form Buat Room */}
          <form onSubmit={handleCreateRoom} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6">
            <h3 className="text-white text-xs font-bold mb-3 flex items-center gap-2 text-amber-400"><Layers size={14} /> ATUR & BUAT ROOM BARU</h3>
            <div className="space-y-3">
              <select value={newRoomType} onChange={(e) => setNewRoomType(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none">
                <option value="1v1">1v1</option><option value="2v2">2v2</option><option value="3v3">3v3</option><option value="4v4">4v4</option>
              </select>
              <select value={newRoomNominal} onChange={(e) => setNewRoomNominal(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none">
                {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>FT {n}K</option>)}
              </select>
              <input type="text" value={newRoomAdmin} onChange={(e) => setNewRoomAdmin(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
              <button type="submit" className="w-full bg-amber-500 text-black font-bold py-2 rounded-xl text-xs">+ Rilis Room Baru</button>
            </div>
          </form>

          {/* Tambah Admin */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 mb-6">
            <h3 className="text-white text-xs font-bold mb-3 flex items-center gap-2"><Plus size={14} /> TAMBAH OTORISASI EMAIL</h3>
            <div className="flex gap-1.5">
              <input type="email" placeholder="Ketik email..." value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none" />
              <button onClick={handleAddAdmin} className="bg-amber-500 text-black font-bold px-4 rounded-xl text-xs">Add</button>
            </div>
          </div>

          {/* List Manage Room */}
          <div className="flex-grow text-xs">
            <h3 className="text-slate-400 font-bold mb-2 uppercase flex items-center gap-1.5"><Settings size={12}/>Manajemen List Room</h3>
            <div className="space-y-2 max-h-[180px] overflow-y-auto no-scrollbar">
              {rooms.map((room) => (
                <div key={room.id} className="bg-[#0e1726]/40 border border-slate-800 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-white font-bold">{room.title} <span className="text-[10px] text-cyan-400">({room.type})</span></p>
                    <p className="text-[10px] text-slate-500">PJ: Admin {room.admin}</p>
                  </div>
                  <button onClick={() => handleDeleteRoom(room.id)} className="text-slate-500 hover:text-red-500 p-1"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================== SCREEN OVERLAY: MODAL RULES UTAS UTUH ==================== */}
      {showRules && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-md bg-[#090d16] border border-amber-500/30 rounded-3xl p-5 flex flex-col h-[660px] justify-between shadow-2xl">
            
            <div className="border-b border-slate-800 pb-2">
              <h2 className="text-amber-500 font-black text-base flex items-center gap-1.5">
                <ScrollText size={18} /> RULES FT CS FANEMA
              </h2>
              <p className="text-[10px] text-red-500 font-bold uppercase">BUDAYAKAN MEMBACA! GA BACA? DERITA MU</p>
            </div>

            {/* SELURUH TEKS RULES REPLIKA ASLI */}
            <div className="flex-grow my-3 overflow-y-auto text-xs text-slate-300 space-y-3.5 pr-1 no-scrollbar leading-relaxed">
              <p className="font-bold text-emerald-400 text-sm">PC/MOBI/MACRO✅</p>
              
              <div>
                <p className="font-bold text-white uppercase">RULES FAST TOUR (TIDAK SS 00)</p>
                <p className="text-amber-400 font-bold">LEVEL DIBAWAH 25 SS 00!! BERDIRI+JONGKOK HADAP BASE MUSUH</p>
              </div>

              <div>
                <p className="text-white font-bold">😈SG BEBAS/ALLSKIN BOLEH</p>
                <p className="font-bold text-cyan-400">SKILL CHARACTER<br />[ALOK, KELLY, CAROLINE, HAYATO]</p>
                <p className="text-[11px] text-slate-500 italic">NOTE: SELAIN SKIL DIATAS/TIDAK ADA DI KOSONGIN/JNGN GUNAKAN YG LAIN</p>
              </div>

              <div className="bg-[#050911] p-3 rounded-xl space-y-1 font-mono text-[11px] border border-slate-800">
                <p className="text-amber-500 font-bold">*BACAA!!*</p>
                <p className="font-bold text-white">*ROOM MODE CRAZY STORE 1500 COIN*</p>
                <p>🔰MODE CRAZY STORE</p>
                <p>🔰RONDE: 13</p>
                <p>🔰DEFAULT COIN: 1500</p>
                <p>🔰BATAS AMMO: TIDAK/NO</p>
                <p>🔰BATAS THROWABLE: TIDAK/NO</p>
                <p className="text-red-400">❌AIRDROP: TIDAK/NO</p>
                <p className="text-red-400">❌LOADOUT: TIDAK/NO</p>
                <p className="text-slate-500">❌SISANYA BIARIN JANGAN DI APA APAIN</p>
              </div>

              <p className="text-emerald-400 font-medium">✅22/33/44 BOLEH END ANIMASI</p>

              <div>
                <p className="font-bold text-white">*PET YANG BOLEH DI PAKE*</p>
                <p>🔰FALCO, PANTHER, SHIBA</p>
                <p className="text-red-400 font-bold">*SELAIN ITU DISS NO DRAMA*</p>
              </div>

              <div>
                <p className="font-bold text-white">*SENJATA SG 2 ONLY*</p>
                <p className="text-red-400">❌DMGE TINJU DIS</p>
                <p className="text-red-400">❌DMGE PISTOL/USP DIS,</p>
                <p className="text-emerald-400">✅(JIKA AFK TIDAK DIS)</p>
              </div>

              <div className="space-y-0.5 text-slate-300">
                <p>• 11/22 NO ELIM ZONA</p>
                <p>• 33/44 BOLEH ELIM ZONA</p>
                <p>• NO GLOWALL/HELM/VEST KALO 00</p>
                <p>• NO ALIANSI</p>
                <p>• NO CHARACTER CEWE</p>
                <p>• NO BANDEL BALAP</p>
                <p>• NO BANDEL BENCONG</p>
                <p>• NO BANDEL TUNG TUNG</p>
                <p className="text-red-400">• NO API UNGGUN, BAWA? DIS</p>
                <p>• NO LOADOUT (KOSONGIN)</p>
                <p>• NO LANTAI 2 / ATAP (KECUALI UDAH WIN)</p>
                <p>• NO KOLONG CT</p>
                <p>• NO SEPATU TERBANG</p>
                <p className="text-red-400 font-bold">• SURCIN? DISS NO DRAMA</p>
                <p>• HS BRUTAL? MINIM 8HS NO SC? GA DIS</p>
                <p className="text-red-400">• RASIO HS 70% DIS</p>
                <p className="text-amber-500 font-bold">• *BATAS RM 3x, LEBIH? DISS*</p>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/10 p-3 rounded-xl space-y-1.5 text-[11px]">
                <p className="text-gray-300 font-semibold">SEBELUM MULAI/GAS CEK SPECTATOR BIAR GA DRAMA ADA SPECK</p>
                <p>❗BATAS DIS 10 MENIT TOLERAN (IBADAH) 15 MENIT LEBIH? DISKUALIFIKASI</p>
                <p>❗JIKA ADA KESALAHAN DALAM MEMBUAT ROOM BISA REMATCH DENGAN SYARAT BELUM DAMAGE, UDAH DAMAGE? DIS</p>
                <p>❗KIRIM BUKTI SS+REC JIKA ADA YANG MELANGGAR RULES/GADA BUKTI SKIP/KICK AJA</p>
                <p>❗GA MAU OPR SELAMA 10 MENIT, DIS DUA' TIM</p>
                <p>❗DUA TIM UDAH MASUK ROOM BELUM GAS SELAMA 10 MENIT,DIS YANG BUAT ROOM</p>
              </div>
            </div>

            <div className="flex gap-2 border-t border-slate-800 pt-3">
              <button onClick={() => setShowRules(false)} className="w-1/3 bg-slate-800 text-slate-300 py-2 rounded-xl text-xs font-bold">Kembali</button>
              <button onClick={confirmWhatsAppPayment} className="w-2/3 bg-emerald-500 text-slate-950 font-black py-2 rounded-xl text-xs">Saya Paham & Setuju</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
