/ *
* "Ó vocês que acreditam, por que dizem algo que não fazem?
* Há tanto ódio contra Allah que você diz coisas que não faz. "
* (Surah ash-Shaff: 2-3).
* /
const (decryptMedia} = require ('@ open-wa / wa-decrypt')
const fs = require ('fs-extra')
const axios = require ('axios')
momento const = requer ('fuso horário do momento')
const get = require ('got')
const fetch = require ('node-fetch')
const color = require ('./ lib / color')
const (spawn, exec} = require ('child_process')
const nhentai = require ('nhentai-js')
const {API} = requer ('nhentai-api')
const {lyrics da música, quotemaker, randomNimek, fb, sleep, scheduleTv, ss} = require ('./ lib / functions')
const (help, snk, info, donate, readme, listChannel} = require ('./ lib / help')
const (stdout} = requer ('processo')
const nsfw_ = JSON.parse (fs.readFileSync ('./ lib / NSFW.json'))
const welkom = JSON.parse (fs.readFileSync ('./ lib / welcome.json'))
const {RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile} = require ('remove.bg')

moment.tz.setDefault ('Asia / Jakarta'). locale ('id')

module.exports = msgHandler = async (cliente, mensagem) => {
    experimentar {
        const {type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, postedJidList} = mensagem
        deixe {body} = mensagem
        const {name, formattedTitle} = chat
        deixe {pushname, verifyName} = remetente
        pushname = pushname || Verificado
        comandos const = legenda || corpo || ''
        comando const = commands.toLowerCase (). split ('') [0] || ''
        const args = commands.split ('')

        const msgs = (mensagem) => {
            if (command.startsWith ('!')) {
                if (message.length> = 10) {
                    return `$ {message.substr (0, 15)}`
                } outro {
                    return `$ {message}`
                }
            }
        }

        const mess = {
            aguarde: '[WAIT] Em andamento⏳ aguarde um momento',
            erro: {
                St: '[❗] Envie imagens com a legenda *! Adesivo * ou imagens marcadas que foram enviadas',
                Qm: '[❗] Ocorreu um erro, talvez o tema não esteja disponível!',
                Yt3: '[❗] Ocorreu um erro, não foi possível converter para mp3!',
                Yt4: '[❗] Ocorreu um erro, talvez o erro tenha sido causado pelo sistema.',
                Ig: '[❗] Ocorreu um erro, talvez porque a conta é privada',
                Ki: '[❗] O bot não pode eliminar o administrador do grupo!',
                Anúncio: '[❗] Não é possível adicionar destino, talvez porque seja privado',
                Iv: '[❗] O link que você enviou é inválido!'
            }
        }
        const apiKey = 'API-KEY' // apikey, você pode obtê-lo em https://mhankbarbars.herokuapp.com/api
        const time = moment (t * 1000) .format ('DD / MM HH: mm: ss')
        const botNumber = await client.getHostNumber ()
        const blockNumber = await client.getBlockedIds ()
        const groupId = isGroupMsg? chat.groupMetadata.id: ''
        const groupAdmins = isGroupMsg? esperar client.getGroupAdmins (groupId): ''
        const isGroupAdmins = isGroupMsg? groupAdmins.includes (sender.id): false
        const isBotGroupAdmins = isGroupMsg? groupAdmins.includes (botNumber + '@ c.us'): false
        const ownerNumber = ["628xxx@c.us", "55xxxxx"] // substitua pelo seu número do Whatsapp
        const isOwner = ownerNumber.includes (sender.id)
        const isBlocked = blockNumber.includes (sender.id)
        const isNsfw = isGroupMsg? nsfw_.includes (chat.id): false
        const uaOverride = 'WhatsApp / 2.2029.4 Mozilla / 5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit / 537.36 (KHTML, como Gecko) Chrome / 83.0.4103.116 Safari / 537.36'
        const isUrl = new RegExp (/ https ?: \ / \ / (www \.)? [- a-zA-Z0-9 @:% ._ + ~ # =] {1,256} \. [a-zA-Z0 -9 ()] {1,6} \ b ([- a-zA-Z0-9 () @:% _ +. ~ #? & / =] *) / Gi)
        if (! isGroupMsg && command.startsWith ('!')) console.log ('\ x1b [1; 31m ~ \ x1b [1; 37m>', '[\ x1b [1; 32mEXEC \ x1b [1; 37m] ', hora, cor (msgs (comando)),' de ', cor (nome do usuário))
        if (isGroupMsg && command.startsWith ('!')) console.log ('\ x1b [1; 31m ~ \ x1b [1; 37m>', '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' , hora, cor (msgs (comando)), 'de', cor (pushname), 'em', cor (titulo formatado))
        // if (! isGroupMsg &&! command.startsWith ('!')) console.log ('\ x1b [1; 33m ~ \ x1b [1; 37m>', '[\ x1b [1; 31mMSG \ x1b [1 ; 37m) ', tempo, cor (corpo),' de ', cor (nome do usuário))
        // if (isGroupMsg &&! command.startsWith ('!')) console.log ('\ x1b [1; 33m ~ \ x1b [1; 37m>', '[\ x1b [1; 31mMSG \ x1b [1; 37m) ', time, color (body),' from ', color (pushname),' in ', color (formattedTitle))
        if (isBlocked) return
        // if (! isOwner) return
        switch (comando) {
        caso '! adesivo':
        caso '! adesivo':
            if (isMedia && type === 'imagem') {
                const mediaData = await decryptMedia (mensagem, uaOverride)
                const imageBase64 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                aguarde client.sendImageAsSticker (de, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia (quotedMsg, uaOverride)
                const imageBase64 = `data: $ {quotedMsg.mimetype}; base64, $ {mediaData.toString ('base64')}`
                esperar client.sendImageAsSticker (de, imageBase64)
            } else if (args.length === 2) {
                url const = args [1]
                if (url.match (isUrl)) {
                    esperar client.sendStickerfromUrl (de, url, {método: 'get'})
                        .catch (err => console.log ('Exceção detectada:', err))
                } outro {
                    client.reply (from, mess.error.Iv, id)
                }
            } outro {
                    client.reply (from, mess.error.St, id)
            }
            pausa
        case '! stickergif':
        case '! stikergif':
        case '! sgif':
            if (isMedia) {
                if (mimetype === 'video / mp4' && mensagem.duração <10 || mimetype === 'imagem / gif' && mensagem.duração <10) {
                    const mediaData = await decryptMedia (mensagem, uaOverride)
                    client.reply (from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu. $ {mimetype.split ('/') [1]}`
                    esperar fs.writeFileSync (nome do arquivo, mediaData)
                    await exec (`gify $ {filename} ./media/output.gif --fps = 30 --scale = 240: 240`, função assíncrona (erro, stdout, stderr) {
                        const gif = await fs.readFileSync ('./ media / output.gif', {encoding: "base64"})
                        esperar client.sendImageAsSticker (de, `data: image / gif; base64, $ {gif.toString ('base64')}`)
                    })
                } outro (
                    client.reply (from, '[❗] Kirim video dengan caption *! stickerGif * max 10 sec!', id)
                )
            }
            pausa
case '! stickernobg':
        case '! stikernobg':
if (isMedia) {
                experimentar {
                    var mediaData = await decryptMedia (mensagem, uaOverride)
                    var imageBase64 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64 ({base64img, apiKey: 'API-KEY', size: 'auto', type: 'auto', outFile})
                    aguarde fs.writeFile (outFile, result.base64img)
                    esperar client.sendImageAsSticker (from, `data: $ {mimetype}; base64, $ {result.base64img}`)
                } catch (errar) {
                    console.log (err)
                }
            }
            pausa
        case '! donasi':
        case '! donate':
            client.sendLinkWithAutoPreview (de, 'https://saweria.co/donate/mhankbarbar', doar)
            pausa
        case '! tts':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! tts [id, en, jp, ar] [teks] *, contoh *! tts id halo semua *')
            const ttsId = require ('node-gtts') ('id')
            const ttsEn = require ('node-gtts') ('en')
const ttsJp = require ('node-gtts') ('ja')
            const ttsAr = require ('node-gtts') ('ar')
            const dataText = body.slice (8)
            if (dataText === '') retorna client.reply (from, 'Baka?', id)
            if (dataText.length> 500) retorna client.reply (from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice (5, 7)
if (dataBhs == 'id') {
                ttsId.save ('./ media / tts / resId.mp3', dataText, function () {
                    client.sendPtt (de, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save ('./ media / tts / resEn.mp3', dataText, function () {
                    client.sendPtt (de, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save ('./ media / tts / resJp.mp3', dataText, function () {
                    client.sendPtt (de, './media/tts/resJp.mp3', id)
                })
} else if (dataBhs == 'ar') {
                ttsAr.save ('./ media / tts / resAr.mp3', dataText, function () {
                    client.sendPtt (de, './media/tts/resAr.mp3', id)
                })
            } outro {
                client.reply (from, 'Masukkan data bahasa: [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            pausa
        case '! nulis':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! nulis [teks] *', id)
            const nulis = encodeURIComponent (body.slice (7))
            client.reply (from, mess.wait, id)
            let urlnulis = `https://mhankbarbars.herokuapp.com/nulis?text=$ {nulis} & apiKey = $ {apiKey}`
            aguardar busca (urlnulis, {método: "GET"}).então (res => res.json ())
            .então (assíncrono (json) => {
                esperar client.sendFileFromUrl (from, json.result, 'Nulis.jpg', 'Nih anjim', id)
            }). catch (e => client.reply (from, "Error:" + e));
            pausa
        case '! ytmp3':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! ytmp3 [linkYt] *, untuk contoh silahkan kirim perintah *! readme *')
            let isLinks = args [1] .match (/ (?: https?: \ / {2})? (?: w {3} \.)? youtu (?: be)? \. (?: com | be ) (?: \ / assistir \? v = | \ /) ([^ \ s &] +) /)
            if (! isLinks) retorna client.reply (from, mess.error.Iv, id)
            experimentar {
                client.reply (from, mess.wait, id)
                const resp = await get.get (`https://mhankbarbars.herokuapp.com/api/yta?url=$ {args [1]} & apiKey = $ {apiKey}`) .json ()
                if (resp.error) {
                    client.reply (from, resp.error, id)
                } outro {
                    const {título, miniatura, tamanho do arquivo, resultado} = espera resp
                    if (Number (filesize.split ('MB') [0])> = 30,00) return client.reply (from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl (from, thumb, 'thumb.jpg', `➸ * Title *: $ {title} \ n➸ * Filesize *: $ {filesize} \ n \ nSilahkan tunggu sebentar proses pengiriman arquivo membutuhkan waktu beberapa menit.` , Eu iria)
                    esperar client.sendFileFromUrl (from, result, `$ {title} .mp3`, '', id) .catch (() => client.reply (from, mess.error.Yt3, id))
                    // aguarda client.sendAudio (de, resultado, id)
                }
            } catch (errar) {
                client.sendText (ownerNumber [0], 'Erro ytmp3:' + err)
                client.reply (from, mess.error.Yt3, id)
            }
            pausa
        case '! ytmp4':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! ytmp4 [linkYt] *, untuk contoh silahkan kirim perintah *! readme *')
            let isLin = args [1] .match (/ (?: https?: \ / {2})? (?: w {3} \.)? youtu (?: be)? \. (?: com | be ) (?: \ / assistir \? v = | \ /) ([^ \ s &] +) /)
            if (! isLin) retorna client.reply (from, mess.error.Iv, id)
            experimentar {
                client.reply (from, mess.wait, id)
                const ytv = await get.get (`https://mhankbarbars.herokuapp.com/api/ytv?url=$ {args [1]} & apiKey = $ {apiKey}`) .json ()
                if (ytv.error) {
                    client.reply (from, ytv.error, id)
                } outro {
                    if (Number (ytv.filesize.split ('MB') [0])> 40,00) return client.reply (from, 'Maaf durasi video sudah melebihi batas maksimal!', id)
                    client.sendFileFromUrl (de, ytv.thumb, 'thumb.jpg', `➸ * Título *: $ {ytv.title} \ n➸ * Tamanho do arquivo *: $ {ytv.filesize} \ n \ nSilahkan tunggu sebentar proses arquivo pengiriman membutuhkan waktu beberapa menit », id)
                    aguarde client.sendFileFromUrl (from, ytv.result, `$ {ytv.title} .mp4`, '', id) .catch (() => client.reply (from, mess.error.Yt4, id))
                }
            } Apanhador) {
                client.sendText (ownerNumber [0], 'Erro ytmp4:' + er)
                client.reply (from, mess.error.Yt4, id)
            }
            pausa
        caso '! wiki':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! wiki [query] * \ nContoh: *! wiki asu *', id)
            const query_ = body.slice (6)
            const wiki = await get.get (`https://mhankbarbars.herokuapp.com/api/wiki?q=$ {query_} & lang = id & apiKey = $ {apiKey}`) .json ()
            if (wiki.error) {
                client.reply (from, wiki.error, id)
            } outro {
                client.reply (from, `➸ * Query *: $ {query _} \ n \ n➸ * Result *: $ {wiki.result}`, id)
            }
            pausa
        case '! cuaca':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! cuaca [tempat] * \ nContoh: *! cuaca tangerang', id)
            const tempat = body.slice (7)
            const weather = await get.get (`https://mhankbarbars.herokuapp.com/api/cuaca?q=$ {tempat} & apiKey = $ {apiKey}`) .json ()
            if (weather.error) {
                client.reply (from, weather.error, id)
            } outro {
                client.reply (from, `➸ Tempat: $ {weather.result.tempat} \ n \ n➸ Angin: $ {weather.result.angin} \ n➸ Cuaca: $ {weather.result.cuaca} \ n➸ Deskripsi : $ {weather.result.desk} \ n➸ Kelembapan: $ {weather.result.kelembapan} \ n➸ Suhu: $ {weather.result.suhu} \ n➸ Udara: $ {weather.result.udara} `, Eu iria)
            }
            pausa
        case '! fb':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! fb [linkFb] * untuk contoh silahkan kirim perintah *! readme *', id)
            if (! args [1] .includes ('facebook.com')) retorna client.reply (from, mess.error.Iv, id)
            client.reply (from, mess.wait, id)
            const epbe = await get.get (`https://mhankbarbars.herokuapp.com/api/epbe?url=$ {args [1]} & apiKey = $ {apiKey}`) .json ()
            if (epbe.error) retorna client.reply (from, epbe.error, id)
            client.sendFileFromUrl (de, epbe.result, 'epbe.mp4', epbe.title, id)
            pausa
        case '! creator':
            client.sendContact (de, '6285892766102@c.us')
            pausa
        case '! ig':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! ig [linkIg] * untuk contoh silahkan kirim perintah *! readme *')
            if (! args [1] .match (isUrl) &&! args [1] .includes ('instagram.com')) retorna client.reply (from, mess.error.Iv, id)
            experimentar {
                client.reply (from, mess.wait, id)
                const resp = await get.get (`https://mhankbarbars.herokuapp.com/api/ig?url=$ {args [1]} & apiKey = $ {apiKey}`) .json ()
                if (resp.result.includes ('. mp4')) {
                    var ext = '.mp4'
                } outro {
                    var ext = '.jpg'
                }
                esperar client.sendFileFromUrl (de, resp.result, `igeh $ {ext}`, '', id)
            } pegar {
                client.reply (from, mess.error.Ig, id)
                }
            pausa
        case '! nsfw':
            if (! isGroupMsg) return client.reply (from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (! isGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply (from, 'Pilih enable atau disable!', id)
            if (args [1] .toLowerCase () === 'ativar') {
                nsfw_.push (chat.id)
                fs.writeFileSync ('./ lib / NSFW.json', JSON.stringify (nsfw_))
                client.reply (de, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *! nsfwMenu * untuk mengetahui menu', id)
            } else if (args [1] .toLowerCase () === 'desativar') {
                nsfw_.splice (chat.id, 1)
                fs.writeFileSync ('./ lib / NSFW.json', JSON.stringify (nsfw_))
                client.reply (from, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } outro {
                client.reply (de, 'Pilih enable atau disable udin!', id)
            }
            pausa
        case '! bem-vindo':
            if (! isGroupMsg) return client.reply (from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (! isGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply (from, 'Pilih enable atau disable!', id)
            if (args [1] .toLowerCase () === 'ativar') {
                welkom.push (chat.id)
                fs.writeFileSync ('./ lib / welcome.json', JSON.stringify (welkom))
                client.reply (from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args [1] .toLowerCase () === 'desativar') {
                welkom.splice (chat.id, 1)
                fs.writeFileSync ('./ lib / welcome.json', JSON.stringify (welkom))
                client.reply (from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } outro {
                client.reply (de, 'Pilih enable atau disable udin!', id)
            }
            pausa
        case '! nsfwmenu':
            if (! isNsfw) return
            client.reply (from, '1.! randomHentai \ n2.! randomNsfwNeko', id)
            pausa
        case '! igstalk':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! igStalk @ username * \ nConntoh *! igStalk @ duar_amjay *', id)
            const stalk = await get.get (`https://mhankbarbars.herokuapp.com/api/stalk?username=$ {args [1]} & apiKey = $ {apiKey}`) .json ()
            if (stalk.error) retorna client.reply (from, stalk.error, id)
            const {Biodata, Jumlah_Followers, Jumlah_Following, Jumlah_Post, Name, Username, Profile_pic} = stalk
            const caps = `➸ * Nama *: $ {Name} \ n➸ * Nome de usuário *: $ {Username} \ n➸ * Jumlah Seguidores *: $ {Jumlah_Followers} \ n➸ * Jumlah Seguidores *: $ {Jumlah_Following} \ n ➸ * Jumlah Postingan *: $ {Jumlah_Post} \ n➸ * Biodados *: $ {Biodata} `
            esperar client.sendFileFromUrl (de, Profile_pic, 'Profile.jpg', maiúsculas, id)
            pausa
        case '! infogempa':
            const bmkg = await get.get (`https://mhankbarbars.herokuapp.com/api/infogempa?apiKey=$ {apiKey}`) .json ()
            const {potensi, koordinat, lokasi, kedalaman, magnitude, waktu, mapa} = bmkg
            const hasil = `* $ {waktu} * \ n📍 * Lokasi *: * $ {lokasi} * \ n〽️ * Kedalaman *: * $ {kedalaman} * \ n💢 * Magnitude *: * $ {magnitude} * \ n🔘 * Potensi *: * $ {potensi} * \ n📍 * Koordinat *: * $ {koordinat} * `
            client.sendFileFromUrl (from, map, 'shakemap.jpg', hasil, id)
            pausa
        caso '! anime':
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! anime [query] * \ nContoh: *! anime querido no franxx *', id)
            const animek = await get.get (`https://mhankbarbars.herokuapp.com/api/kuso?q=$ {body.slice (7)} & apiKey = $ {apiKey}`) .json ()
            if (animek.error) retorna client.reply (from, animek.error, id)
            const res_animek = `Título: * $ {animek.title} * \ n \ n $ {animek.info} \ n \ nSinopsis: $ {animek.sinopsis} \ n \ nLink Download: \ n $ {animek.link_dl} `
            client.sendFileFromUrl (de, animek.thumb, 'kusonime.jpg', res_animek, id)
            pausa
        case '! nh':
            // if (isGroupMsg) return client.reply (from, 'Desculpe, este comando apenas para bate-papo privado!', id)
            if (args.length === 2) {
                const nuklir = body.split ('') [1]
                client.reply (from, mess.wait, id)
                const cek = await nhentai.exists (nuklir)
                if (cek === true) {
                    experimentar {
                        const api = new API ()
                        const pic = await api.getBook (nuklir) .then (book => {
                            return api.getImageURL (book.cover)
                        })
                        const dojin = espera nhentai.getDoujin (nuklir)
                        const {título, detalhes, link} = dojin
                        const {paródias, tags, artistas, grupos, línguas, categorias} = aguardar detalhes
                        var teks = `* Título *: $ {title} \ n \ n * Paródias *: $ {paródias} \ n \ n * Tags *: $ {tags.join (',')} \ n \ n * Artistas * : $ {Artists.join (',')} \ n \ n * Grupos *: $ {groups.join (',')} \ n \ n * Idiomas *: $ {languages.join (',')} \ n \ n * Categorias *: $ {categorias} \ n \ n * Link *: $ {link} `
                        // exec ('nhentai --id =' + nuklir + `-P mantap.pdf -o ./hentong/${nuklir}.pdf --format` + `$ {nuklir} .pdf`, (erro, stdout , stderr) => {
                        client.sendFileFromUrl (from, pic, 'hentod.jpg', teks, id)
                            //client.sendFile(from, `./hentong / $ {nuklir} .pdf / $ {nuklir} .pdf.pdf`, então (() =>` $ {title} .pdf`, '', id) ) .catch (() =>
                            //client.sendFile(from, `./hentong / $ {nuklir} .pdf / $ {nuklir} .pdf.pdf`,` $ {title} .pdf`, '', id))
                            / * if (erro) {
                                console.log ('erro:' + erro.mensagem)
                                Retorna
                            }
                            if (stderr) {
                                console.log ('stderr:' + stderr)
                                Retorna
                            }
                            console.log ('stdout:' + stdout) * /
                            //})
                    } catch (errar) {
                        client.reply (de, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } outro {
                    client.reply (from, '[❗] Kode nuClear Salah!')
                }
            } outro {
                client.reply (from, '[WRONG] Kirim perintah *! nh [nuClear] * untuk contoh kirim perintah *! readme *')
            }
        pausa
        caso '! brainly':
            if (args.length> = 2) {
                const BrainlySearch = require ('./ lib / brainly')
                deixe tanya = body.slice (9)
                deixe jum = Número (tanya.split ('.') [1]) || 2
                if (jum> 10) retorna client.reply (from, 'Max 10!', id)
                if (Número (tanya [tanya.length-1])) {
                    tanya
                }
                client.reply (from, `➸ * Pertanyaan *: $ {tanya.split ('.') [0]} \ n \ n➸ * Jumlah jawaban *: $ {Number (jum)}`, id)
                aguarde BrainlySearch (tanya.split ('.') [0], Número (jum), função (res) {
                    res.forEach (x => {
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply (from, `➸ * Pertanyaan *: $ {x.pertanyaan} \ n \ n➸ * Jawaban *: $ {x.jawaban.judulJawaban} \ n`, id)
                        } outro {
                            client.reply (from, `➸ * Pertanyaan *: $ {x.pertanyaan} \ n \ n➸ * Jawaban *: $ {x.jawaban.judulJawaban} \ n \ n➸ * Link foto jawaban *: $ {x. jawaban.fotoJawaban.join ('\ n')} `, id)
                        }
                    })
                })
            } outro {
                client.reply (de, 'Uso: \ n! brainly [pertanyaan] [.jumlah] \ n \ nEx: \ n! brainly NKRI .2', id)
            }
            pausa
        caso '! espere':
            if (isMedia && type === 'imagem' || quotedMsg && quotedMsg.type === 'imagem') {
                if (isMedia) {
                    var mediaData = await decryptMedia (mensagem, uaOverride)
                } outro {
                    var mediaData = await decryptMedia (quotedMsg, uaOverride)
                }
                const fetch = require ('node-fetch')
                const imgBS4 = `data: $ {mimetype}; base64, $ {mediaData.toString ('base64')}`
                client.reply (de, 'Pesquisando ....', id)
                fetch ('https://trace.moe/api/search', {
                    método: 'POST',
                    corpo: JSON.stringify ({imagem: imgBS4}),
                    cabeçalhos: {"Content-Type": "application / json"}
                })
                .então (respon => respon.json ())
                .então (resolt => {
                if (resolt.docs && resolt.docs.length <= 0) {
                client.reply (de, 'Maaf, saya tidak tau ini anime apa', id)
                }
                    const {is_adult, title, title_chinese, title_romaji, title_english, episódio, similaridade, nome do arquivo, at, tokenthumb, anilist_id} = resolt.docs [0]
                    text = ''
                    if (similaridade <0,92) {
                    text = '* Tenho pouca confiança neste *: \ n \ n'
                    }
                    text + = `` ➸ * Título em japonês *: $ {title} \ n➸ * Título em chinês *: $ {title_chinese} \ n➸ * Título Romaji *: $ {title_romaji} \ n➸ * Título em inglês *: $ {title_english} \ n`
                    text + = `➸ * Ecchi *: $ {is_adult} \ n`
                    text + = `➸ * Eps *: $ {episode.toString ()} \ n`
                    text + = `➸ * Similarity *: $ {(similarity * 100) .toFixed (1)}% \ n`
                    var video = `https://media.trace.moe/video/$ {anilist_id} / $ {encodeURIComponent (filename)}? t = $ {at} & token = $ {tokenthumb}`;
                    client.sendFileFromUrl (de, vídeo, 'nimek.mp4', texto, id) .catch (() => {
                        client.reply (de, texto, id)
                    })
                })
                .catch (() => {
                    client.reply (de, 'Erro!', id)
                })
            } outro {
                client.sendFile (de, './media/img/tutod.jpg', 'Tutor.jpg', 'Aqui por exemplo mhank!', id)
            }
            pausa
        case '! quotemaker':
            arg = body.trim (). split ('|')
            if (arg.length> = 4) (
                client.reply (from, mess.wait, id)
                citações const = encodeURIComponent (arg [1])
                autor const = encodeURIComponent (arg [2])
                const theme = encodeURIComponent (arg [3])
                aguarde o citador (citações, autor, tema). então (amsu => {
                    client.sendFile (from, amsu, 'quotesmaker.jpg', 'neh ...'). catch (() => {
                       client.reply (from, mess.error.Qm, id)
                    })
                })
            } outro {
                client.reply (from, 'Uso: \ n! quotemaker | texto | marca d'água | tema \ n \ nEx: \ n! quotemaker | este exemplo | bicit | random', id)
            }
            pausa
        caso '! grupo de links':
            if (! isBotGroupAdmins) return client.reply (from, 'Este comando só pode ser usado quando o bot se torna admin', id)
            if (isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink (groupId);
                client.sendLinkWithAutoPreview (de, inviteLink, `\ nLink group * $ {name} *`)
            } outro {
            client.reply (from, 'Este comando só pode ser usado em grupos!', id)
            }
            pausa
        case '! bc':
            if (! isOwner) return client.reply (from, 'Este comando é apenas para o bot do proprietário!', id)
            deixe msg = body.slice (4)
            const chatz = await client.getAllChatIds ()
            para (deixe ids de chatz) {
                var cvk = await client.getChatById (ids)
                if (! cvk.isReadOnly) espera client.sendText (ids, `[Shinomiya Kaguya BOT Broadcast] \ n \ n $ {msg}`)
            }
            client.reply (from, 'Broadcast Success!', en)
            pausa
        case '! adminlist':
            if (! isGroupMsg) return client.reply (from, 'Este comando só pode ser usado em grupos!', id)
            deixe mimin = ''
            para (vamos advertir de groupAdmins) {
                mimin + = `➸ @ $ {admon.replace (/ @ c.us/g, '')} \ n`
            }
            aguarde client.sendTextWithMentions (de, mimin)
            pausa
        case '! ownergroup':
            if (! isGroupMsg) return client.reply (from, 'Este comando só pode ser usado em grupos!', id)
            const Owner_ = chat.groupMetadata.owner
            aguarde client.sendTextWithMentions (de, `Grupo Proprietário: @ $ {Proprietário_}`)
            pausa
        caso '! mencionar tudo':
            if (! isGroupMsg) return client.reply (from, 'Este comando só pode ser usado em grupos!', id)
            if (! isGroupAdmins) return client.reply (from, 'Este comando só pode ser usado por administradores de grupo', id)
            const groupMem = await client.getGroupMembers (groupId)
            deixe hehe = '╔══✪〘 Mencionar Todos 〙✪══ \ n'
            para (deixe i = 0; i <groupMem.length; i ++) {
                hehe + = '╠➥'
                hehe + = `@ $ {groupMem [i] .id.replace (/ @ c.us/g, '')} \ n`
            }
            hehe + = '╚═〘 Shinomiya Kaguya BOT〙'
            esperar client.sendTextWithMentions (de, hehe)
            pausa
        case '! kickall':
            if (! isGroupMsg) return client.reply (from, 'Este comando só pode ser usado em grupos!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (! isGroupOwner) return client.reply (from, 'Este comando só pode ser usado pelo grupo Proprietário', id)
            if (! isBotGroupAdmins) return client.reply (from, 'Este comando só pode ser usado quando o bot se torna admin', id)
            const allMem = await client.getGroupMembers (groupId)
            para (deixe i = 0; i <allMem.length; i ++) {
                if (groupAdmins.includes (allMem [i] .id)) {console.log ('Upss, este é o grupo de administração')
                } outro {
                    esperar client.removeParticipant (groupId, allMem [i] .id)
                }
            }
            client.reply (de, 'Sucesso expulsar todos os membros', id)
            pausa
        case '! leaveall':
            if (! isOwner) return client.reply (from, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await client.getAllChatIds ()
            const allGroups = await client.getAllGroups ()
            para (deixe gclist de allGroups) {
                esperar client.sendText (gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif: $ {allChats.length}`)
                esperar client.leaveGroup (gclist.contact.id)
            }
            client.reply (de, 'Saiu de todo o grupo com sucesso!', id)
            pausa
        case '! clearall':
            if (! isOwner) return client.reply (from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats ()
            para (deixe dchat de allChatz) {
                espera client.deleteChat (dchat.id)
            }
            client.reply (from, 'Succes clear all chat!', id)
            pausa
        caso '! add':
            const orang = args [1]
            if (! isGroupMsg) return client.reply (from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply (from, 'Untuk menggunakan fitur ini, kirim perintah *! add * 628xxxxx', id)
            if (! isGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (! isBotGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            experimentar {
                aguarde client.addParticipant (from, `$ {orang} @ c.us`)
            } pegar {
                client.reply (from, mess.error.Ad, id)
            }
            pausa
        case '! kick':
            if (! isGroupMsg) return client.reply (from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (! isGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (! isBotGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (postedJidList.length === 0) return client.reply (from, 'Untuk menggunakan Perintah ini, kirim perintah *! kick * @tagmember', id)
            aguarde client.sendText (from, `Perintah diterima, mengeluarkan: \ n $ {givenJidList.join ('\ n')}`)
            para (deixe i = 0; i <mencionadoJidList.length; i ++) {
                if (groupAdmins.includes (installedJidList [i])) retornar client.reply (from, mess.error.Ki, id)
                esperar client.removeParticipant (groupId, associatedJidList [i])
            }
            pausa
        case '! leave':
            if (! isGroupMsg) return client.reply (from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (! isGroupAdmins) return client.reply (from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            aguarde client.sendText (de, 'Sayonara'). then (() => client.leaveGroup (groupId))
            pausa
        caso '! promova':
            if (! isGroupMsg) return client.reply (from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (! isGroupAdmins) return client.reply (from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (! isBotGroupAdmins) return client.reply (from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (postedJidList.length === 0) return client.reply (from, 'Untuk menggunakan fitur ini, kirim perintah *! promova * @tagmember', id)
            if (postedJidList.length> = 2) return client.reply (from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 usuário.', id)
            if (groupAdmins.includes (installedJidList [0])) retornar client.reply (de, 'Maaf, usuário tersebut sudah menjadi admin.', id)
            esperar client.promoteParticipant (groupId, associatedJidList [0])
            aguarde client.sendTextWithMentions (de, `Perintah diterima, menambahkan @ $ {associatedJidList [0]} sebagai admin»)
            pausa
        case '! demote':
            if (! isGroupMsg) return client.reply (from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (! isGroupAdmins) return client.reply (from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (! isBotGroupAdmins) return client.reply (from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (postedJidList.length === 0) return client.reply (from, 'Untuk menggunakan fitur ini, kirim perintah *! demote * @tagadmin', id)
            if (belowJidList.length> = 2) return client.reply (from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (! groupAdmins.includes (installedJidList [0])) retornar client.reply (de, 'Maaf, usuário tersebut tidak menjadi admin.', id)
            esperar client.demoteParticipant (groupId, mencionadoJidList [0])
            esperar client.sendTextWithMentions (de, `Comando aceito, posição excluída @ $ {postedJidList [0]}.`)
            pausa
        case '! join':
            // return client.reply (from, 'Se você deseja convidar o bot para o seu grupo, por favor, permissão para wa.me/6285892766102', id)
            if (args.length <2) return client.reply (from, 'Send command *! join linkgroup key * \ n \ nEx: \ n! join https://chat.whatsapp.com/blablablablablabla abcde \ npara a chave que você pode obtenha apenas doando 5k ', id)
            link const = args [1]
            chave const = args [2]
            const tGr = await client.getAllGroups ()
            const minMem = 30
            const isLink = link.match (/ (https: \ / \ / chat.whatsapp.com) / gi)
            if (key! == 'lGjYt4zA5SQlTDx9z9Ca') return client.reply (from, '* key * wrong! por favor, converse com o proprietário do bot para obter uma chave válida', id)
            const check = await client.inviteInfo (link)
            if (! isLink) retorna client.reply (from, 'Este é um link? 👊🤬', id)
            if (tGr.length> 15) return client.reply (from, 'Desculpe, o número de grupos é máximo!', id)
            if (check.size <minMem) return client.reply (from, 'Grupo de membros não excede 30, bot não pode entrar', id)
            if (check.status === 200) {
                aguarde client.joinGroupViaLink (link) .then (() => client.reply (from, 'O bot estará em breve!'))
            } outro {
                client.reply (de, 'link de grupo inválido!', id)
            }
            pausa
        case '! delete':
            if (! isGroupMsg) return client.reply (from, 'Este recurso só pode ser usado em grupos', id)
            if (! isGroupAdmins) return client.reply (from, 'Este recurso só pode ser usado por administradores de grupo', id)
            if (! quotedMsg) return client.reply (from, 'Salah !!, send command *! delete [tagpesanbot] *', id)
            if (! quotedMsgObj.fromMe) return client.reply (from, 'Wrong !!, o bot não pode deletar chats de outros usuários!', id)
            client.deleteMessage (quotedMsgObj.chatId, quotedMsgObj.id, false)
            pausa
        case '! getses':
            const sesPic = await client.getSnapshot ()
            client.sendFile (de, sesPic, 'session.png', 'Neh ...', id)
            pausa
        case '! lyrics':
            if (args.length == 1) return client.reply (from, 'Send command *! lyrics [opcional] *, exemplo *! lyrics Eu não sou uma boneca *', id)
            const song = body.slice (7)
            letras const = aguardar letras
            client.reply (de, letras, id)
            pausa
        case '! chord':
            if (args.length === 1) return client.reply (from, 'Send command *! chord [query] *, por exemplo *! meu chord não é um boneco *', id)
            const query__ = body.slice (7)
            const chord = await get.get (`https://mhankbarbar.herokuapp.com/api/chord?q=$ {query__} & apiKey = $ {apiKey}`) .json ()
            if (chord.error) retorna client.reply (from, chord.error, id)
            client.reply (from, chord.result, id)
            pausa
        case '! listdaerah':
            const listDaerah = await get ('https://mhankbarbar.herokuapp.com/daerah') .json ()
            client.reply (from, listDaerah.result, id)
            pausa
        case '! listblock':
            let hih = `Esta é a lista de números bloqueados \ nTotal: $ {blockNumber.length} \ n`
            para (deixe i de blockNumber) {
                hih + = `➸ @ $ {i.replace (/ @ c.us/g, '')} \ n`
            }
            client.sendTextWithMentions (de, hih, id)
            pausa
        case '! schedulehalat':
            if (args.length === 1) return client.reply (from, '[❗] Enviar comando *! agenda de oração [área] * \ nexemplo: *! agenda de oração de Tangerang * \ nPara listar regiões, envie comando *! listDaerah *')
            const area = body.slice (14)
            const scheduleShalat = await get.get (`https://mhankbarbars.herokuapp.com/api/jadwalshalat?daerah=$ {area} & apiKey = $ {apiKey}`) .json ()
            if (scheduleShalat.error) retorna client.reply (from, scheduleShalat.error, id)
            const {Imsyak, Fajr, Dhuha, Dzuhur, Asr, Maghrib, Isha} = aguardar horários de oração
            arrbulan = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ];
            tgl = new Date (). getDate ()
            bln = nova data (). getMonth ()
            yr = new Date (). getFullYear ()
            const resultSchedule = `Horas de oração em $ {area}, $ {date} - $ {arrbulan [month]} - $ {yr} \ n \ nImil: $ {Imsyak} \ nSubuh: $ {dawn} \ nDhuha: $ { Dhuha} \ nDzuhur: $ {Dzuhur} \ nAshar: $ {Asr} \ nMaghrib: $ {Maghrib} \ nIsya: $ {Isha} `
            client.reply (from, resultSchedule, id)
            pausa
        case '! listchannel':
            client.reply (from, listChannel, id)
            pausa
        case '! scheduletv':
            if (args.length === 1) return client.reply (from, 'Send command *! ScheduleTv [channel] *', id)
            const query = body.slice (10) .toLowerCase ()
            const schedule = await scheduleTv (consulta)client.reply (from, jadwal, id)
            pausa
        case '! jadwaltvnow':
            const jadwalNow = await get.get ('https://api.haipbis.xyz/jadwaltvnow') .json ()
            client.reply (de, `Jam: $ {jadwalNow.jam} \ n \ nJadwalTV: $ {jadwalNow.jadwalTV}`, id)
            pausa
        case '! loli':
            const loli = await get.get ('https://mhankbarbars.herokuapp.com/api/randomloli') .json ()
            client.sendFileFromUrl (de, loli.result, 'loli.jpeg', 'Lolinya om', id)
            pausa
        case '! waifu':
            const waifu = await get.get (`https://mhankbarbars.herokuapp.com/api/waifu?apiKey=$ {apiKey}`) .json ()
            client.sendFileFromUrl (de, waifu.image, 'Waifu.jpg', `➸ Nome: $ {waifu.name} \ n➸ Descrição: $ {waifu.desc} \ n \ n➸ Fonte: $ {waifu.source} `, id)
            pausa
        case '! husbu':
            const diti = fs.readFileSync ('./ lib / husbu.json')
            const ditiJsin = JSON.parse (diti)
            const rindIndix = Math.floor (Math.random () * ditiJsin.length)
            const rindKiy = ditiJsin [rindIndix]
            client.sendFileFromUrl (de, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            pausa
        case '! randomhentai':
            if (isGroupMsg) {
                if (! isNsfw) return client.reply (from, 'Command / Perintah NSFW belum di aktifkan di group ini!', id)
                const hentai = await randomNimek ('hentai')
                if (hentai.endsWith ('. png')) {
                    var ext = '.png'
                } outro {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl (de, hentai, `Hentai $ {ext}`, 'Hentai!', id)
                pausa
            } outro {
                const hentai = await randomNimek ('hentai')
                if (hentai.endsWith ('. png')) {
                    var ext = '.png'
                } outro {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl (de, hentai, `Hentai $ {ext}`, 'Hentai!', id)
            }
        case '! randomnsfwneko':
            if (isGroupMsg) {
                if (! isNsfw) return client.reply (from, 'Command / Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwneko = await randomNimek ('nsfw')
                if (nsfwneko.endsWith ('. png')) {
                    var ext = '.png'
                } outro {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl (de, nsfwneko, `nsfwNeko $ {ext}`, 'Nsfwneko!', id)
            } outro {
                const nsfwneko = await randomNimek ('nsfw')
                if (nsfwneko.endsWith ('. png')) {
                    var ext = '.png'
                } outro {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl (de, nsfwneko, `nsfwNeko $ {ext}`, 'Nsfwneko!', id)
            }
            pausa
        case '! randomnekonime':
            const nekonime = await get.get ('https://mhankbarbars.herokuapp.com/api/nekonime') .json ()
            if (nekonime.result.endsWith ('. png')) {
                var ext = '.png'
            } outro {
                var ext = '.jpg'
            }
            client.sendFileFromUrl (de, nekonime.result, `Nekonime $ {ext}`, 'Nekonime!', id)
            pausa
        case '! randomtrapnime':
            const trap = await randomNimek ('trap')
            if (trap.endsWith ('. png')) {
                var ext = '.png'
            } outro {
                var ext = '.jpg'
            }
            client.sendFileFromUrl (from, trap, `trapnime $ {ext}`, 'Trapnime!', id)
            pausa
        case '! randomanime':
            const nime = await randomNimek ('anime')
            if (nime.endsWith ('. png')) {
                var ext = '.png'
            } outro {
                var ext = '.jpg'
            }
            client.sendFileFromUrl (de, nime, `Randomanime $ {ext}`, 'Randomanime!', id)
            pausa
        case '! inu':
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995n76d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7btpag5b /shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn " : //cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg " "https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg"," https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg "," https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg "," https://cdn.shibe.online/shibes/02805 6c9f23ff40bc749a95cc7da7a4bb734e908.jpg "," https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg "," https://cdn.shibe.online/shibes/125563d2ab4e520adc272144. online / shibes / ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg " "https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg", "https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg"," https: // cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg "" https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f. jpg "," https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg "," https://cdn.shibe.online/shibes /fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.gif .online / shibes / 4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg "," https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg "," https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg "," https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg "https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg" https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg "https://cdn.shibe.onLINE /cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg", "https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade .jpg "," https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg "," http s: //cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg "," https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70onc3de1de7f8e7cibc646.jpg "https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7cibc646.jpg" https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70onc3de1de7f8e7cibc646.jpg3de7f8e7shibc646 jpg "," https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg "," https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53cibe.inibe shibes / af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg "," https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fbpg.jpg "," https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fbpg33.jpg "," https://cdn.shibc5.babe6.jpg "," https://cdn.shib5.babe6.jpg7957babe6/babe6.babe6.babe6.babe6.babe6.babe6.jpg6 shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https: //cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51 fac563242658d654.jpg "," https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg "," https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9pg: //cd33nibe online / shibes / 5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg " "https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg", "https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg"," https: // cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg "" https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e166bdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e166bbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e166bbddd9d1cc.jpg". jpg "," https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg "," https://cdn.shibe.online/shib es / 4440aa827f88c04baa9c946f72fc688a34173581.jpg "," https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c5581.jpg "," https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55661.jpg "," https://cdn.shibe6.96aclinha3.jpg "," https://cdbada5.shibe6.96aclinha9.htb. shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","shibes://cdn.bg.btb //cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg" , "https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg", "https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b9424line.cd 81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg "," https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg "," htTPS: //cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg " "https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg"," https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14. jpg "," https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg ",“ https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b12 shibes / 06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg "," https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg "," https://cdn.shibe6.jpg11.b15b8f75d916b31485458b4a8d96815.jpg "," https://cdb50.shibe6.bc5115bc5115.bc5115beca6 / hibsa6 "," https://cdb50.shibe6.bcp5115bc5115bc5115beca6 / hibsa6 / pg511 / hbc5115beca6. shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https: //cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f79 1cc592b52653fb24b3.jpg "," https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg "," https://cdn.shibe.online/shibes/99ef30ea8bb607cc12cpg. online / shibes / aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg " "https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg", "https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg"," https: // cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde83338074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde83338070.sh0.jpg798",bde897.betf9708.html5305.bib.aaaaaaaa73f99c339f485c2bde83338070.sh0.jpg.a.b. https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183esh65.jpgonline jpg "]
            deixe kya = list [Math.floor (Math.random () * list.length)]
            client.sendFileFromUrl (de, kya, 'Dog.jpeg', 'Inu')
            pausa
        case '! neko':
            q2 = Math.floor (Math.random () * 900) + 300;
            q3 = Math.floor (Math.random () * 900) + 300;
            client.sendFileFromUrl (de, 'http://placekitten.com/'+q3+'/'+q2,' neko.png ',' Neko ')
            pausa
        case '! sendto':
            client.sendFile (de, './msgHndlr.js', 'msgHndlr.js')
            pausa
        case '! url2img':
            const _query = body.slice (9)
            if (! _query.match (isUrl)) retorna client.reply (from, mess.error.Iv, id)
            if (args.length === 1) return client.reply (from, 'Kirim perintah *! url2img [web] * \ nContoh *! url2img https: //google.com*', id)
            const url2img = await get.get (`https://mhankbarbar.herokuapp.com/api/url2image?url=$ {_query} & apiKey = $ {apiKey}`) .json ()
            if (url2img.error) retorna client.reply (from, url2img.error, id)
            client.sendFileFromUrl (de, url2img.result, 'kyaa.jpg', nulo, id)
            pausa
        case '! quote':
        caso '! aspas':
            const quotes = await get.get ('https://mhankbarbars.herokuapp.com/api/randomquotes') .json ()
            client.reply (from, `➸ * Quotes *: $ {quotes.quotes} \ n➸ * Autor *: $ {quotes.author}`, id)
            pausa
        case '! quotesnime':
            const skya = await get.get ('https://mhankbarbars.herokuapp.com/api/quotesnime/random') .json ()
            skya_ = skya.data
            client.reply (from, `➸ * Quotes *: $ {skya_.quote} \ n➸ * Character *: $ {skya_.character} \ n➸ * Anime *: $ {skya_.anime}`, id)
            pausa
        case '! meme':
            resposta const = espera axios.get ('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const {postlink, título, subreddit, url, nsfw, spoiler} = resposta.data
            client.sendFileFromUrl (de, `$ {url}`, 'meme.jpg', `$ {title}`)
            pausa
        case '! help':
            client.sendText (de, ajuda)
            pausa
        case '! readme':
            client.reply (from, readme, id)
            pausa
        caso '! info':
            client.sendLinkWithAutoPreview (de, 'https://github.com/mhankbarbar/whatsapp-bot', informações)
            pausa
        case '! snk':
            client.reply (from, snk, id)
            pausa
        }
    } catch (errar) {
        console.log (color ('[ERROR]', 'red'), err)
        //client.kill().then(a => console.log (a))
    }
}
