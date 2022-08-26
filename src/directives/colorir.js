export default {
    created: function(el, binding){
      el.style.color = binding.value
      console.log(binding);
    },
    updated: function(){

    }
  }