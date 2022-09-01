$(function(){


    //==============  Bee Flying  =================

    var Bee=$('.bee'),
        Home=$('.home'),
        wWidth= $(window).width(),
    flag =0;

    const gos = ()=>
        {
            $(".wings div").removeClass().addClass('wing'+flag%3);
            flag++
    }
    
    setInterval(gos,10);

   let beeReturn;
    const move =()=>{
        $(".plants .leaves").show();
        $(".plant .leaves").hide();
        $(Bee).css({
             transform:"scaleX(1)"
         })
         $(Bee).animate({
                top:'150px',left:'140px'
            },5000,()=>{
                $(Bee).css({transform:"scaleX(-1)",opacity:"0"})
                $(".plants .leaves").hide();
                beeReturn= setTimeout(()=>{
                    clearTimeout(beeReturn);
                    $(Bee).css({opacity:"1"})
                    $(Bee).animate({
                        top:"280px", left:(wWidth-370)+"px"
                    },4000,()=>move())
                },2000)
                
            })
        $(".plant .leaves").fadeIn(8000);
    }
 //================== Bee Home ================= 
    move()
    var timeOut;
    const home = ()=>{
        $(Home).animate({
            width:"366px",
            height:"405px",
            left:"92px"
        },500)
        timeOut= setTimeout(()=>{
            clearTimeout(timeOut)
            $(Home).animate({
                width:"350px",
                height:"400px",
                left:"100px"
            },500)
            $('.stack').animate({marginTop:'100px'},500,()=>{
                $('.stack').animate({marginTop:'110px'},500)
            })

        },500)
    }
    setInterval(home,1100)

    //====================  honey fill ===========
    var honeyTimeOut;
    const honey=()=>{
        $(".honey").animate({
            height:"130px"
        },200)
        honeyTimeOut =setTimeout(()=>{
            clearTimeout(honeyTimeOut)
            $('.honey').animate({
                height:"0px"
            },200)
        },1000)          
    }
    setInterval(honey,2000)
    

    let index =2, jars = $('.jars')
    $($(".honeyIn")[0]).css({height:"80%"})
    $($(".honeyIn")[1]).css({height:"80%"})
    const honeyIn = ()=>{
        $($(".honeyIn")[index]).animate({
            height:"80%"
        },1200,()=>{
                $(jars).animate({
                    marginLeft:"-=122px"
                },800,()=>{
                    
                    $('.honeyIn').first().css({height:"0%"})
                    $('.jar').first().appendTo(jars)
                    $(jars).css({
                        marginLeft:"0px",
                    })
                    
                })
                index=3
                
        })
    }
    setInterval(honeyIn,2000)
    
    //=================== smokes ================= 
    const smokes =()=>{
        
        $(".smoke").animate({
           width:"40px",
            height:"40px",
            marginTop:"-=90px",
            marginLeft:"-=15px",
            opacity:'.8'
        },2000,()=>{
            $(".smoke").css({
                    width:"5px",
                    height:"5px",
                    marginTop:"+=90px",
                    marginLeft:"+=15px",
                    opacity:".7"
                })
            });
        
    }
    setInterval(smokes,2000)
    
    //========================= clouds ===============
    const cloud = ()=>{
        $('.cloud').first().animate({left:"+=80px"},20000,()=>{
            $('.cloud').first().animate({left:"-=80px"},20000,()=>cloud())
        })
        $('.cloud').last().animate({left:"-=30px"},15000,()=>{
            $('.cloud').last().animate({left:"+=30px"},15000,()=>cloud())
        })
    }
    cloud()

    $(window).on('resize',()=>{window.location.reload()})
    $(window).blur(()=>{window.location.reload()})

})
