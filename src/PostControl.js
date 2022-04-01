
class PostControl {

    constructor() {
        this.button = document.querySelectorAll('.make_post');
        this.popup = document.querySelector('#popup')
    }


    close(clsbtn){
        clsbtn.closest('#popup').classList.remove('active')
    }
    open(){

        let popup = this.popup;
        this.button.forEach(singleUpost => {
            singleUpost.addEventListener('click',
            function(e)
            {
                popup.classList.add('active')
            }
            )
        })

        /**
         * This is for close
         */
        popup.querySelector('.close').onclick = function(e){
            this.close(e.target)
        }

        /**
         * Get Form Data from HTML Doc
         */
        this.getData(popup.querySelector('#post_form'))
    }
  

    getData(postForm){
        postForm.addEventListener('submit' , function(e){
            e.preventDefault();
            const allData = Object.fromEntries(new FormData(e.target).entries());
            
        })
    }



}


export default PostControl;