!function(){
    function writeCode(prefix, code, fn){
        var container = document.querySelector('#code');
        var styleTag = document.querySelector('#styleTag');
        var n = 0;
        var duration = 50;

        $('.actions').on('click', 'button', function(e){
            let $button = $(e.currentTarget);
            let speed = $button.attr('data-speed');
            $button.addClass('active').siblings('.active').removeClass('active');
            switch(speed){
                case 'slow':
                    duration = 100
                    break;
                case 'normal':
                    duration = 50
                    break;
                case 'fast':
                    duration = 10
                    break;
            }
        })

        let id;
        id = setTimeout(function run(){
            n+=1;
            if( n <= code.length ){
                container.innerText = code.substring(0, n);
                styleTag.innerText = code.substring(0, n);
                container.scrollTop = container.scrollHeight;
                id = setTimeout( run, duration);
            }else{
                fn && fn.call()   // 这里不是很懂
            }
        }, duration)
    }

    let code = `
        /*
        * 首先准备皮卡丘的暖黄色的皮肤；
        */
        .preview{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffe600;
            z-index: 1;
        }
        .wrapper{
            height: 240px;
            width: 420px;
            position: relative;
            
        }
        /*
        * 然后画皮卡丘的扇形鼻子
        */
        .nose{
            width: 0px;
            height: 0px;
            border-radius: 12px;
            border-width: 14px;
            border-style: solid;
            border-color: black transparent transparent;
            position: absolute;
            top: 34px;
            left: 50%;
            margin-left: -14px;
        }
        /*
        * 然后画皮卡丘的眼睛
        */
        .eyes{
            width: 64px;
            height: 64px;
            border: 2px solid black;
            border-radius: 50%;
            background: #2e2e2e;
            position: relative;
        }
        /*
        * 眼睛里面的小珠子
        */
        .eyes::before{
            content: '';
            display: block;
            width: 30px;
            height: 30px;
            border: 2px solid #000;
            border-radius: 50%;
            background: white;
            position: absolute;
            top: 1px;
            left: 8px;
        }
        /*
        * 左眼在左边
        */
        .eyes.left{
            position: absolute;
            top: 0px;
            left: 60px;
        }
        /*
        * 右眼在右边
        */
        .eyes.right{
            position: absolute;
            top: 0px;
            right: 60px;
        }
        /*
        * 然后画皮卡丘的脸
        */
        .face{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background-color: red;
            border: 3px solid #000;
            position: absolute;
        }
        /*
        * 左脸放左边
        */
        .face.left{
            left: 0;
            margin-top: 110px;
        }
        /*
        * 右脸放右边
        */
        .face.right{
            right: 0;
            margin-top: 110px;
        }
        /*
        * 然后画皮卡丘的上嘴唇
        */
        .upperLip{
            width: 88px;
            height: 25px;
            position: absolute;
            top: 78px;
            background-color: #ffe600;
        }
        .upperLip.left{
            border-left: 2px solid #000;
            border-bottom: 2px solid #000;
            border-bottom-left-radius: 40px 25px;
            transform: rotate(-20deg);
            right: 50%;
        }
        .upperLip.right{
            border-right: 2px solid #000;
            border-bottom: 2px solid #000;
            border-bottom-right-radius: 40px 25px;
            transform: rotate(20deg);
            left: 50%;
        }
        /*
        * 接着画皮卡丘的下嘴唇
        */
        .lowerLip-wrapper{
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -150px;
            height: 152px;
            width: 300px;
            overflow: hidden;
            
        }
        .lowerLip{
            height: 3500px;
            width: 300px;
            background: #9b000a;
            border: 2px solid black;
            border-radius: 200px/2000px;
            position: absolute;
            bottom: 0;
            overflow: hidden;
        }
        /*
        * 小舌头
        */
        .lowerLip::after{
            content: '';
            width: 120px;
            height: 120px;
            background: #ff485f;
            position: absolute;
            bottom: 0px;
            left: 50%;
            margin-left: -60px;
            border-radius: 60px;
        }
        /*
        * 喏，皮卡丘送给你^_^
        */
    `
    writeCode('', code);

    
}.call()