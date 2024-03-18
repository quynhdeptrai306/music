// công việc phải làm

// 1. render songs 
// 2. scroll top 
// 3. play, pause, speek
// 4. CD rotate
// 5. next ,prev 
// 6. radom 
// 7. next /repeat when ender 
// 8. Active song 
// 9. Scroll active song into view 
// 10. play song when click


// START 

const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document);

const app={
    songs: [
        {
            name:'Thủy triều',
            singer: 'Quang Hùng MasterD',
            path: './assets/music/ThuyTrieu-QuangHungMasterD-13749202.mp3',
            image: './assets/img/thuytrieu.png'
        },
        {
            name:'Call Me' ,
            singer: 'Wren Evans',
            path: './assets/music/CallMe-WrenEvans-13081940.mp3',
            image: './assets/img/call-me.webp'
        },
        {
            name:'Nàng thơ' ,
            singer: 'Hoàng Dũng',
            path: './assets/music/NangTho-HoangDung-6413381.mp3',
            image: './assets/img/hoangdung.webp'
        },
        {
            name:'Open Your Eyes' ,
            singer: 'Mono',
            path: './assets/music/OpenYourEyes-MONOOnionn-12581748.mp3',
            image: './assets/img/mono.webp'
        },
        {
            name:'Sáng Mắt Chưa' ,
            singer: 'Trúc Nhân',
            path: './assets/music/SangMatChua-TrucNhan-6042213.mp3',
            image: './assets/img/phuongly.webp'
        }
    ],

    render: function(){
        const htmls =this.songs.map(song =>{
            return `
               <div class="song">
                    <div class="thumb" style="background-image:url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>`
        });
        $('.playlist').innerHTML=htmls.join('')
    },
    start: function(){
        this.render();
    }
}

app.start();

var menuItem = $('.menu')
menuItem.onclick = function(e) {
    var playlist=$('.playlist')
    playlist.classList.toggle('active');
}

var btn_left= $('.btn-left')
btn_left.onclick = function(e) {
    var dashboard = $('.dashboard')
    dashboard.classList.toggle('show');
    var lyric = $('.lyric')
    lyric.classList.toggle('show');
}