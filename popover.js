  function popover(ax1,ay1,aw,ah,pw,ph,dw,dh,bx1,by1,bw,bh,aid,pid)
  {
  		// Box width and height (bx1,by1,bw,bh)
			// Popup Width and Height (pw,ph)
			// Diamond width and height (dw dh)
			// Anchor position and size (ax1,ay1,aw,ah)

			// Move Anchor
			var slist=document.getElementById(aid);
			slist.style.left=ax1+"px";
			slist.style.top=ay1+"px";
			slist.style.width=aw+"px";
			slist.style.height=ah+"px";

			var stl;
			if((ay1-ph-dh)<by1){
					py1=ay1+dh+ah;

					if((ax1+pw)<(bx1+bw)){
							px1=ax1;
							stl="popover arrow-top";
					}else{
							px1=(ax1+aw-pw);
							stl="popover arrow-topright";
					}
			}else{
					py1=ay1-ph-dh;

					if(ax1+pw<(bx1+bw)){
							px1=ax1;
							stl="popover arrow-bottom";
					}else{
							px1=(ax1+aw-pw);
							stl="popover arrow-bottomright";
					}
			}
			
			if(px1<bx1) px1=bx1;
			if((px1+pw)>(bx1+bw)) px1=bx1+bw-pw;	
			
			px1-=27;
			py1-=27;	

			// Move Popup content
			var pop=document.getElementById(pid);
			pop.style.left=px1+"px";
			pop.style.top=py1+"px";
			pop.style.width=pw+"px";
			pop.style.height=ph+"px";
			pop.className=stl;
  
  }