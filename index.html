// @ts-nocheck
"use client";

import React, { useState } from 'react';
import { 
  Home, User, Users, Swords, ShieldCheck, Plus, Mail, Trash2, ChevronRight, ChevronLeft, LogIn, Settings, Layers, ScrollText, AlertTriangle, Vote, Key, CheckCircle, QrCode, UploadCloud, Trophy
} from 'lucide-react';

// --- GENERATING 40 ROOMS (Mulai dari 0/4 Slot) ---
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
        slots: '0/4' // KEMBALI NORMAL, TIDAK LANGSUNG PENUH
      });
    }
  });

  return roomsList;
};

export default function FTArenaApp() {
  const [view, setView] = useState('login'); 
  const [activeTab, setActiveTab] = useState('Semua'); 
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [showRules, setShowRules] = useState(false); 
  
  // States
  const [rooms, setRooms] = useState<any[]>(generateAllRooms());
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [admins, setAdmins] = useState(['fakhri@arena.com', 'fanemaproduction@gmail.com']);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [buktiTransfer, setBuktiTransfer] = useState<string>(''); // State Bukti Transfer QRIS

  // Form State Admin Panel
  const [newRoomType, setNewRoomType] = useState('1v1');
  const [newRoomNominal, setNewRoomNominal] = useState('1'); 
  const [newRoomAdmin, setNewRoomAdmin] = useState('Fakhri');

  // Pot & Bagan States
  const [pot1Data, setPot1Data] = useState({ pihak1: 'TEAM ARYA', pihak2: 'TEAM SANZ', votedCreator: '', roomID: '', roomPW: '' });
  const userCurrentPot = 1; 
  const userCurrentPihak = 'pihak1';

  const isAdminAuthorized = user?.email === 'fanemaproduction@gmail.com';

  const handleGoogleLogin = () => {
    setUser({ name: 'Fanema Production', email: 'fanemaproduction@gmail.com' });
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
      slots: '0/4'
    };

    setRooms([newRoom, ...rooms]);
    alert(`Room ${newRoom.title} berhasil dibuat!`);
  };

  const handleDeleteRoom = (id: number) => {
    if(confirm("Hapus room ini?")) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  // KIRIM BUKTI PEMBAYARAN KE WA.ME ADMIN
  const confirmWhatsAppPayment = () => {
    if (!buktiTransfer) {
      alert("Harap unggah atau konfirmasi bukti transfer QRIS terlebih dahulu!");
      return;
    }
    setShowRules(false);
    const adminPhoneNumber = '6281234567890'; // Sesuaikan nomor WA mu
    const message = `Halo Admin ${selectedRoom.admin}, saya ingin mendaftar Tournament:\n\n` +
                    `• *Nama Akun (Google)*: ${user?.name}\n` +
                    `• *Kategori*: ${selectedRoom.type}\n` +
                    `• *Room*: ${selectedRoom.title}\n` +
                    `• *Total Bayar*: Rp ${(selectedRoom.priceNum + selectedRoom.feeNum).toLocaleString('id-ID')}\n` +
                    `• *Status Pembayaran*: SUDAH TRANSFER QRIS (Bukti dilampirkan)\n\n` +
                    `Saya sudah menyetujui seluruh RULES FT CS FANEMA.`;
    
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
          <button onClick={handleGoogleLogin} className="w-full bg-white text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 text-sm shadow-md">
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
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-full border ${activeTab === tab ? 'bg-cyan-500 border-cyan-500 text-black font-bold' : 'bg-[#0e1726] border-slate-800 text-slate-400'}`}>{tab}</button>
            ))}
          </div>

          {/* List Room */}
          <div className="space-y-2.5 flex-grow overflow-y-auto max-h-[460px] pr-1 no-scrollbar">
            {filteredRooms.map((room) => (
              <div key={room.id} onClick={() => { setSelectedRoom(room); setView('room-detail'); setBuktiTransfer(''); }} className="bg-[#0e1726]/40 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-4 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-cyan-950 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-900">{room.type}</span>
                    <span className="bg-emerald-950/60 text-emerald-400 text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-900">
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span> Terbuka
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-white text-base tracking-wide">{room.title}</h3>
                <p className="text-[11px] text-slate-400 mb-2.5">oleh {room.admin}</p>
                <div className="flex justify-between items-center text-xs border-t border-slate-800/50 pt-2">
                  <p className="text-cyan-400 font-medium">{room.price} <span className="text-slate-500 text-[10px]"> + fee {room.fee}</span></p>
                  <p className="text-slate-400 flex items-center gap-1 text-[11px]"><Users size={12} /> {room.slots}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-around items-center border-t border-slate-800 pt-3 mt-4 bg-[#090d16]">
            <button onClick={() => setView('user-dashboard')} className="flex flex-col items-center gap-1 text-[10px] text-cyan-400"><Home size={18} /> <span>Rooms</span></button>
            {isAdminAuthorized && <button onClick={() => setView('admin-dashboard')} className="flex flex-col items-center gap-1 text-[10px] text-slate-500 hover:text-amber-500"><ShieldCheck size={18} /> <span>Admin Panel</span></button>}
          </div>
        </div>
      )}

      {/* ==================== DETAIL ROOM VIEW (DENGAN QRIS & BRAKET) ==================== */}
      {view === 'room-detail' && (
        <div className="w-full max-w-md bg-[#090d16] border border-slate-800 rounded-3xl p-6 flex flex-col min-h-[750px] justify-between shadow-2xl overflow-y-auto max-h-[850px] no-scrollbar">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <button onClick={() => setView('user-dashboard')} className="bg-[#0e1726] border border-slate-800 p-2 rounded-xl text-slate-400"><ChevronLeft size={16} /></button>
              <div>
                <h2 className="font-bold text-white text-base">{selectedRoom?.title} — POT {userCurrentPot}</h2>
                <p className="text-[11px] text-slate-400">PJ: Admin {selectedRoom?.admin}</p>
              </div>
            </div>

            {/* SISTEM PEMBAYARAN QRIS */}
            <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4 space-y-3">
              <h4 className="text-white text-xs font-bold flex items-center gap-2 text-cyan-400">
                <QrCode size={14} /> Metode Pembayaran QRIS Otomatis
              </h4>
              <div className="flex items-center gap-4 bg-[#030712] border border-slate-800 p-3 rounded-xl">
                {/* Simulasi Gambar Code QRIS Box */}
                <div className="w-20 h-20 bg-white p-1 rounded-lg flex flex-col justify-between items-center shrink-0 shadow-inner">
                  <div className="w-full h-1 bg-blue-600 rounded"></div>
                  <span className="text-[8px] font-black text-slate-900 tracking-tighter">QRIS FT ARENA</span>
                  <div className="w-full h-1 bg-blue-600 rounded"></div>
                </div>
                <div className="text-xs space-y-1">
                  <p className="text-slate-400">Total Tagihan:</p>
                  <p className="text-lg font-black text-emerald-400">Rp {(selectedRoom?.priceNum + selectedRoom?.feeNum).toLocaleString('id-ID')}</p>
                  <label className="cursor-pointer inline-flex items-center gap-1 text-[10px] bg-cyan-500 text-black px-2 py-1 rounded font-bold mt-1">
                    <UploadCloud size={12} /> {buktiTransfer ? 'Bukti Terunggah' : 'Pilih Bukti TF'}
                    <input type="file" className="hidden" onChange={() => setBuktiTransfer('Terupload')} />
                  </label>
                </div>
              </div>
            </div>

            {/* BRAKET PERTANDINGAN BAGAN */}
            <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4">
              <h4 className="text-white text-xs font-bold mb-3 flex items-center gap-1.5 text-amber-400">
                <Trophy size={14} /> Bagan Braket Pertandingan
              </h4>
              <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar text-[11px]">
                <div className="min-w-[130px] bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-center">
                  <p className="text-[9px] text-slate-500 font-bold mb-1 uppercase">Semifinal 1</p>
                  <div className="bg-[#0e1726] py-1 px-2 rounded border border-slate-800 text-white font-semibold truncate">{pot1Data.pihak1}</div>
                  <p className="text-[9px] text-slate-600 my-0.5">vs</p>
                  <div className="bg-[#0e1726] py-1 px-2 rounded border border-slate-800 text-slate-400 truncate">{pot1Data.pihak2}</div>
                </div>
                <div className="min-w-[130px] bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-center opacity-60">
                  <p className="text-[9px] text-slate-500 font-bold mb-1 uppercase">Final</p>
                  <div className="bg-[#0e1726] py-1 px-2 rounded border border-slate-800 text-slate-500">Menunggu</div>
                  <p className="text-[9px] text-slate-600 my-0.5">vs</p>
                  <div className="bg-[#0e1726] py-1 px-2 rounded border border-slate-800 text-slate-500">Menunggu</div>
                </div>
              </div>
            </div>

            {/* SISTEM VOTE OPEN ROOM */}
            <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4">
              <h4 className="text-white text-xs font-bold mb-2.5 flex items-center gap-2 text-cyan-400"><Vote size={14} /> Vote Penanggung Jawab Open Room</h4>
              {pot1Data.votedCreator ? (
                <div className="text-xs text-emerald-400 bg-emerald-950/20 p-2.5 border border-emerald-900 rounded-xl flex items-center gap-2">
                  <CheckCircle size={14} /> <span>Terpilih: <b>{pot1Data.votedCreator === 'pihak1' ? pot1Data.pihak1 : pot1Data.pihak2}</b> wajib pasang ID & PW!</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button onClick={() => setPot1Data({...pot1Data, votedCreator: 'pihak1'})} className="bg-[#030712] border border-slate-800 p-2.5 rounded-xl text-left">
                    <p className="text-gray-500 text-[9px]">Pihak 1</p><p className="font-bold text-white truncate">{pot1Data.pihak1}</p>
                  </button>
                  <button onClick={() => setPot1Data({...pot1Data, votedCreator: 'pihak2'})} className="bg-[#030712] border border-slate-800 p-2.5 rounded-xl text-left">
                    <p className="text-gray-500 text-[9px]">Pihak 2</p><p className="font-bold text-white truncate">{pot1Data.pihak2}</p>
                  </button>
                </div>
              )}
            </div>

            {/* INPUT ID & PW (HANYA UNTUK ANGGOTA POT INTERNAL) */}
            {pot1Data.votedCreator && (
              <div className="bg-[#0e1726]/60 border border-slate-800 rounded-2xl p-4 mb-4 space-y-3">
                <h4 className="text-white text-xs font-bold flex items-center gap-2 text-amber-400"><Key size={14} /> Kredensial Akses Custom Room</h4>
                {pot1Data.votedCreator === userCurrentPihak ? (
                  <div className="space-y-2">
                    <input type="text" placeholder="Masukkan ID Room..." value={pot1Data.roomID} onChange={(e) => setPot1Data({...pot1Data, roomID: e.target.value})} className="w-full bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
                    <input type="text" placeholder="Masukkan Password Room..." value={pot1Data.roomPW} onChange={(e) => setPot1Data({...pot1Data, roomPW: e.target.value})} className="w-full bg-[#030712] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
                  </div>
                ) : (
                  <div className="bg-[#030712] border border-slate-800 p-3 rounded-xl space-y-2 text-xs">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-1.5"><span className="text-slate-400">ID ROOM:</span><span className="text-white font-mono font-bold">{pot1Data.roomID || 'Menunggu...'}</span></div>
                    <div className="flex justify-between items-center"><span className="text-slate-400">PASSWORD:</span><span className="text-white font-mono font-bold">{pot1Data.roomPW || 'Menunggu...'}</span></div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button onClick={() => setShowRules(true)} className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 mt-4">
            <ScrollText size={16} /> Lihat Rules & Ambil Slot
          </button>
        </div>
      )}

      {/* ==================== ADMIN PANEL VIEW ==================== */}
      {view === 'admin-dashboard' && (
        <div className="w-full max-w-md bg-[#020617] border border-amber-500/20 rounded-3xl p-6 flex flex-col min-h-[750px] shadow-2xl overflow-y-auto no-scrollbar">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setView('user-dashboard')} className="bg-slate-800 p-2 rounded-xl text-white"><ChevronLeft size={16} /></button>
            <div><h2 className="font-bold text-white text-lg">Panel Produksi Utama</h2><p className="text-[10px] text-amber-500 font-mono">{user?.email}</p></div>
          </div>
          <form onSubmit={handleCreateRoom} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6 space-y-3">
            <h3 className="text-white text-xs font-bold flex items-center gap-2 text-amber-400"><Layers size={14} /> ATUR & BUAT ROOM BARU</h3>
            <select value={newRoomType} onChange={(e) => setNewRoomType(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none"><option value="1v1">1v1</option><option value="2v2">2v2</option><option value="3v3">3v3</option><option value="4v4">4v4</option></select>
            <select value={newRoomNominal} onChange={(e) => setNewRoomNominal(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none">{[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>FT {n}K</option>)}</select>
            <input type="text" value={newRoomAdmin} onChange={(e) => setNewRoomAdmin(e.target.value)} className="w-full bg-[#090d16] border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none" />
            <button type="submit" className="w-full bg-amber-500 text-black font-bold py-2 rounded-xl text-xs">+ Rilis Room Baru</button>
          </form>
        </div>
      )}

      {/* ==================== SCREEN OVERLAY: MODAL RULES UTAS UTUH ==================== */}
      {showRules && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-md bg-[#090d16] border border-amber-500/30 rounded-3xl p-5 flex flex-col h-[660px] justify-between shadow-2xl">
            <div className="border-b border-slate-800 pb-2"><h2 className="text-amber-500 font-black text-base flex items-center gap-1.5"><ScrollText size={18} /> RULES FT CS FANEMA</h2><p className="text-[10px] text-red-500 font-bold uppercase">BUDAYAKAN MEMBACA! GA BACA? DERITA MU</p></div>
            <div className="flex-grow my-3 overflow-y-auto text-xs text-slate-300 space-y-3.5 pr-1 no-scrollbar leading-relaxed">
              <p className="font-bold text-emerald-400 text-sm">PC/MOBI/MACRO✅</p>
              <div><p className="font-bold text-white uppercase">RULES FAST TOUR (TIDAK SS 00)</p><p className="text-amber-400 font-bold">LEVEL DIBAWAH 25 SS 00!! BERDIRI+JONGKOK HADAP BASE MUSUH</p></div>
              <div><p className="text-white font-bold">😈SG BEBAS/ALLSKIN BOLEH</p><p className="font-bold text-cyan-400">SKILL CHARACTER<br />[ALOK, KELLY, CAROLINE, HAYATO]</p><p className="text-[11px] text-slate-500 italic">NOTE: SELAIN SKIL DIATAS/TIDAK ADA DI KOSONGIN/JNGN GUNAKAN YG LAIN</p></div>
              <div className="bg-[#050911] p-3 rounded-xl space-y-1 font-mono text-[11px] border border-slate-800"><p className="text-amber-500 font-bold">*BACAA!!*</p><p className="font-bold text-white">*ROOM MODE CRAZY STORE 1500 COIN*</p><p>🔰MODE CRAZY STORE | 🔰RONDE: 13 | 🔰DEFAULT COIN: 1500</p><p>🔰BATAS AMMO: TIDAK/NO | 🔰BATAS THROWABLE: TIDAK/NO</p><p className="text-red-400">❌AIRDROP: TIDAK/NO | ❌LOADOUT: TIDAK/NO</p><p className="text-slate-500">❌SISANYA BIARIN JANGAN DI APA APAIN</p></div>
              <p className="text-emerald-400 font-medium">✅22/33/44 BOLEH END ANIMASI</p>
              <div><p className="font-bold text-white">*PET YANG BOLEH DI PAKE*</p><p>🔰FALCO, PANTHER, SHIBA</p><p className="text-red-400 font-bold">*SELAIN ITU DISS NO DRAMA*</p></div>
              <div className="space-y-0.5"><p className="font-bold text-white">*SENJATA SG 2 ONLY*</p><p className="text-red-400">❌DMGE TINJU DIS | ❌DMGE PISTOL/USP DIS, <span className="text-emerald-400">✅(JIKA AFK TIDAK DIS)</span></p></div>
              <div className="space-y-0.5 text-slate-300">
                <p>• 11/22 NO ELIM ZONA | • 33/44 BOLEH ELIM ZONA</p><p>• NO GLOWALL/HELM/VEST KALO 00 | • NO ALIANSI | • NO CHARACTER CEWE</p>
                <p>• NO BANDEL BALAP | • NO BANDEL BENCONG | • NO BANDEL TUNG TUNG</p><p className="text-red-400">• NO API UNGGUN, BAWA? DIS</p><p>• NO LOADOUT (KOSONGIN) | • NO LANTAI 2 / ATAP (KECUALI UDAH WIN)</p>
                <p>• NO KOLONG CT | • NO SEPATU TERBANG</p><p className="text-red-400 font-bold">• SURCIN? DISS NO DRAMA</p><p>• HS BRUTAL? MINIM 8HS NO SC? GA DIS</p><p className="text-red-400">• RASIO HS 70% DIS</p><p className="text-amber-500 font-bold">• *BATAS RM 3x, LEBIH? DISS*</p>
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
