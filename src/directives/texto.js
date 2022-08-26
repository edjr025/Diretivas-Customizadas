export default {
    
        created(el, binding){ //chamado antes que os atributos do elemento ou ouvintes de evento sejam aplicados
           
            // console.log(el.style);
            // console.log(binding.value);
            // el.style.color = binding.value
            // el.style.fontSize = '150%'
            if(binding.value?.cor) el.style.color = binding.value.cor
            if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte
            let totalCaracter = 25
            if(binding.value?.totalCaracter) totalCaracter = binding.value.totalCaracter
    
            
            let textoOriginal = el.innerText
            let tamanhotextoOriginal = textoOriginal.length
            /* eslint-disable */
            let textoAjustado = ''
    
            if(tamanhotextoOriginal > totalCaracter){
                //vamos truncar o texto em 22 caracter e adionar o '...'
                textoAjustado = textoOriginal.substring(0, (totalCaracter - 3)) + '...'
            }else{
                //vamos manter o texto original
                textoAjustado = textoOriginal
            }
            el.innerText = textoAjustado
        
            // console.log('texto orginal', textoOriginal);
            // console.log('a diretiva foi aplicada com sucesso');
            // console.log('tamanho texto original', tamanhotextoOriginal);
           
        }
}


