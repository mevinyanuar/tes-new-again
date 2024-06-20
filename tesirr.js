let nama = 'David'
let peran = 'Penyihir'

let sentence = peran === 'Ksatria' ? `Selamat datang di Dunia Proxytia, ${nama}, 
Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!` : peran === 'Tabib' ? `Selamat datang di Dunia Proxytia, ${nama}, 
Halo ${peran} ${nama}, kamu dapat menyembuhkan temanmu!`: peran === 'Penyihir' ? `Selamat datang di Dunia Proxytia, ${nama}, 
Halo ${peran} ${nama}, ciptakan keajaiban yang membantumu!` : `nama dan peran harus diisi`
console.log(sentence)
