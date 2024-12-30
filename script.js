//your JS code here. If required.
const sel = document.getElementById('colorSelect')
const btn = document.getElementById('button')
btn.addEventListener('click', function(){
	const selIndex = sel.selectedIndex;
	if(selIndex !== -1){
		sel.remove(selIndex);
	} 
});