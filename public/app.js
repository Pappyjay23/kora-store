const menuIcon = document.querySelector('#menu-icon')
const menuItems = document.querySelector('#menu-items')
const menuLinks = document.querySelectorAll('.menu-links')

menuIcon.addEventListener('click', ()=>{
    if(menuItems.classList.contains('hidden') && window.innerWidth <= 768){
        menuItems.classList.remove('hidden')
        menuItems.classList.add(
            'flex',
            'flex-col',
            'justify-start',
            'absolute',
            'top-16',
            'left-0',
            'h-screen',
            'w-full',
            'bg-white',
            'pt-6',
            'duration-800'
        )
    }else{
        menuItems.classList.add('hidden')
        menuItems.classList.remove(
            'flex',
            'flex-col',
            'justify-start',
            'absolute',
            'top-16',
            'left-0',
            'h-screen',
            'w-full',
            'bg-white',
            'pt-6',
            'duration-800'
        )
    }
})

menuItems.addEventListener('click', ()=>{
    if(window.innerWidth <= 768){
        menuItems.classList.add('hidden')
    }
})