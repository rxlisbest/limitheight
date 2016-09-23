/**
* demo:
* 1.$("#limittext").limitheight();
* 2.$("#limittext").limitheight({"limit":1});
* 3.$("#limittext").limitheight({"limit":1,"fill":"......"});
* 4.$("#limittext").limitheight({"limit":1,"fill":"......"});
* 5.$("#limittext").limitheight({"limit":1,"fill":"......"}).limit("all");
* @param {Object} opt
* {
* limit:30,//显示高度
* fill:'...'//隐藏时候填充的文字
* moretext: "(more)",//隐藏部分文字时候显示的文字
* lesstext:"(less)",//全部文字时候显示的文字
* cssclass:"limittextclass",//启用更多的A标签的CSS类名
* }
* @author Roy
* @link http://www.ruixinglong.net
* @version 0.1
*/ 
jQuery.fn.extend({
	limitheight: function(opt) {
		opt = $.extend({
			"limit": 30,
			"fill": "...",
			"moretext": "展开全部",
			"lesstext": "收起",
			"cssclass": "limittextclass",
		},
		opt);
		var othis = this; // 作用域
		var $this = $(this);
		var h = $this.height();

		var getbuttom = function(showtext) {
			return "<br /><a href='javascript:;' class='" + opt.cssclass + "'>" + showtext + "<a>";
		}

		this.limit = function(limit, addbtn) {
			if (h <= limit || limit == 'all') {
				// code
			}
			else {
				$(this).css('overflow', 'hidden');
				$(this).height(limit);
				if(addbtn){
					var btn = getbuttom(opt.moretext);
					$this.after(btn);
				}
			}
		}

		this.limit(opt.limit, true);
		
		$(document).on("click", "." + opt.cssclass, function() {
			if ($(this).html() == opt.moretext) {
				$this.css('overflow', 'auto');
				$this.height(h);
				$(this).html(opt.lesstext);
			} else {
				othis.limit(opt.limit, false);
				$(this).html(opt.moretext);
			}
		});
		return this;
	}
});
