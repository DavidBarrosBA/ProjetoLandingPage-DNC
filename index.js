var leonardo = window.document.getElementById('leonardo');
var samantha = window.document.getElementById('samantha');
var bruna = window.document.getElementById('bruna');
var setaesquerda = window.document.getElementById('setaesquerda');
var setadireita = window.document.getElementById('setadireita');

function rolarparadireita()
{
    leonardo.style.display = 'none';
    bruna.style.display = 'flex';

    
}

function rolarparaesquerda()
{
    bruna.style.display = 'none';
    leonardo.style.display = 'flex';
}