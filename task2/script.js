const consoleLog = document.querySelector('#consoleLog'); 
consoleLog.addEventListener('click', () => { 
    alert('Служит для вывода информации в консоль'); 
})


const alert1 = document.querySelector('#alert1');
alert1.addEventListener('click', () => { 
    alert('Служит для вывода информации в всплывающем сообщении'); 
})


const prompt1 = document.querySelector('#prompt1');
prompt1.addEventListener('click', () => { 
    alert('Служит для вывода информации в всплывающем диалоговом окне'); 
})
