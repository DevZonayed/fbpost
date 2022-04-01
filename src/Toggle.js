
class Toggle {
    constructor(button){
        this.button = button;
    }
    start(){
        this.button.forEach(singlePost => {
            singlePost.addEventListener('click' , function(e){
                e.target.nextElementSibling.classList.toggle('active')
            })
        })
    }
}

export default Toggle;