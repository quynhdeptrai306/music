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

const player = $('.player')
const btnPlay=$('.btn-toggle-play')
const heading =$('header h2')
const cdthumb= $('.cd-thumb')
const audio = $('#audio')
const progress= $('#progress')

const app={
    currentindex: 0,
    isPlaying: false,
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
    defineProperties:function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.songs[this.currentindex]
            }
        })
    },
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
    handleEvent: function(){
        const _this = this;
        const cdthumbAnimation= cdthumb.animate(
            [
                {transform:'rotate(306deg)'}
            ],
            {
                duration:10000,
                interations: Infinity
            }
        )
        cdthumbAnimation.pause()
        btnPlay.onclick=function(){
            if(_this.isPlaying){
                audio.pause();
                cdthumbAnimation.pause();
            }
            else{
                audio.play(); 
                cdthumbAnimation.play();  
            }
            //xử lí play song
        }
        
        //when playing song
        audio.onplay=function(){
            _this.isPlaying=true
            player.classList.add('playing')
        }
        //when pause song
        audio.onpause=function(){
            _this.isPlaying=false
            player.classList.remove('playing')
        }
        //xử lí progress
        audio.ontimeupdate=function(){
            if(audio.duration){
                const progressPercent= Math.floor(audio.currentTime / audio.duration *100)
                progress.value=progressPercent
            }
        } 

        //khi change progress
        progress.onchange=function(){
            const seekTime=audio.duration/100 * progress.value
            audio.currentTime=seekTime
        }
    }
    ,
    loadCurrentSong: function(){
        heading.textContent =this.currentSong.name
        cdthumb.style.backgroundImage= `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    }
    ,
    start: function(){

        // load bai hat dau tien
        

        //ddinh nghia cho thuoc tinh
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvent();
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