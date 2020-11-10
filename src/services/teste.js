export default{
    show(){
        console.log('apareci!!!')
    },

    validacao(){
        (document).ready(function(){
            (function(){
                ("#nome").mask('S'); //uma alteração foi feita na bibliteca jquery.mask.js para recursividade de strings
                ("#cpf").mask("000.000.000-00");
                ("#data").mask("00/00/0000");
                ("#bairro").mask('S');
                ("#cidade").mask('S');
                ("#cargo").mask('S');
                ("#depto").mask('S');
                ("#admissao").mask("00/00/0000");
            })
        })
    }
}