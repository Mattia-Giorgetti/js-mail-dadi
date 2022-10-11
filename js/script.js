// Accesso tramite mail 

let mailSubmitButton = document.getElementById('mail_submit');
let mailList = ['leonardo@gmail.com', 'raffaello@gmail.com', 'michelangelo@gmail.com', 'donatello@gmail.com'];

const accedi = function(){
    let userMail = document.querySelector('#my_email').value;

    for(let i = 0; i < mailList.length; i++){
        let mailElement = mailList[i];
        console.log(mailElement);
        if(userMail === mailElement){
            document.querySelector('.welcome_user').innerHTML = `Benvenuto: Hai il permesso di giocare`;
            document.getElementById('my_roll').classList.add ('show');
        } else {
            document.querySelector('.welcome_user').innerHTML = `Alt! Non hai i permessi per poter giocare!`
        }
    }
    
}
mailSubmitButton.addEventListener('click', accedi);



// Gioco Dadi 
const userRoll = document.getElementById('my_roll');
const tiroRandom = function(){
    const numeriDaGenerare = [6];
    for(let i = 1; i <= numeriDaGenerare; i++){
       let numeriGeneratiUser = Math.floor((Math.random() * 6) + 1);
       document.querySelector('.user_result').innerHTML = `Il tuo tiro è: ${numeriGeneratiUser}`;
       let numeriGeneratiComputer = Math.floor((Math.random() * 6) + 1);
       document.querySelector('.computer_result').innerHTML = `Il tiro del Computer è: ${numeriGeneratiComputer}`;
       if(numeriGeneratiUser > numeriGeneratiComputer){
        document.querySelector('.final_result').innerHTML = `Complimenti Hai Vinto! .... Ritenta? `;
    } else if (numeriGeneratiUser < numeriGeneratiComputer){
        document.querySelector('.final_result').innerHTML = `Che peccato! Hai Perso...rivincita? `;
    } else if (numeriGeneratiUser == numeriGeneratiComputer){
        document.querySelector('.final_result').innerHTML = `Parità! Rivincita? `;
    }
    }
} 

userRoll.addEventListener('click', tiroRandom);


