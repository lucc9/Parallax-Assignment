var player = $('#player'),
	pLocs = [0, -250, -500, -750, -1000, -1250, -1500],
	curFrm = 0,
	lastStep=0,
	// We need just a couple extra variables
	animationCycle, backPosY;

skrollr.init({
	beforerender: function(o){
		if(o.curTop < 6000  ) {
			animationCycle=2;
			backPosY= '-1250px';
		}  
		if(o.curTop < 4250 ) {
			animationCycle=2;
			backPosY= '-1000px';
		}  
		if(o.curTop < 3350 ) {
			animationCycle=2;
			backPosY= '-750px';
		}  
		if(o.curTop < 2500 ) {
			animationCycle=2;
			backPosY= '-500px';
		}  
		if(o.curTop < 1750 ) {
			animationCycle=2;
			backPosY= '-250px';
		}  
		if(o.curTop < 900 ) {
			animationCycle=2;
			backPosY= '0px';
		}  

		if(o.curTop > lastStep + 50) {
			if (curFrm>=animationCycle-1){ curFrm=-1; }
			player.css('background-position', pLocs[++curFrm] + 'px ' + backPosY);
			lastStep=o.curTop;
		} 
		else if(o.curTop < lastStep - 50) {
			if (curFrm<=0){ curFrm=animationCycle; }
			player.css('background-position', pLocs[--curFrm] + 'px ' + backPosY);
			lastStep = o.curTop;
		}

	}
});