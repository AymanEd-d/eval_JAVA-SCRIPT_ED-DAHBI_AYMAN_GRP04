const inverserThemeBtn = document.querySelector('.ThemeColor')
let InversionTheme = 0; 
inverserThemeBtn.addEventListener('click', () => {

    if(InversionTheme == 0) {

        document.documentElement.style.setProperty('--texte', '#121212');

        document.documentElement.style.setProperty('--background', '#f1f1f1');
        

        InversionTheme++;


    } else {

        document.documentElement.style.setProperty('--texte', '#f1f1f1');

        document.documentElement.style.setProperty('--background', '#121212');


        InversionTheme--;

    }

})


