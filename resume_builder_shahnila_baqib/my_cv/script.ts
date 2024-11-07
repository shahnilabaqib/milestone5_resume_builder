//-------------- ref section ---------------------
let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
  ref_section!.classList.toggle('hide')
})

//-------------- exp section ---------------------
let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
  exp_section!.classList.toggle('hide')
})

//-------------- print section ---------------------
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
  window.print()
})

//-------------- language section ---------------------
let lang_section = document.getElementById('lang')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
  lang_section!.classList.toggle('hide')
})
//-------------- skill section---------------------
let skill_section = document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener('click', ()=>{
  skill_section!.classList.toggle('hide')
})
