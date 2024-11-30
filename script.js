//your JS code here. If required.
document.addEventListener("DOMContentLoaded", ()=>{
	const inputs=document.querySelectorAll(".code")

	inputs.forEach((input,index)=>{
		input.addEventListener("input", ()=>{
			if(input.value && index<inputs.length-1){
				inputs[index+1].focus()
			}
		})
		input.addEventListener("keydown", (e)=>{
			if(e.key="Backspace"){
				if(!input.value && index>0){
					inputs[index-1].focus()
				}
			}
		})
		input.addEventListener("focus", () => {
            input.setAttribute("id", `code-${index + 1}`);
        });
	})
})