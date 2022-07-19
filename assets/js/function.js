var menu = document.querySelector('div.left_menu') 
var iconNav = document.querySelector('.logo .flav_menu')
var listMenu = menu.getElementsByClassName('list')

/**
 * objet contenant les gestionnaires d'evenements
*/
var listernFunctions = {
     openMenu: () => {
        menu.style.display = 'block'
    },
     closeMenu: () => {
        menu.style.display = 'none'
     }
}
/**
 * fonction qui realise les abonnements
 */
var setupListerns = () => {
    iconNav.onmouseover = listernFunctions.openMenu
    //menu.onmouseleave = listernFunctions.closeMenu
    menu.addEventListener('mouseleave',listernFunctions.closeMenu )
    for (let index = 0; index < listMenu.length; index++) {
        const li = listMenu[index];
        li.addEventListener('click', listernFunctions.closeMenu)
    }
    
}
