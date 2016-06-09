// ;(function () { 
// 	function Router () {

// 	} 
// 	Router.prototype.route = function ( path, callback ) { 
// 		var url = location.hash.slice(1) || '/'; 
// 		// 刷新时的处理 
// 		window.addEventListener('load', function () { 
// 			if ( url == path ) { 
// 				callback&&callback(); 
// 			} 
// 		}, false); 
// 		// hash变化时的处理 
// 		window.addEventListener('hashchange', function () { 
// 			url = location.hash.slice(1) || '/'; 
// 			if ( url == path ) { 
// 				callback&&callback(); 
// 			} 
// 		}, false); 
// 	}; 
// 	window.Router = new Router(); 
// })();
// var content = document.querySelectorAll('.content'); 
// 测试函数，这里可以放一些ajax处理之类的 
    
 
    // 刷新时的处理 
    window.addEventListener('load', function () { 
      var url = location.hash.slice(2);
      if (url!=""){
      $(".content").load(url)}
      else{
      $(".content").load("client.html")
      };
    }); 
    // hash变化时的处理 
    window.addEventListener('hashchange', function () { 
      var url = location.hash.slice(2);
      if (url!=""){
      $(".content").load(url)}
      else{
      $(".content").load("client.html")
      };
    }); 

    
    function loadContent ( a ) { 
	  $(".content").load(a);
    } 
// function loadContent ( url ) { 
// 	$(".content").html(url);
	
// } 
// 注意：这里的path要和html里面锚链接对应 // 如：‘#/’对应‘/’, '#/page2'对应'/page2' 
// Router.route('/', function () { 
// 	loadContent('这是首页'); 
// }); 
// Router.route('/page1', function () { 
// 	loadContent('这是页面1'); 
// }); 
// Router.route('/page2', function () { 
// 	loadContent('这是页面2'); 
// }); 
// Router.route('/page3', function () { 
// 	loadContent('这是页面3'); 
// }); 
// Router.route('/page4', function () { 
// 	loadContent('这是页面4'); 
// });


$(function(){
	var h =  $(window).height()-$(".header").height();
       $(".content").css("height",h+"px");
       $(".left").css("max-height",h+"px");
      $(".client").click(function(e){
        if($(".dropdown-menu").is(":hidden")){
          $(".dropdown-menu").show();}
        else{
          $(".dropdown-menu").hide();
        }
        $(document).one("click", function(){
        $(".dropdown-menu").hide();
        });

        e.stopPropagation();

      	
      })


      
      $(".xl").click(function(){
      	if($("#zh").is(".leftmenu.lixiao")){
            
      	}
      	else{$(this).next("ul").slideToggle();}
      });

        

      $(".button01").click(function(){
      	
      	$(".leftmenu>li span").toggle();
      	$(".xl").next("ul").hide();
      	// $(".leftmenu>ul").toggleClass("list")
      	// $("#xiala01").toggle();
      	// $("#xiala02").toggle();
      	// $("#xiala03").toggle();
      	// $("#xiala04").toggle();
      	// $("#xiala05").toggle();
      	// $("#xiala06").toggle();
        $(".fa-angle-down").toggle();
      	$("#zh").toggleClass("lixiao");
      	$(".cont").toggleClass("cont1");
        $(".left").toggleClass("left1");
        // $("#form").unbind("click");
      })

      // $(".leftmenu.lixiao>li").hover(
      // 	function(){
      //     $(".leftmenu.lixiao>ul").addClass("list");

      // 	},
      // 	function(){
      //     $(".leftmenu.lixiao>ul").removeClass("list");

      // 	})
       function isSmall(){
       		return $("#zh").hasClass("lixiao")&&$("#zh").hasClass("leftmenu");
       }
     

        $(".xl").hover(
        	function(){
      	       
               isSmall()&&$(this).find("span").show();    

            },
            
            function(){
      	       
      	         isSmall()&&$(this).find("span").hide();
            }
        	)

       	
        // $("#com,#co").hover(
        //  	function(){
      	 //    isSmall()&&$("#com").addClass("hhh");
      	 //    isSmall()&&$("#co").addClass("list");
      	 //    isSmall()&&$("#co").show();
      	 //    isSmall()&&$("#xiala03").show();
      	 //    isSmall()&&$("#com>span").show();
        //     },
        //     function(){
      	 //    isSmall()&&$("#com").removeClass("hhh");
      	 //    isSmall()&&$("#co").removeClass("list");
      	 //    isSmall()&&$("#co").hide();
      	 //    isSmall()&&$("#xiala03").hide(); 
      	 //    isSmall()&&$("#com>span").hide();
        //     }
        //     );


          
            

            $(".dropdown-menu>li").click(function(){
              $(".dropdown-menu").hide();
            })

})
$(function(){
  $(".left a").bind('click',function(){
      if($(this).attr("href")==window.location.hash){
        loadContent(window.location.hash.slice(2));
      }
  });
  $(".content").on("click",".icon_lqy",function(){
    loadContent(window.location.hash.slice(2));
  });
    function getTagList(baseurl,key){
        var ajax = $.ajax({
          url: baseurl+"/article_tagssearchapi",
          type: "POST",
          data:{
            "key":key
          }
        });
        return ajax;
    }
    function getTagListschool(baseurl,key){
        var ajax = $.ajax({
          url: baseurl+"/school_labelsearchapi",
          type: "POST",
          data:{
            "key":key
          }
        });
        return ajax;
    }
    function getBase64(){}
    $(document).bind('click',function(e){
        var t = e.target || e.srcElement;
        $(".onlyfocus").removeClass("show");
    });
    $(document).on('click',".onlyfocus",function(e){
        e.stopPropagation();
    });
    window.getTagList = getTagList;
});