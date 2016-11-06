$(function(){
    var audio=$('audio').get(0);
    var auto=$('.bofanganting');
    var now=$('.now');
    var total=$('.total');
    var jindutiao=$('.jindutiao');
    var menu=$(".menu");
    var voice=$('.shenyin');
    var yinliang=$('.yinliang');
    var shang=$('.shang');
    var xia=$('.xia');
    var music=$('.music-list');
    var shunxu=$('.auto');
    var all=$('.all');
    var process=$('.process');
    var people=$('.people');
    var song=$('.song-font');
    var picture=$('.picture');
    var yinyue=$('.music');
    var database=[{name:"暧昧",src:"mp3/暧昧.mp3",
        content:{"00:00":"眉目里似哭不似哭","00:05":"还祈求甚么说不出","00:09":"陪著你轻呼著烟圈",
            "00:13":"到唇边讲不出满足","00:18":"你的温柔怎可以捕捉","00:24":"越来越近却从不接触",
            "00:30":"la...... la......","00:41":"茶没有喝光早变酸","00:47":"从来未热恋已失恋",
            "00:51":"陪著你天天在兜圈","00:55":"那缠绕怎么可算短","01:00":"你的衣裳今天我在穿",
            "01:06":"未留住你却仍然温暖","01:12":"徘徊在似苦又甜之间","01:16":"望不穿这暧昧的眼",
            "01:24":"爱或情借来填一晚","01:27":"终须都归还无谓多贪","01:31":"犹疑在似即若离之间",
            "01:36":"望不穿这暧昧的眼","01:40":"似是浓却仍然很淡","01:45":"天早灰蓝想告别","01:48":"偏未晚",
            "01:55":"","02:14":"茶没有喝光早变酸","02:18":"从来未热恋已失恋","02:24":"陪著你天天在兜圈",
            "02:28":"那缠绕怎么可算短","02:32":"你的衣裳今天我在穿","02:38":"未留住你却仍然温暖",
        "02:42":"徘徊在似苦又甜之间","02:50":"望不穿这暧昧的眼","02:54":"爱或情借来填一晚",
    "02:58":"终须都归还无谓多贪","03:06":"犹疑在似即若离之间","03:12":"望不穿这暧昧的眼","03:17":"似是浓却仍然很淡",
    "03:23":"天早灰蓝想告别","03:25":"偏未晚","03:30":""}},
        {name:"最好的我们",src:"mp3/最好的我们.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"丑八怪",src:"mp3/丑八怪.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"白敬亭、李宏毅、丁冠森、赵文龙 - 青茫",src:"mp3/白敬亭、李宏毅、丁冠森、赵文龙 - 青茫.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"谭嘉仪 - 小幸运",src:"mp3/谭嘉仪 - 小幸运.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王菲 - 爱与痛的边缘",src:"mp3/王菲 - 爱与痛的边缘.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王菲 - 我愿意",src:"mp3/王菲 - 我愿意.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"许嵩 - 素颜",src:"mp3/许嵩 - 素颜.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王菲 - 致青春",src:"mp3/王菲 - 致青春.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"薛之谦 - 其实",src:"mp3/薛之谦 - 其实.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王菲 - 给自己的情书",src:"mp3/王菲 - 给自己的情书.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"魏晨 - 烈火神盾",src:"mp3/魏晨 - 烈火神盾.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"薛之谦 - 演员",src:"mp3/薛之谦 - 演员.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"张惠妹 - 牵手",src:"mp3/张惠妹 - 牵手.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王菲 - 爱与痛的边缘",src:"mp3/王菲 - 爱与痛的边缘.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"王笑文 - 耿耿于怀",src:"mp3/王笑文 - 耿耿于怀.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"薛之谦 - 一千年以后",src:"mp3/薛之谦 - 一千年以后.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"张丹峰 - 地老天荒",src:"mp3/张丹峰 - 地老天荒.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"赵薇 - 左耳",src:"mp3/赵薇 - 左耳.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"张信哲 - I Believe",src:"mp3/张信哲 - I Believe.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"TFBOYS - 不完美小孩 - 2016快乐大本营现场",src:"mp3/TFBOYS - 不完美小孩 - 2016快乐大本营现场",content:{"00:00":"未搜索到歌词"}},
        {name:"法语歌曲 - 伊莲 - 我的名字叫伊莲娜",src:"mp3/法语歌曲 - 伊莲 - 我的名字叫伊莲娜.mp3",content:{"00:00":"未搜索到歌词"}},
        {name:"陈奕迅 - 陪你度过漫长岁月",src:"mp3/陈奕迅 - 陪你度过漫长岁月.mp3",content:{"00:00":"未搜索到歌词"}}];
    var index=0;
    var font=$('.font');
    auto.on('click',function(){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
    })
    $(audio).on('ended',function(){
        if(shunxu.hasClass('loop')){
            audio.loop=true;
        }else if(shunxu.hasClass('random')){
            index=Math.floor(Math.random()*database.length);
        }else{
            index++;
        }
        all.find('h4').text(database[index].name);
        song.text(database[index].name);
        audio.src=database[index].src;
        auto.addClass('bofang');
        audio.play();
        drawnlist();
    })
    $(audio).on('play',function(){
        auto.addClass('bofang');
        people.addClass('active');

    })
    $(audio).on('pause',function(){
        auto.removeClass('bofang');
        people.removeClass('active');

    })
    $(audio).on('timeupdate',function(){
        now.text(format(audio.currentTime));
        total.text(format(audio.duration));
        for (var i in database[index].content){
            if(now.text()===i){
                font.text(database[index].content[i]);
            }
        }
        jindutiao.find('.circle').css({left:audio.currentTime/audio.duration*(jindutiao.width()-10)});
        process.css('width',audio.currentTime/audio.duration*(jindutiao.width()-10));
    })
    $(audio).on('canplay',function(){
       $(audio).triggerHandler('timeupdate');
    })
    jindutiao.on('click',function(e){
        audio.currentTime=((e.offsetX-10)/(jindutiao.width()-10))*audio.duration;
        process.css('width',e.offsetX-10);

    })
    jindutiao.find('.circle').on('click',false);
    voice.on('click',function(){
                if(voice.hasClass('jingyin')){
                    voice.removeClass('jingyin');
                    audio.volume=yinliang.attr('pre-v');
                    yinliang.removeAttr('pre-v');
                }
                else{
                    voice.addClass('jingyin');
                    audio.volume=0;
                }
                yinliang.find('.circle').css({left:audio.volume*(yinliang.width()-4)});

    })
    yinliang.on('click',function(e){
        audio.volume=(e.offsetX-4)/(yinliang.width()-4);
        yinliang.find('.circle').css({left:audio.volume*(yinliang.width()-4)});
        yinliang.attr('pre-v',audio.volume);
    })
    yinliang.find('.circle').on('click',false);
    $(audio).on('changevolume',function(){
    })
    jindutiao.find('.circle').on('mousedown',function(e){
         var mousex=e.pageX;
          $(document).on('mousemove',function(e){
              var moveleft=(e.pageX-mousex);
              audio.currentTime=moveleft/jindutiao.width()*(audio.duration);
          });
        $(document).on('mouseup',function(){
            $(document).off('mousemove');
            $(document).off('mouseup');
           })
    })
    yinliang.find('.circle').on('mousedown',function(e){
        var mousex=e.pageX;
        $(document).on('mousemove',function(e){
            var moveleft=(e.pageX-mousex);
            audio.volume=moveleft/(yinliang.width()-4);
            yinliang.find('.circle').css({left:audio.volume*(yinliang.width()-4)});
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove');
            $(document).off('mouseup');
        })
    })
    function format(v){
        var zs=parseInt(v);
        var m=parseInt(zs/60);
        if(m<10){
            m='0'+m;
        }
        var s=zs%60;
        if(s<10){
            s='0'+s;
        }
        return m+":"+s;
    }
    xia.on('click',function(){
        index++;
        if(index==database.length){
            index=0;
        }
        font.text();
        audio.src=database[index].src;
        audio.play();
        drawnlist();
        all.find('h4').text(database[index].name);
        song.text(database[index].name);
    })
    shang.on('click',function(){
        index--;
        if(index==-1){
            index=database.length-1;
        }
        audio.src=database[index].src;
        audio.play();
        drawnlist();
        all.find('h4').text(database[index].name);
        song.text(database[index].name);
    })
    function drawnlist(){
        music.empty();
        $.each(database,function(i,v){
            if(i==index){
                $('<ol><span class="name"></span><div class="del"></div></ol>').addClass('active').attr("id",i).appendTo(music);
            }
            else{
                $('<ol><span class="name"></span><div class="del"></div></ol>').attr("id",i).appendTo(music);
            }
            $('.name').eq(i).text(i+1+'.'+database[i].name);
        })
    }
    drawnlist();
    music.on('click','ol',function(e){
        var elm=e.target;
        if(elm.nodeName=='SPAN'){
            audio.src=database[$(this).index()].src;
            index=$(this).index();
            audio.play();
            drawnlist();
            all.find('h4').text(database[index].name);
        }
        else{
            return;
        }
    })
    music.on('mousedown',false);
    var i=0;
    shunxu.on('click',function() {
        $(this).removeClass().addClass('auto');
        i++;
        if(i%3==1){
            $(this).addClass('loop');
        }else if(i%3==2){
            $(this).addClass('random');
        }
    })
    menu.on('click',function(){
        music.toggleClass('show');
    })
    music.on('click','.del',function(){
        var id=$(this).closest('ol').attr("id");
        $(this).closest('ol').remove();
        database.splice(id,1);
        database.length--;
        drawnlist();
    })
    picture.on('click',function(){
        all.toggleClass('active');
        yinyue.toggleClass('active');
        $('.yinyue').toggleClass('active');
    })
    jindutiao.on('mouseenter',function(e){
        var v=(e.offsetX-10)/(jindutiao.width()-10)*audio.duration;
        var left=e.offsetX+jindutiao.offset().left;
        $('.hide').text(format(v)).css({left:left,display:'block'});
    })
    jindutiao.on('mouseleave',function(){
        $('.hide').css('display','none');
    })
})